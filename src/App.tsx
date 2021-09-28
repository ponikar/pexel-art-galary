import { QueryClient, QueryClientProvider } from "react-query";
import { ImageCollections } from "./components/images/images-collection";
import { LoadMoreImages } from "./components/images/load-more-image";
import { ImageContextProvider } from "./contexts/images.context";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageContextProvider>
        <section className="grid sm:w-10/12 w-11/12 mx-auto sm:gap-5 gap-1 grid-cols-3 border">
          <ImageCollections />
        </section>
        <LoadMoreImages />
      </ImageContextProvider>
    </QueryClientProvider>
  );
};

export default App;
