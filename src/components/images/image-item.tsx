import React, { FC, memo } from "react";
import { ImageType } from "../../@types/image";
import { getPlaceholderImageStyle } from "../../utils/common.utils";

interface ImageItemTypes extends ImageType {
  observer: IntersectionObserver;
}

export const ImageItem: FC<ImageItemTypes> = memo(
  ({ src, avg_color, id, observer }) => {
    return (
      <img
        ref={(ref) => ref && observer.observe(ref)}
        key={id}
        src="/imgs/placeholder.svg"
        datasrc={src.medium}
        loading="lazy"
        style={{ backgroundColor: avg_color }}
        className={`w-full sm:mb-5 mb-1 object-cover animate-pulse`}
      />
    );
  }
);
