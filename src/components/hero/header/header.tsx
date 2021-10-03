import React from "react";
import { Hero } from "../hero";

export const Header = () => {
  return (
    <>
      <nav className="px-4 fixed py-2 w-full items-center flex justify-between">
        <section className="sm:w-7/12 w-10/12 items-center justify-start flex">
          <img
            src="/imgs/logo.svg"
            alt="Pexels.com Logo Clone!"
            className="w-10 h-10 rounded-md"
          />
          <h1 className="text-lg sm:block hidden font-medium ml-4 text-white">
            Pexels
          </h1>

          <input
            type="text"
            placeholder="Search for free Photos"
            className="text-black text-lg placeholder-gray-500  ml-5 flex-grow font-light rounded-md px-4 py-2"
          />
        </section>
        <ul className="sm:flex hidden items-center justify-center w-4/12">
          <li className="text-base ml-10 text-white">Explore</li>
          <li className="text-base ml-10 text-white">License</li>
          <li className="text-base ml-10 text-white">Bell</li>
          <li className="text-base ml-10 text-white">User</li>
          <li className="text-base ml-10 text-white">
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
