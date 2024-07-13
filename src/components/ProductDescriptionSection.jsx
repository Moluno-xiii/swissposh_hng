/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addToCart, increment, decrement } from "../store/men/menSlice";
import "react-toastify/dist/ReactToastify.css";

const ProductDescriptionSection = ({ item }) => {
  const notify = () => toast("Item added to cart!");
  const cart = useSelector((state) => state.men.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(currentItemDetails));
    notify();
  };

  const handleDecrement = () => {
    dispatch(decrement({ id: item?.id }));
  };

  const handleIncrement = () => {
    dispatch(increment({ id: item?.id }));
  };

  const currentItemDetails = {
    id: item?.id,
    price: item?.current_price, // Assuming price is stored in NGN array
    name: item?.name,
    imageUrl: item?.photos[1]?.url,
  };

  const cartItem = cart.find((product) => product.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex flex-1 flex-col bg-[#f5f5f5] p-4">
      <p className="flex flex-row justify-between text-sm font-bold">
        {item.name}
        <img src="/favourite.svg" alt="favourites icon" />
      </p>
      <span>Price: ${currentItemDetails.price}</span>
      <span>{item?.name}</span>
      <span>Available Quantity: {item?.available_quantity}</span>
      <span>light beige</span>
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-center text-white"
        >
          Add to cart
        </button>
      ) : (
        <div className="flex w-24 flex-row justify-between gap-x-2">
          <button
            className="rounded-full bg-primary px-2 py-2 text-center text-white"
            onClick={handleIncrement}
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            className="rounded-full bg-primary px-2 py-2 text-center text-white"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProductDescriptionSection;
