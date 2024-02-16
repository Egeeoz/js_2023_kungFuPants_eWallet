import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
