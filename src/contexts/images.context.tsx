import React, {
  createContext,
  FC,
  useContext,
  useEffect,
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

  const onSetCurrentPage = () => {
    // if (!isLoading) {
    setCurrentPage((page) => page + 1);
    //   console.log("FETCHING");
    // }
  };

  return (
    <ImageContext.Provider
      value={{
        cols,
        isLoading,
        error,
        metaInformation: {
          currentPage,
          nextPage: onSetCurrentPage,
        },
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const images = useContext(ImageContext);

  if (!images) throw Error("Make use Image context provider are there!");

  return images;
};
