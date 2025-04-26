import { ToasterProvider } from "./components/custom/ToasterProvider";
import useRouteElements from "./Route";

function App() {
  const routeElements = useRouteElements();
  return (
    <>
      {routeElements}
      <ToasterProvider />
    </>
  );
}

export default App;
