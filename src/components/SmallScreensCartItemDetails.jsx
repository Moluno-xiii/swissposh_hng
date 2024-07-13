/* eslint-disable react/prop-types */
import formatCurrency from "../utils/formatCurrency"
const SmallScreensCartItemDetails = ({
  title,
  price,
  id,
  color,
  quantity,
}) => {
  return (
    <div className="mt-3 flex flex-col text-primary text-opacity-80 md:hidden">
      <div className="mb-3 flex flex-row items-center justify-between">
        <span className="w-[118px] text-sm font-bold">{title}</span>
        <div className="flex flex-row gap-x-2">
          <img src="/cart-wishlist-icon.svg" alt="wishlist icon" />
          <img src="/cart-item-number-icon.svg" alt="number of items" />
        </div>
      </div>
      <span className="text-xs leading-[16.2px]">{formatCurrency(price)}</span>
      <ul className="leading-[16.2px]] mt-2 flex flex-row justify-between py-7 text-xs capitalize">
        <li>Art No</li>
        <li>{id}</li>
        <li>Size</li>
        <li>medium</li>
      </ul>
      <ul className="mx-auto flex w-[280px] flex-row justify-between text-[10px] capitalize leading-[13.5px]">
        <li>Color</li>
        <li>{color}</li>
        <li>total</li>
        <li className="font-bold">{formatCurrency( price * quantity)}</li>
      </ul>
    </div>
  );
};

export default SmallScreensCartItemDetails