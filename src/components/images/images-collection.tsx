import React, { FC, useEffect, useState } from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";
import { LoadingMore } from "../loading-more/loading-more";
import { PlaceholderImages } from "../placeholder-images/placeholder-images-collection";
import { ImageItem } from "./image-item";

interface ImageCollectionTypes {}
export const ImageCollections: FC<ImageCollectionTypes> = () => {
  const { cols, isFetchingNextPage } = useImages();

  const [shortLengthIndex, setShortLengthIndex] = useState(0);

  useEffect(() => {
    let length = Infinity;
    cols.forEach((c, i) => {
      if (c.length < length) {
        length = c.length;
        setShortLengthIndex(i);
      }
    });
  }, [cols, shortLengthIndex]);

  console.log(shortLengthIndex);
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
    <>
      {cols.map((col, index) => (
        <div className="flex border relative flex-col" key={index}>
          {col.map((c) => (
            <ImageItem observer={observer.current} key={c.id} {...c} />
          ))}
          {shortLengthIndex === index && <LoadingMore />}
          {isFetchingNextPage && <PlaceholderImages length={3} />}
        </div>
      ))}
    </>
  );
};
