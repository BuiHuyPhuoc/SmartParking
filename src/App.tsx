import { ToasterProvider } from "./components/custom/ToasterProvider";
import useRouteElements from "./Route";

function App() {
  const routeElements = useRouteElements();
  return (
    <>
      <div className="container bg-container">
        {routeElements}
        <ToasterProvider />
      </div>
    </>
  );
}

export default App;
