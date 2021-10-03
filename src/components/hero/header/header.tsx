import React from "react";
import { Search } from "../../search/search";
import { Hero } from "../hero";
import { Logo } from "./logo";
import { Navigations } from "./navigations";

export const Header = () => {
  return (
    <>
      <nav className="px-4 fixed sm:py-2 py-3 w-full items-center flex">
        <Logo />
        <Search className="sm:ml-5 ml-3 md:w-6/12" />
        <Navigations />
      </nav>
      <Hero />
    </>
  );
};
