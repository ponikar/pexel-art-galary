import React, { FC } from "react";
import { useImages } from "../../contexts/images.context";
import { useObserver } from "../../hooks/use-obeserver";

export const LoadingMore: FC = ({ children }) => {
  const { nextPage, isFetchingNextPage } = useImages();
  const observer = useObserver((entry) => {
    if (entry.isIntersecting && !isFetchingNextPage) {
      console.log("I AM SUPPOSED TO CALL ONCE ONLY");
      nextPage();
    }
  });

  return (
    <section
      ref={(ref) => ref && observer.current.observe(ref)}
      style={{ height: "50vh", bottom: "25%" }}
      className="absolute border"
    >
      {" "}
      loading area{" "}
    </section>
  );
};
