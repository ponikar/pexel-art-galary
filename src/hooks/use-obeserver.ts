import { useEffect, useRef } from "react";
import { ImageType } from "../@types/image";

type CallbackType = (entries: IntersectionObserverEntry[]) => void;
export const useObserver = (callback: CallbackType) => {
  // using any for tempory
  const intersectionObserver = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => callback(entries))
  );
  useEffect(() => {
    () => {
      intersectionObserver.current.disconnect();
    };
  }, []);
  return intersectionObserver;
};
