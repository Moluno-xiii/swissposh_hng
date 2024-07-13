import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const LargeScreensCartItemDetails = lazy(
  () => import("./LargeScreensCartItemDetails"),
);
const SmallScreensCartItemDetails = lazy(
  () => import("./SmallScreensCartItemDetails"),
);

/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
  const {
    name,
    unique_id,
    price,
    color,
    size,
    smallScreensImageUrl,
    quantity,
    imageUrl,
    available_quantity
  } = item;
  return (
    <li className="flex h-[456px] flex-col gap-x-3 bg-[#E8EBEE] p-4 text-primary text-opacity-80 md:h-[187px] md:flex-row md:bg-primary md:bg-opacity-[9%] md:p-5">
      <img
        src={imageUrl}
        alt="image of item"
        className="hidden md:inline-block"
        width={126}
        height={149}
      />
      <img
        src={smallScreensImageUrl}
        alt="image of item"
        className="mx-auto inline-block md:hidden"
        width={161}
        height={217}
      />
      <Suspense fallback={<Loader />}>
        <LargeScreensCartItemDetails
          title={name}
          price={price}
          id={unique_id}
          size={size}
          color={color}
          quantity={quantity}
          available_quantity={available_quantity}
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <SmallScreensCartItemDetails
          title={name}
          price={price}
          id={unique_id}
          size={size}
          color={color}
          quantity={quantity}
          available_quantity={available_quantity}
        />
      </Suspense>
    </li>
  );
};

export default CartItem;
