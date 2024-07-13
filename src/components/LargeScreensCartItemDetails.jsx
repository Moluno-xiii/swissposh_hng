/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setQuantity } from "../store/women/womenSlice";
import { clearItem, clearCart } from "../store/women/womenSlice";
import { FiTrash2 } from "react-icons/fi";


const LargeScreensCartItemDetails = ({
  title,
  price,
  id,
  color,
  quantity,
  available_quantity,
  new_id
}) => {
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
        const dispatch = useDispatch();

        const handleClearItem = (id) => {
          dispatch(clearItem({ id }));
        };

  return (
    <div className="hidden flex-col gap-y-2 md:flex">
      <p className="flex flex-row items-center justify-between text-xs font-medium capitalize leading-[16.2px]">
        {title}{" "}
        <span>
          <FiTrash2
            className="text-red-500"
            onClick={() => handleClearItem(new_id)}
          />
        </span>
      </p>
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