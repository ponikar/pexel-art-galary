import React from "react";
import { NavigationLink } from "./navigation-link";

export const Navigations = () => {
  return (
    <ul className="lg:flex py-4 hidden items-center flex-grow justify-end">
      <NavigationLink> Explore</NavigationLink>
      <NavigationLink> License</NavigationLink>
      <NavigationLink>
        <img
          src="/imgs/bell.svg"
          alt="Notifications from Pexels"
          className="w-6"
        />
      </NavigationLink>
      <NavigationLink className="item-center flex">
        <img
          src="https://www.gravatar.com/avatar/cc579483542fb5af21184bad8b23f9f8?s=60&d=mm"
          alt="User's Profile Picture"
          className="w-6 rounded-full border-2 border-white"
        />

        <img className="ml-2" src="/imgs/more-arrow.svg" />
      </NavigationLink>
      <NavigationLink className="ml-4 mr-0">
        <button className="py-2 px-7 font-semibold bg-primary rounded-sm">
          Login
        </button>
      </NavigationLink>
    </ul>
  );
};
