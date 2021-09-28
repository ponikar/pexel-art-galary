import React, { FC } from "react";
import { ImageType } from "../../@types/image";

interface ImageItemTypes extends ImageType {}

export const ImageItem: FC<ImageItemTypes> = ({ src, avg_color, id }) => {
  return (
    <img
      key={id}
      src="/imgs/placeholder.svg" // Todo: Add placeholder image here!
      datasrc={src.large}
      loading="lazy"
      style={{ backgroundColor: avg_color }}
      className={`${
        Math.floor(Math.random() * 2) == 0
          ? "placeholder-image-v"
          : "placeholder-image-h"
      } w-full sm:mb-5 mb-2 object-cover lazy-loading animate-pulse`}
    />
  );
};
