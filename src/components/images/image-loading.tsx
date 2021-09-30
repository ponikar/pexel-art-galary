import React from "react";
import { PlaceholderImages } from "../placeholder-images/placeholder-images-collection";

const cols = new Array(3).fill(3);
export const ImageLoading = () => {
  return (
    <>
      {cols.map((c, index) => (
        <section key={index} aria-label="images is being loading, please wait!">
          <PlaceholderImages key={index} length={10} />
        </section>
      ))}
    </>
  );
};
