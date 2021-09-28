import { createContext, FC, useContext, useEffect, useState } from "react";
import { ImageAPIResponseType, ImageType } from "../@types/image";
import { useApi } from "../hooks/use-api";
import { useObserver } from "../hooks/use-obeserver";

interface ImageContextType {
  cols: ImageType[][];
  isLoading: boolean;
  error: string | unknown;
  metaInformation: ImageAPIResponseType | undefined;
}

const ImageContext = createContext<ImageContextType | null>(null);

export const ImageContextProvider: FC = ({ children }) => {
  const [cols, setCols] = useState<ImageType[][]>([[], [], []]);
  const [imageMetaInfo, setImageMetaInfo] = useState<ImageAPIResponseType>();
  useObserver(cols);
  const { data, isLoading, error } = useApi<ImageAPIResponseType>({
    url: "https://api.pexels.com/v1/search?query=laptops&per_page=40",
    requestId: "imagesCollections",
    options: {
      headers: {
        Authorization: import.meta.env.VITE_PEXEL_API_KEY,
      },
    },
  });
  useEffect(() => {
    if (data) {
      setImageMetaInfo(data);
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

  console.log(data);

  return (
    <ImageContext.Provider
      value={{ cols, isLoading, error, metaInformation: imageMetaInfo }}
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
