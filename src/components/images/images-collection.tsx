import React, { FC, useEffect } from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";
import { LoadingMoreProvider } from "../loading-more/loading-more";
import { ImageItem } from "./image-item";
import { LoadMoreImages } from "./load-more-images";

interface ImageCollectionTypes {}
export const ImageCollections: FC<ImageCollectionTypes> = () => {
  const { cols } = useImages();

  const observer = useObserver((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement;
      img.src = entry.target.getAttribute("datasrc") as string;
      observer.current?.unobserve(img);
      img.onload = (e) => {
        img.classList.remove("animate-pulse");
      };
    }
  });

  return (
    <LoadingMoreProvider>
      {cols.map((col, index) => (
        <div className="flex flex-col" key={index}>
          {col.map((c) => (
            <ImageItem observer={observer.current} key={c.id} {...c} />
          ))}
          <LoadMoreImages />
        </div>
      ))}
    </LoadingMoreProvider>
  );
};
