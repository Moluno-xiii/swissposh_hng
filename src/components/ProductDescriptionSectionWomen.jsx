/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formatCurrency from "../utils/formatCurrency";

const ProductDescriptionSection = ({
  item,
  cart,
  addToCart,
  increment,
  decrement,
}) => {
  const notify = () => toast("Item added to cart!");
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
    <div className="flex flex-1 flex-col gap-y-1 bg-[#f5f5f5] p-4 text-sm md:gap-y-2 lg:text-2xl">
      <p className="flex flex-row justify-between text-base font-bold md:text-3xl">
        {item.name}
        <img src="/favourite.svg" alt="favourites icon" />
      </p>
      <span className="text-sm font-bold md:text-base">
        Price: {formatCurrency(currentItemDetails.price)}
      </span>
      <span>Available Quantity: {item?.available_quantity}</span>
      <span>Color : {item?.extra_infos[0].value}</span>
      <p className="mb-4 flex flex-col items-center gap-y-2 text-xl md:text-3xl font-bold">
        Description{" "}
        <span className="text-xs font-normal md:text-lg">
          {item?.description}
        </span>
      </p>
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary py-2 text-center text-white"
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
        autoClose={3000}
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
