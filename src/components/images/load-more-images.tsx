import { memo } from "react";
import { useLoadingMore } from "../loading-more/loading-more";
import { PlaceholderImages } from "../placeholder-images/placeholder-images-collection";

export const LoadMoreImages = memo(() => {
  const { observer } = useLoadingMore();

  return (
    <section
      ref={(ref) => ref && observer.current.observe(ref)}
      className="w-full"
    >
      <PlaceholderImages length={1} />
    </section>
  );
});
