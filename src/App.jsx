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
import ProductDescription from "./pages/ProductDescription";

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
          { path: "/women/products/:id", element: <ProductDescription /> },
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
            element: <ProductDescription />,
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
      // `https://api.timbu.cloud/products/${params.id}?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=1&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774`
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
