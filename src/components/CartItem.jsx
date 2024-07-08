/* eslint-disable react/prop-types */
const CartItem = ({item}) => {
    const {title, id, price, color, size, largeImageUrl } = item
  return (
    <li className="flex flex-row gap-x-3 bg-primary bg-opacity-[9%] text-primary text-opacity-80 md:h-[187px] md:p-5">
      <img
        src={largeImageUrl}
        alt="image of item"
        className="hidden md:inline-block"
        width={126}
        height={149}
      />
      <div className="flex flex-col gap-y-2">
        <p className="text-xs font-medium capitalize leading-[16.2px]">
          {title}
        </p>
        <span className="md:text-xs md:leading-[16.2px]">{price}</span>
        <ul className="mt-2 flex flex-row gap-x-10 text-[10px] capitalize leading-[13.5px]">
          <li>Art No</li>
          <li>{id}</li>
          <li>Size</li>
          <li>{size}</li>
        </ul>
        <ul className="mb-3 flex flex-row gap-x-10 text-[10px] capitalize leading-[13.5px]">
          <li>Color</li>
          <li>{color}</li>
          <li>total</li>
          <li className="font-bold">{price}</li>
        </ul>

        <div className="flex flex-row gap-x-2">
          <img src="/cart-wishlist-icon.svg" alt="wishlist icon" />
          <img src="/cart-item-number-icon.svg" alt="number of items" />
        </div>
      </div>
    </li>
  );
}

export default CartItem