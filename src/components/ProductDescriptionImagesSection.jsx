/* eslint-disable react/prop-types */

const ProductDescriptionImagesSection = ({item}) => {
  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <section className="mx-auto flex flex-row gap-x-2">
        <img
          src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
        <img
          src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
      </section>
      <section className="mx-auto flex flex-row gap-x-2">
        <img
          src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
        <img
          src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
          alt="image of the product"
          className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
        />
      </section>
    </div>
  );
}

export default ProductDescriptionImagesSection