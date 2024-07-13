/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addToCart, increment, decrement } from "../store/women/womenSlice";
import "react-toastify/dist/ReactToastify.css";

const ProductDescriptionSection = ({ item }) => {
  const notify = () => toast("Item added to cart!");
  const cart = useSelector((state) => state.women.cart);
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

    const cartItem = cart.find((product) => product.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

  const currentItemDetails = {
    id: item?.id,
    unique_id: item.unique_id,
    price: item?.current_price,
    name: item?.name,
    available_quantity: item?.available_quantity,
    imageUrl: `https://api.timbu.cloud/images/${item?.photos[0].url}`,
    color: item?.extra_infos[0].value,
  };



  return (
    <div className="flex flex-1 gap-y-1 md:gap-y-2 flex-col bg-[#f5f5f5] p-4 text-sm lg:text-2xl">
      <p className="flex flex-row justify-between text-sm font-bold md:text-3xl">
        {item.name}
        <img src="/favourite.svg" alt="favourites icon" />
      </p>
      <span>Price: ${currentItemDetails.price}</span>
      <span>Available Quantity: {item?.available_quantity}</span>
      <span>Color : {item?.extra_infos[0].value}</span>
      <p className="
      flex flex-col mb-4 gap-y-2 items-center text-3xl font-bold">
        Description <span className="text-lg font-normal">{item?.description}</span>
      </p>
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="w-full py-2 bg-primary text-center text-white"
        >
          Add to cart
        </button>
      ) : (
        <div className="flex w-4 flex-row items-center justify-between gap-x-2">
          <button
            className="rounded-full bg-primary px-4 py-2 text-center text-white"
            onClick={handleIncrement}
            disabled={quantity >= item.available_quantity}
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            className="rounded-full bg-primary px-4 py-2 text-center text-white"
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
