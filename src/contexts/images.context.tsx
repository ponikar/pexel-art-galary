import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ImageAPIResponseType, ImageType } from "../@types/image";
import { usePaginateApi } from "../hooks/use-api";

interface ImageContextType {
  cols: ImageType[][];
  isLoading: boolean;

  error: string | unknown;

  nextPage: () => void;
}

const ImageContext = createContext<ImageContextType | null>(null);

export const ImageContextProvider: FC = ({ children }) => {
  const [cols, setCols] = useState<ImageType[][]>([[], [], []]);
  const currentPage = useRef(1);
  const { data, isLoading, error, isFetchingNextPage, fetchNextPage } =
    usePaginateApi<ImageAPIResponseType>({
      url: "https://api.pexels.com/v1/search",
      requestId: "imagesCollections",
      options: {
        headers: {
          Authorization: import.meta.env.VITE_PEXEL_API_KEY,
        },
      },
    });

  const nextPage = useCallback(() => {
    if (currentPage.current && !isFetchingNextPage) {
      currentPage.current += 1;
      fetchNextPage({ pageParam: currentPage.current });
    }
  }, [currentPage.current, isFetchingNextPage]);

  useEffect(() => {
    if (data) {
      const { pages } = data;

      const newArr = cols;
      let counter = 0;
      if (currentPage.current <= pages.length) {
        while (pages[currentPage.current - 1].photos.length) {
          newArr[counter].push(
            ...pages[currentPage.current - 1].photos.splice(0, 3)
          );
          counter = counter == 2 ? 0 : counter + 1;
        }
        setCols([...newArr]);
      } else {
        currentPage.current = pages.length;
      }
    }
  }, [data]);

  const contextValues = useMemo(
    () => ({
      cols,
      isLoading,
      error,
      nextPage,
    }),
    [cols, isLoading, error, nextPage]
  );

  return (
    <ImageContext.Provider value={{ ...contextValues }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const images = useContext(ImageContext);

  if (!images) throw Error("Make use Image context provider are there!");

  return images;
};
