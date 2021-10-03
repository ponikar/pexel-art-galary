import React, { FC, InputHTMLAttributes } from "react";

export const Search: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className = "",
  ...rest
}) => {
  return (
    <section
      className={`${className} bg-white flex rounded-md px-4 py-2 items-center`}
    >
      <input
        {...rest}
        type="text"
        placeholder="Search for free Photos"
        className={`text-black flex-grow text-lg placeholder-gray-500 font-light `}
      />
      <img src="/imgs/search.svg" alt="Search Images in Website" />
    </section>
  );
};
