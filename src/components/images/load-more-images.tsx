import React, { useEffect, useRef, useState } from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";
import { PlaceholderImages } from "../placeholder-images/placeholder-images-collection";

export const LoadMoreImages = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isWatching, setIsWatching] = useState(false);
  const {
    cols,
    metaInformation: { nextPage },
    isLoading,
  } = useImages();
  const observer = useObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // nextPage();
        console.log(entry.intersectionRatio);
      }
    });
  });

  useEffect(() => {
    if (!isWatching && cols[0].length) {
      ref.current && observer.current.observe(ref.current);
      setIsWatching(true);
    }
  }, [cols, isWatching]);

  return (
    <section ref={ref} className="w-full">
      <PlaceholderImages length={3} />
    </section>
  );
};
