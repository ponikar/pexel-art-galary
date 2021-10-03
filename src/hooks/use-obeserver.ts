import { useEffect, useRef } from "react";
import { ImageType } from "../@types/image";

type CallbackType = (entries: IntersectionObserverEntry) => void;
export const useObserver = (callback: CallbackType, timer?: number) => {
  const clearTimer = useRef<number>(0);
  // using any for tempory
  const intersectionObserver = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (timer) {
          clearTimeout(clearTimer.current);
          clearTimer.current = setTimeout(() => {
            callback(entry);
          }, timer);
        } else {
          callback(entry);
        }
      });
    })
  );
  useEffect(() => {
    () => {
      intersectionObserver.current.disconnect();
    };
  }, []);
  return intersectionObserver;
};
