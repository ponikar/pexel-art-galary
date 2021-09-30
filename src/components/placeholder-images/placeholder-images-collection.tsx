import React from "react";
import { getPlaceholderImageStyle } from "../../utils/common.utils";

export const PlaceholderImages = ({ length }: { length: number }) => {
  const cols = new Array(length).fill(0);
  return (
    <>
      {cols.map((ele, index) => (
        <img
          key={index}
          src="/imgs/placeholder.svg"
          className={`${getPlaceholderImageStyle()} sm:mb-5 mb-1 object-cover animate-pulse`}
        />
      ))}
    </>
  );
};
