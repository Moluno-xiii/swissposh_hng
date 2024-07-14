import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorComponent.jsx"


const ProductDetails = lazy(() => import("../components/ProductDetails"));

const ProductPageWomen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0.3);
  const [currentNumber, setCurrentNumber] = useState(10);
  const switchPage = (value, newNumber, newProgress) => {
    setPage(value);
    setCurrentNumber(newNumber);
    setProgress(newProgress)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://reverse-proxy-tp0r.onrender.com/products?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=${page}&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774`,
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
  if (error) return <ErrorMessage message={error.message} />
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
   
      <SecondaryNav href={"/women"} text={"women"} />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <Suspense fallback={<Loader />}>
        <ProductDetails mappedArray={data?.items} route={`/women/products/`} />
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
