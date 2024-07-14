/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { setQuantity } from "../store/women/womenSlice";
import formatCurrency from "../utils/formatCurrency"
const SmallScreensCartItemDetails = ({
  title,
  price,
  id,
  color,
  quantity,
  available_quantity,
}) => {
  const dispatch = useDispatch()
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(setQuantity({ id, quantity: newQuantity }));
  };

  const options = [];
  for (let i = 1; i <= available_quantity; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }
  return (
    <div className="mt-3 flex flex-col text-primary text-opacity-80 md:hidden">
      <div className="mb-3 flex flex-row items-center justify-between">
        <span className="w-[118px] text-sm font-bold">{title}</span>
        <div className="flex flex-row gap-x-2">
          <img src="/cart-wishlist-icon.svg" alt="wishlist icon" />
          <select
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="h-[25px] w-16"
            disabled={true}
          >
            {options}
          </select>
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
        <li className="font-bold">{formatCurrency(price * quantity)}</li>
      </ul>
    </div>
  );
};

export default SmallScreensCartItemDetails