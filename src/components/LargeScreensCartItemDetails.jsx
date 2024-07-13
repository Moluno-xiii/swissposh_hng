/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setQuantity } from "../store/women/womenSlice";


const LargeScreensCartItemDetails = ({
  title,
  price,
  id,
  color,
  quantity,
  available_quantity
}) => {
   const dispatch = useDispatch();
    const options = [];
    for (let i = 1; i <= available_quantity; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }

    const handleQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value);
      dispatch(setQuantity({ id, quantity: newQuantity }));
    };

  return (
    <div className="hidden flex-col gap-y-2 md:flex">
      <p className="text-xs font-medium capitalize leading-[16.2px]">{title}</p>
      <span className="md:text-xs md:leading-[16.2px]">${price}</span>
      <ul className="mt-2 flex flex-row justify-between gap-x-2 text-[10px] capitalize leading-[13.5px]">
        <li>Art No :</li>
        <li>{id}</li>
        <li>quantity:</li>
        <li>{quantity}</li>
        <li>name:</li>
        <li>{title}</li>
      </ul>
      <ul className="mb-3 flex flex-row justify-between text-[10px] capitalize leading-[13.5px]">
        <li>Color</li>
        <li>{color}</li>
        <li>total</li>
        <li className="font-bold">${quantity * price}</li>
      </ul>

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
  );
};

export default LargeScreensCartItemDetails;