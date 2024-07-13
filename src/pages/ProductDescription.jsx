import ProductDescriptionImagesSection from "../components/ProductDescriptionImagesSection";
import ProductDescriptionSection from "../components/ProductDescriptionSection";

const ProductDescription = () => {
  return (
    <div className="mx-auto flex max-w-[1346px] flex-row gap-x-4">
      <ProductDescriptionImagesSection />
      <ProductDescriptionSection />
    </div>
  );
};

export default ProductDescription;
