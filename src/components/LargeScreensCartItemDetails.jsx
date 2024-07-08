/* eslint-disable react/prop-types */

const LargeScreensCartItemDetails = ({title, price, id, size, color, }) => {
  return (
    <div className="hidden flex-col gap-y-2 md:flex">
      <p className="text-xs font-medium capitalize leading-[16.2px]">{title}</p>
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
  );
}

export default LargeScreensCartItemDetails