import { womenProductsArray } from "../../array";
import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductDetails from "../components/ProductDetails";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";

const ProductPageWomen = () => {
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <SecondaryNav href={"/women"} text={"women"} />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <ProductDetails mappedArray={womenProductsArray} />
      <ProductFooter />
    </div>
  );
};

export default ProductPageWomen;
