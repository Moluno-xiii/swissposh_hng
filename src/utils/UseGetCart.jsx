import { useSelector } from "react-redux";

const UseGetCart = () => {
  const cart = useSelector((state) => state.women.cart);
  const menCart = useSelector((state) => state.men.cart);
  const newCart = [...cart, ...menCart];
  return { cart, menCart, newCart };
};

export default UseGetCart;
