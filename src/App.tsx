import GlobalLoader from "./components/custom/GlobalLoader";
import { ToasterProvider } from "./components/custom/ToasterProvider";
import useRouteElements from "./Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const routeElements = useRouteElements();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalLoader />
        {routeElements}
        <ToasterProvider />
      </QueryClientProvider>
    </>
  );
}

export default App;
