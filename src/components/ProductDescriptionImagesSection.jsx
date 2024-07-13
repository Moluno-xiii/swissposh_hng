
const ProductDescriptionImagesSection = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <section className="mx-auto flex flex-row gap-x-2">
        <img
          src="/public/product_desc_1.svg"
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
        <img
          src="/public/product_desc_2.svg"
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
      </section>
      <section className="flex flex-row gap-x-2 mx-auto">
        <img
          src="/public/product_desc_3.svg"
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
        <img
          src="/public/product_desc_4.svg"
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
      </section>
    </div>
  );
}

export default ProductDescriptionImagesSection