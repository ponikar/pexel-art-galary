import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ImageAPIResponseType, ImageType } from "../@types/image";
import { usePaginateApi } from "../hooks/use-api";

interface ImageContextType {
  cols: ImageType[][];
  isLoading: boolean;

  error: string | unknown;

  metaInformation: {
    currentPage: number;
    nextPage: () => void;
  };
}

const ImageContext = createContext<ImageContextType | null>(null);

export const ImageContextProvider: FC = ({ children }) => {
  const [cols, setCols] = useState<ImageType[][]>([[], [], []]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error, isFetching } =
    usePaginateApi<ImageAPIResponseType>({
      url: "https://api.pexels.com/v1/search",
      requestId: "imagesCollections",
      options: {
        headers: {
          Authorization: import.meta.env.VITE_PEXEL_API_KEY,
        },
      },
      page: currentPage,
    });
  useEffect(() => {
    if (data) {
      const { photos } = data;
      const newArr = cols;
      let counter = 0;
      while (photos.length) {
        newArr[counter].push(...photos.splice(0, 3));
        counter = counter == 2 ? 0 : counter + 1;
      }
      setCols([...newArr]);
    }
  }, [data]);

  const onSetCurrentPage = useCallback(() => {
    // if (!isLoading) {
    setCurrentPage((page) => page + 1);
    //   console.log("FETCHING");
    // }
  }, [setCurrentPage]);

  const contextValues = useMemo(
    () => ({
      cols,
      isLoading,
      error,
      metaInformation: {
        currentPage,
        nextPage: onSetCurrentPage,
      },
    }),
    [cols, isLoading, error, currentPage, onSetCurrentPage]
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
