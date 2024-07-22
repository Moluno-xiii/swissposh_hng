/* eslint-disable react/prop-types */
import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorComponent.jsx";
import { fetchMenData } from "../utils/fetchPaginatedData.js";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = lazy(() => import("../components/ProductDetails"));

const ProductPageWomen = () => {
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0.3);
  const [currentNumber, setCurrentNumber] = useState(10);
  const switchPage = (value, newNumber, newProgress) => {
    setPage(value);
    setCurrentNumber(newNumber);
    setProgress(newProgress);
  };

  const {data, isLoading, error} = useQuery({
    queryKey: ["men's data", page],
    queryFn:() => fetchMenData(page)
  })


  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <SecondaryNav href={"/men"} text={"men"} />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <Suspense fallback={<Loader />}>
        <ProductDetails mappedArray={data?.items} route={`/men/products/`} />
      </Suspense>
      <ProductFooter
        progress={progress}
        currentNumber={currentNumber}
        switchPage={switchPage}
      />
    </div>
  );
};

export default ProductPageWomen;
