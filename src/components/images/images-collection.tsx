import React, { FC } from "react";
import { ImageType } from "../../@types/image";
import { useImages } from "../../contexts/images.context";
import { ImageItem } from "./image-item";

interface ImageCollectionTypes {}
export const ImageCollections: FC<ImageCollectionTypes> = () => {
  const { cols } = useImages();
  return (
    <>
      {cols.map((col, index) => (
        <div className="flex flex-col" key={index}>
          {col.map((c) => (
            <ImageItem key={c.id} {...c} />
          ))}
        </div>
      ))}
    </>
  );
};
