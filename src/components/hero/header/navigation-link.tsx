import React, { FC } from "react";

interface NavigationLinkProps {
  className?: string;
}
export const NavigationLink: FC<NavigationLinkProps> = ({
  children,
  className = "",
}) => {
  return (
    <li className={`${className} text-base mx-4 text-white`}>{children}</li>
  );
};
