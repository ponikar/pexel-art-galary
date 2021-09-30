import React, { FC, useEffect } from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";
import { LoadingMoreProvider } from "../loading-more/loading-more";
import { ImageItem } from "./image-item";
import { LoadMoreImages } from "./load-more-images";

interface ImageCollectionTypes {}
export const ImageCollections: FC<ImageCollectionTypes> = () => {
  const { cols } = useImages();

  const observer = useObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = entry.target.getAttribute("datasrc") as string;
        observer.current?.unobserve(img);
        img.onload = (e) => {
          img.classList.remove(
            ...["placeholder-image-h", "placeholder-image-v", "animate-pulse"]
          );
        };
      }
    });
  });

  useEffect(() => {
    document.querySelectorAll(".lazy-loading").forEach((ele) => {
      observer.current.observe(ele);
      ele.classList.remove("lazy-loading");
    });
  }, [cols, observer.current]);
  return (
    <LoadingMoreProvider>
      {cols.map((col, index) => (
        <div className="flex flex-col" key={index}>
          {col.map((c) => (
            <ImageItem key={c.id} {...c} />
          ))}
          <LoadMoreImages />
        </div>
      ))}
    </LoadingMoreProvider>
  );
};
