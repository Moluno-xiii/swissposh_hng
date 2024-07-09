import { menProductsArray } from "../../array";
import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductDetails from "../components/ProductDetails";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";

const ProductPageMen = () => {
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <SecondaryNav text={"men"} href="/men" />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <ProductDetails mappedArray={menProductsArray} />
      <ProductFooter />
    </div>
  );
};

export default ProductPageMen;
