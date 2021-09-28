import { QueryClient, QueryClientProvider } from "react-query";
import { ImageCollections } from "./components/images/images-collection";
import { ImageContextProvider } from "./contexts/images.context";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageContextProvider>
        <section className="grid sm:w-10/12 w-11/12 mx-auto sm:gap-5 gap-2 sm:grid-cols-3 grid-cols-2 border">
          <ImageCollections />
        </section>
      </ImageContextProvider>
    </QueryClientProvider>
  );
};

export default App;
