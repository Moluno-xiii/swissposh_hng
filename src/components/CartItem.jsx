/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
  const {
    title,
    id,
    price,
    color,
    size,
    largeScreensImageUrl,
    smallScreensImageUrl,
  } = item;
  return (
    <li className="flex h-[456px] flex-col gap-x-3 bg-[#E8EBEE] p-4 text-primary text-opacity-80 md:h-[187px] md:flex-row md:bg-primary md:bg-opacity-[9%] md:p-5">
      <img
        src={largeScreensImageUrl}
        alt="image of item"
        className="hidden md:inline-block"
        width={126}
        height={149}
      />
      <img
        src={smallScreensImageUrl}
        alt="image of item"
        className="inline-block md:hidden mx-auto"
        width={161}
        height={217}
      />
      <div className="hidden flex-col gap-y-2 md:flex">
        <p className="text-xs font-medium capitalize leading-[16.2px]">
          {title}
        </p>
        <span className="md:text-xs md:leading-[16.2px]">{price}</span>
        <ul className="mt-2 flex flex-row justify-between text-[10px] capitalize leading-[13.5px]">
          <li>Art No</li>
          <li>{id}</li>
          <li>Size</li>
          <li>{size}</li>
        </ul>
        <ul className="mb-3 flex flex-row justify-between text-[10px] capitalize leading-[13.5px]">
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

      <div className="flex flex-col text-primary text-opacity-80 md:hidden mt-3">
        <div className="mb-3 flex flex-row items-center justify-between">
          <span className="w-[118px] text-sm font-bold">{title}</span>
          <div className="flex flex-row gap-x-2">
            <img src="/cart-wishlist-icon.svg" alt="wishlist icon" />
            <img src="/cart-item-number-icon.svg" alt="number of items" />
          </div>
        </div>
        <span className="text-xs leading-[16.2px]">{price}</span>
        <ul className="leading-[16.2px]] mt-2 flex flex-row justify-between py-7 text-xs capitalize">
          <li>Art No</li>
          <li>{id}</li>
          <li>Size</li>
          <li>{size}</li>
        </ul>
        <ul className="mx-auto flex w-[280px] flex-row justify-between text-[10px] capitalize leading-[13.5px]">
          <li>Color</li>
          <li>{color}</li>
          <li>total</li>
          <li className="font-bold">{price}</li>
        </ul>
      </div>
    </li>
  );
};

export default CartItem;
