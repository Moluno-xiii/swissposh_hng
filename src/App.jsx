import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenPage from "./pages/MenPage";
import Home from "./pages/Home";
import ErrorElement from "./components/ErrorElement";
import ProductPageWomen from "./pages/ProductPageWomen";
import Checkout from "./pages/Checkout";
import MenPageDetails from "./pages/MenPageDetails";
import ProductPageMen from "./pages/ProductPageMen";
import WomenPageDetails from "./pages/WomenPageDetails";
import ShoppingBag from "./pages/ShoppingBag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <WomenPageDetails />,
      },
      {
        path: "women",
        children: [
          { index: true, element: <WomenPageDetails /> },
          { path: "/women/products", element: <ProductPageWomen /> },
        ],
      },
      {
        path: "men",
        element: <MenPage />,
        children: [
          { index: true, element: <MenPageDetails /> },
          { path: "/men/products", element: <ProductPageMen /> },
        ],
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "shopping-bag",
        element: <ShoppingBag />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
