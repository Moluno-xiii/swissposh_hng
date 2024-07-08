import LargeScreensCartItemDetails from "./LargeScreensCartItemDetails";
import SmallScreensCartItemDetails from "./SmallScreensCartItemDetails";
/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
  const {
    title,
    id,
    price,
    color,
    size,
    largeScreensImageUrl,
    smallScreensImageUrl,
  } = item;
  return (
    <li className="flex h-[456px] flex-col gap-x-3 bg-[#E8EBEE] p-4 text-primary text-opacity-80 md:h-[187px] md:flex-row md:bg-primary md:bg-opacity-[9%] md:p-5">
      <img
        src={largeScreensImageUrl}
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
      <LargeScreensCartItemDetails title={title} price={price} id={id} size={size} color={color} />
      <SmallScreensCartItemDetails title={title} price={price} id={id} size={size} color={color} />

    </li>
  );
};

export default CartItem;
