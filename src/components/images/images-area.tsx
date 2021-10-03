import React from "react";
import { useImages } from "../../contexts/images.context";
import { ImageLoading } from "./image-loading";
import { ImageCollections } from "./images-collection";

export const ImageArea = () => {
  const { isLoading } = useImages();
  return (
    <section className="grid sm:w-10/12 w-11/12 mx-auto sm:gap-5 gap-1 grid-cols-3">
      {isLoading ? <ImageLoading /> : <ImageCollections />}
    </section>
  );
};
