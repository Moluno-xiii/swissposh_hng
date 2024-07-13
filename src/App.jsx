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
import ProductDescriptionWomen from "./pages/ProductDescriptionWomen";
import ProductDescriptionMen from "./pages/ProductDescriptionMen";
import { fetchArrayData } from "./utils/fetchWomenArrayData";

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
          {
            path: "/women/products",
            element: <ProductPageWomen />,
            loader: fetchArrayData,
          },
          {
            path: "/women/products/:id",
            element: <ProductDescriptionWomen />,
            loader: async ({ params }) => {
              const response = await fetch(
                `https://reverse-proxy-tp0r.onrender.com/products/${params.id}?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=1&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774`,
              );
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            },
          },
        ],
      },
      {
        path: "men",
        element: <MenPage />,
        children: [
          { index: true, element: <MenPageDetails /> },
          { path: "/men/products", element: <ProductPageMen /> },
          {
            path: "/men/products/:id",
            element: <ProductDescriptionMen />,
            loader: async ({ params }) => {
              const response = await fetch(
                `https://reverse-proxy-tp0r.onrender.com/products/${params.id}?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=1&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774`,
              );
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            },
          },
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
