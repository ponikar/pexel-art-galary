import React, { useEffect, useRef, useState } from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";

export const LoadMoreImages = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isWatching, setIsWatching] = useState(false);
  const {
    cols,
    metaInformation: { nextPage },
  } = useImages();
  const observer = useObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nextPage();
        console.log(entry.target.innerHTML);
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
    <section ref={ref} className="p-4">
      I will load more data!
    </section>
  );
};
