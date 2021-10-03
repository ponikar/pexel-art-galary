import React from "react";
import { Search } from "../search/search";
import "./hero.style.css";
export const Hero = () => {
  return (
    <section className="hero-container w-full bg-cover flex justify-center items-center">
      <div className="xl:w-6/12 lg:w-8/12 md:w-11/12 w-11/12 text-white mx-auto">
        <h2
          className="text-4xl w-11/12 font-semibold"
          style={{ lineHeight: "1.3" }}
        >
          The best free stock photos & videos shared by talented creators.
        </h2>
        <Search
          className="sm:w-11/12 w-full
         shadow py-3 my-3"
        />
        {/* suggestions */}
        <section className="text-sm flex">
          <span className="font-medium text-white"> Suggested:</span>
          <p className="font-light ml-2 text-gray-50">
            desktop backgrounds texture art backgrounds room pattern more
          </p>
        </section>
      </div>
    </section>
  );
};
