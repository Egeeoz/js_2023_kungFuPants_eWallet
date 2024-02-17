import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import AddCard from "./Pages/AddCard";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
