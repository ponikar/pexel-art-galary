import React, {
  createContext,
  FC,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";

interface LoadingMoreContextType {
  observer: MutableRefObject<IntersectionObserver>;
}

const LoadingMoreContext = createContext<LoadingMoreContextType | undefined>(
  undefined
);

export const LoadingMoreProvider: FC = ({ children }) => {
  const { nextPage, isFetchingNextPage } = useImages();
  const timer = useRef<number>(0);
  const observer = useObserver((entries) => {
    entries.forEach((entry) => {
      clearInterval(timer.current);
      if (entry.isIntersecting && !isFetchingNextPage) {
        timer.current = setTimeout(() => {
          console.log("I AM SUPPOSED TO CALL ONCE ONLY");
          nextPage();
        }, 800);
      }
    });
  });

  return (
    <LoadingMoreContext.Provider value={{ observer }}>
      {children}
    </LoadingMoreContext.Provider>
  );
};

export const useLoadingMore = () => {
  const context = useContext(LoadingMoreContext);

  if (!context) throw new Error("Make sure to wrap Loading ref component");

  return context;
};
