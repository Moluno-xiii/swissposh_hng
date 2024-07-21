/* eslint-disable react/prop-types */
import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorComponent.jsx";

const ProductDetails = lazy(() => import("../components/ProductDetails"));

const ProductPageWomen = ({ menOrgID, menApiKey, menAppID, proxyUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0.3);
  const [currentNumber, setCurrentNumber] = useState(10);
  const switchPage = (value, newNumber, newProgress) => {
    setPage(value);
    setCurrentNumber(newNumber);
    setProgress(newProgress);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${proxyUrl}/products?organization_id=${menOrgID}&reverse_sort=false&page=${page}&size=10&Appid=${menAppID}&Apikey=${menApiKey}`,
        );
        if (!response.ok) {
          setError("Network error try again later");
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Network error try again later");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
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
