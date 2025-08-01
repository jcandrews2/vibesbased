import { RGB } from "../types";

export const getAverageRGB = (imgEl: HTMLImageElement): RGB => {
  const blockSize = 5; // only visit every 5 pixels
  const defaultRGB: RGB = { r: 0, g: 0, b: 0 }; // for non-supporting envs
  const canvas = document.createElement("canvas");
  const context = canvas.getContext && canvas.getContext("2d");

  if (!context) {
    return defaultRGB;
  }

  const height = (canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height);
  const width = (canvas.width =
    imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width);

  context.drawImage(imgEl, 0, 0);

  let data: ImageData;
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */
    return defaultRGB;
  }

  const length = data.data.length;
  let i = -4;
  const rgb: RGB = { r: 0, g: 0, b: 0 };
  let count = 0;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
};

/**
 * Get the dominant color from an image URL
 */
export const getDominantColor = async (
  imageUrl: string
): Promise<string | null> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      const rgb = getAverageRGB(img);
      resolve(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    };

    img.onerror = () => resolve(null);
    img.src = imageUrl;
  });
};
