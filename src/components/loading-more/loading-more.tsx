import React, {
  createContext,
  FC,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";

interface LoadingMoreContextType {
  loadingRefs: HTMLElement[];
  observer: MutableRefObject<IntersectionObserver>;
}

const LoadingMoreContext = createContext<LoadingMoreContextType | undefined>(
  undefined
);

export const LoadingMoreProvider: FC = ({ children }) => {
  const loadingRefs = useRef<HTMLElement[]>([]);
  const { nextPage } = useImages();
  const timer = useRef<number>(0);
  const observer = useObserver((entries) => {
    entries.forEach((entry) => {
      // if one of the element is
      // intresecting with screen
      if (entry.isIntersecting) {
        clearInterval(timer.current);
        timer.current = setTimeout(() => {
          console.log("I AM SUPPOSED TO CALL ONCE ONLY");
        }, 1000);
      }
    });
  });

  const stopObserving = () => {
    if (loadingRefs.current) {
      loadingRefs.current.forEach((ref) => observer.current.unobserve(ref));
    }
  };
  return (
    <LoadingMoreContext.Provider
      value={{ loadingRefs: loadingRefs.current, observer }}
    >
      {children}
    </LoadingMoreContext.Provider>
  );
};

export const useLoadingMore = () => {
  const context = useContext(LoadingMoreContext);

  if (!context) throw new Error("Make sure to wrap Loading ref component");

  return context;
};
