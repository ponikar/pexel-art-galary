import { memo } from "react";
import { useLoadingMore } from "../loading-more/loading-more";
import { PlaceholderImages } from "../placeholder-images/placeholder-images-collection";

export const LoadMoreImages = memo(() => {
  const { loadingRefs, observer } = useLoadingMore();

  return (
    <section
      ref={(ref) => {
        if (ref) {
          loadingRefs.push(ref);
          observer.current.observe(ref);
        }
      }}
      className="w-full"
    >
      <PlaceholderImages length={3} />
    </section>
  );
});
