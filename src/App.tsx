import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import AddCard from "./Pages/AddCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddCard />} />
    </Route>
  )
);

function App() {
  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  );
}

export default App;
