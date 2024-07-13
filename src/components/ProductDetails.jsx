/* eslint-disable react/prop-types */
import Products from "./Products";
const ProductDetails = ({mappedArray, route}) => {
  return (
    <div className="mx-auto grid max-w-[327px] grid-cols-2 items-center justify-items-center gap-2 p-4 md:max-w-[748px] md:grid-cols-3 md:gap-[26px] lg:max-w-[1006px] lg:grid-cols-4">
      {mappedArray.map((product, index) => (
        <Products product={product} key={index} route={route} />
      ))}
    </div>
  );
}

export default ProductDetails