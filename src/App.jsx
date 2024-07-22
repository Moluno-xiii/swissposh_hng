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
import Payment from "./pages/Payment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const proxyUrl = import.meta.env.VITE_REVERSE_PROXY_URL;
const womenAppID = import.meta.env.VITE_WOMEN_APP_ID;
const womenApiKey = import.meta.env.VITE_WOMEN_API_KEY;
const womenOrgID = import.meta.env.VITE_WOMEN_API_ORG_ID;
const menAppID = import.meta.env.VITE_MEN_APP_ID;
const menApiKey = import.meta.env.VITE_MEN_API_KEY;
const menOrgID = import.meta.env.VITE_MEN_API_ORG_ID;

const queryClient = new QueryClient();

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
          },
          {
            path: "/women/products/:id",
            element: <ProductDescriptionWomen />,
            loader: async ({ params }) => {
              const response = await fetch(
                `${proxyUrl}/products/${params.id}?organization_id=${womenOrgID}&reverse_sort=false&page=1&size=10&Appid=${
                  womenAppID
                }&Apikey=${womenApiKey}`,
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
          {
            path: "/men/products",
            element: <ProductPageMen />,
          },
          {
            path: "/men/products/:id",
            element: <ProductDescriptionMen />,
            loader: async ({ params }) => {
              const response = await fetch(
                `${proxyUrl}/products/${params.id}?organization_id=${menOrgID}&reverse_sort=false&page=1&size=10&Appid=${menAppID}&Apikey=${menApiKey}`,
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
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
