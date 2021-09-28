import { useEffect, useRef } from "react";
import { ImageType } from "../@types/image";

export const useObserver = (cols: ImageType[][]) => {
  // using any for tempory
  const intersectionObserver = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = entry.target.getAttribute("datasrc") as string;
          intersectionObserver.current?.unobserve(img);
          img.onload = (e) => {
            img.classList.remove(
              ...["placeholder-image-h", "placeholder-image-v", "animate-pulse"]
            );
          };
        }
      });
    });
  }, []);

  useEffect(() => {
    if (intersectionObserver.current) {
      document.querySelectorAll(".lazy-loading").forEach((ele) => {
        intersectionObserver.current?.observe(ele);
        ele.classList.remove("lazy-loading");
      });
    }
  }, [cols, intersectionObserver.current]);

  return intersectionObserver;
};
