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

  isFetchingNextPage: boolean;

  nextPage: () => void;
}

const ImageContext = createContext<ImageContextType | null>(null);

export const ImageContextProvider: FC = ({ children }) => {
  const [cols, setCols] = useState<ImageContextType["cols"]>([[], [], []]);
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
      const paginate = pages[pages.length - 1];
      while (paginate.photos.length) {
        newArr[counter].push(...paginate.photos.splice(0, 3));
        counter = counter == 2 ? 0 : counter + 1;
      }
      setCols([...newArr]);
    }
  }, [data]);

  console.log(cols[0].length + cols[1].length + cols[2].length);

  const contextValues = useMemo(
    () => ({
      cols,
      isLoading,
      error,
      nextPage,
      isFetchingNextPage,
    }),
    [cols, isLoading, error, nextPage, isFetchingNextPage]
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
