import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import Home from "./pages/Home";
import ErrorElement from "./components/ErrorElement";
import NewArrivalWomen from "./pages/NewArrivalWomen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement/>,
    children: [
      {
        element: <WomenPage />,
        index: true,
      },
      {
        path: "/men",
        element: <MenPage />,
      },
      {
        path: "/new-arrivals",
        element: <NewArrivalWomen />
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
  // return <p className="uppercase text-red-400 font-bold underline text-5xl">this is a dog</p>;
};

export default App;
