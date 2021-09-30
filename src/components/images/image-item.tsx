import React, { FC, memo } from "react";
import { ImageType } from "../../@types/image";
import { getPlaceholderImageStyle } from "../../utils/common.utils";

interface ImageItemTypes extends ImageType {}

export const ImageItem: FC<ImageItemTypes> = memo(({ src, avg_color, id }) => {
  return (
    <img
      key={id}
      src="/imgs/placeholder.svg" // Todo: Add placeholder image here!
      datasrc={src.large}
      loading="lazy"
      style={{ backgroundColor: avg_color }}
      className={`${getPlaceholderImageStyle()} w-full sm:mb-5 mb-1 object-cover lazy-loading animate-pulse`}
    />
  );
});
