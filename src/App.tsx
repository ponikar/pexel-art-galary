import { QueryClient, QueryClientProvider } from "react-query";
import { ImageArea } from "./components/images/images-area";
import { ImageContextProvider } from "./contexts/images.context";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageContextProvider>
        <ImageArea />
      </ImageContextProvider>
    </QueryClientProvider>
  );
};

export default App;
