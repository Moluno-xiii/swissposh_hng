import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";
import SecondaryNav from "../components/SecondaryNav";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/women/womenSlice";
import { clearCartMen } from "../store/men/menSlice";
import { selectCartTotal } from "../store/women/womenSlice";
import { selectCartTotalMen } from "../store/men/menSlice";

const ShoppingBag = () => {
  const cart = useSelector((state) => state.women.cart);
  const menCart = useSelector((state) => state.men.cart)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(clearCartMen())
  };

  const newCart = [...cart, ...menCart];
     const total = useSelector(selectCartTotal);

     if (total <= 0)
       return (
         <div className="mx-auto h-[100dvh] w-[300px] md:text-2xl mt-10 capitalize font-bold">your cart is empty</div>
       );
  return (
    <>
      <SecondaryNav href={"/women"} text={"women"} />
      <div className="pb-10 max-md:bg-primary max-md:bg-opacity-[8%]">
        <p className="py-5 text-center font-black uppercase leading-[21.6px] md:py-10 md:text-2xl md:leading-[32.4px]">
          cart
        </p>
        <div className="flex flex-col gap-6 max-lg:items-center max-md:px-4 lg:flex-row lg:justify-center">
          <ul className="flex w-[323px] flex-col gap-y-3 md:w-[576px]">
            {newCart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </ul>
         {cart.length >= 1 && <button
            onClick={() => handleClearCart()}
            className="rounded-md bg-red-700 px-4 py-2 text-primary transition-all duration-300 hover:bg-opacity-80"
          >
            Clear All Items from Cart
          </button>}
          <CartOrderSummary />
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
