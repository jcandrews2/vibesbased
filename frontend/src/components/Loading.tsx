import React, { FC } from "react";
import LoadingIcon from "../images/loading.svg";

const Loading: FC = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <img
        src={LoadingIcon}
        alt='Loading'
        className='w-[2.25rem] h-auto select-none'
      />
    </div>
  );
};

export default Loading;
