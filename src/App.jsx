import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import Home from "./pages/Home";
import ErrorElement from "./components/ErrorElement";
import ProductPageWomen from "./pages/ProductPageWomen";
import ProductPageMen from "./pages/ProductPageMen";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
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
        path: "/product",
        children: [
          {
            index: true,
            element: <ProductPageWomen />,
          },
          {
            element: <ProductPageMen />,
            path: "/product/men",
          },
        ],
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
  // return <p className="uppercase text-red-400 font-bold underline text-5xl">this is a dog</p>;
};

export default App;
