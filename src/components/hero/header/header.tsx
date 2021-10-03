import React from "react";
import { Search } from "../../search/search";
import { Hero } from "../hero";

export const Header = () => {
  return (
    <>
      <nav className="px-4 fixed sm:py-2 py-3 w-full items-center flex justify-between">
        <section className="sm:w-7/12 w-10/12 items-center justify-start flex">
          <img
            src="/imgs/logo.svg"
            alt="Pexels.com Logo Clone!"
            className="w-10 h-10 rounded-md"
          />
          <h1 className="text-lg sm:block hidden font-medium ml-4 text-white">
            Pexels
          </h1>

          <Search className="sm:ml-5 ml-3 flex-grow " />
        </section>
        <ul className="sm:flex hidden items-center justify-center w-4/12">
          <li className="text-base ml-7 text-white">Explore</li>
          <li className="text-base ml-7 text-white">License</li>
          <li className="text-base ml-7 text-white">
            <img
              src="/imgs/bell.svg"
              alt="Notifications from Pexels"
              className="w-6"
            />
          </li>
          <li className="text-base ml-7 text-white item-center flex">
            <img
              src="https://www.gravatar.com/avatar/cc579483542fb5af21184bad8b23f9f8?s=60&d=mm"
              alt="User's Profile Picture"
              className="w-6 rounded-full border-2 border-white"
            />

            <img className="ml-2" src="/imgs/more-arrow.svg" />
          </li>
          <li className="text-base ml-7 text-white">
            <button className="py-2 px-7 font-semibold bg-primary rounded-sm">
              Login
            </button>
          </li>
        </ul>
      </nav>
      <Hero />
    </>
  );
};
