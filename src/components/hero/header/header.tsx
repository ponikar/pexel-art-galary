import React, { useEffect, useState } from "react";
import { useObserver } from "../../../hooks/use-obeserver";
import { Search } from "../../search/search";
import { Hero } from "../hero";
import { Logo } from "./logo";
import { Navigations } from "./navigations";

export const Header = () => {
  const [reachedTop, setReachedTop] = useState(true);
  const observer = useObserver((entry) => {
    setReachedTop(entry.isIntersecting);
    console.log("I AM SCROLLING");
  }, 250);

  return (
    <>
      <div
        ref={(ref) => ref && observer.current.observe(ref)}
        className="p-10 absolute"
      />
      <nav
        className={`px-4 fixed w-full items-center flex ${
          !reachedTop && "bg-header-background"
        }`}
      >
        <Logo />
        {!reachedTop && <Search className="sm:ml-5 ml-3 md:w-6/12" />}
        <Navigations />
      </nav>
      <Hero />
    </>
  );
};
