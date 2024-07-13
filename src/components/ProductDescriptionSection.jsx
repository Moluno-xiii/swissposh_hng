
const ProductDescriptionSection = () => {
  return (
    <div className="flex-1 bg-[#f5f5f5] p-4 flex flex-col">
      <p className="flex flex-row justify-between text-sm font-bold">
        oversized denim shirt
        <img src="/public/favourite.svg" alt="favourites icon" />
      </p>
      <span>$300</span>
      <span>light beige</span>
      <button className="w-full bg-primary text-center text-white">Add to cart</button>
    </div>
  );
}

export default ProductDescriptionSection