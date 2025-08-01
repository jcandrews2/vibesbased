// URLs
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5050";
const SPOTIFY_API_URL =
  import.meta.env.SPOTIFY_API_URL || "https://api.spotify.com/v1";

// Endpoint configuration object
export const endpoints = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    token: `${BASE_URL}/auth/token`,
    callback: `${BASE_URL}/auth/callback`,
  },
  user: {
    me: `${BASE_URL}/user/me`,
    create: (id: string) => `${BASE_URL}/user/${id}`,
    get: (id: string) => `${BASE_URL}/user/${id}`,
    recommendations: (id: string) => `${BASE_URL}/user/${id}/recommendations`,
    likes: (id: string) => `${BASE_URL}/user/${id}/likes`,
    dislikes: (id: string) => `${BASE_URL}/user/${id}/dislikes`,
    requests: (id: string) => `${BASE_URL}/user/${id}/requests`,
    artists: (id: string) => `${BASE_URL}/user/${id}/artists`,
  },
  player: {
    play: (deviceId: string) =>
      `${SPOTIFY_API_URL}/me/player/play?device_id=${deviceId}`,
    seek: (positionMs: number) =>
      `${SPOTIFY_API_URL}/me/player/seek?position_ms=${positionMs}`,
    transfer: `${SPOTIFY_API_URL}/me/player`,
    transferPlayback: (deviceId: string) =>
      `${SPOTIFY_API_URL}/me/player?device_ids[]=${deviceId}&play=true`,
  },
  spotify: {
    track: (id: string) => `${SPOTIFY_API_URL}/tracks/${id}`,
    artist: (id: string) => `${SPOTIFY_API_URL}/artists/${id}`,
  },
} as const;

export type Endpoints = typeof endpoints;
