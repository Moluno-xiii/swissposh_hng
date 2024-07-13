/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDescriptionImagesSection = ({ item }) => {
  const photoSrc =
    item.photos && item.photos.length > 1
      ? `https://api.timbu.cloud/images/${item.photos[1].url}`
        : `https://api.timbu.cloud/images/${item.photos[0].url}`
  return (
    <>
      <Carousel className="flex-1 lg:hidden">
        <div>
          <img
            src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
            alt="image of the product"
            className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img
            src={photoSrc}
            alt="image of the product"
            className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img
            src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
            alt="image of the product"
            className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
          />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img
            src={photoSrc}
            alt="image of the product"
            className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
          />
          <p className="legend">Image 4</p>
        </div>
      </Carousel>
      <div className="hidden flex-1 flex-col gap-y-2 lg:flex">
        <section className="mx-auto flex flex-row gap-x-2">
          <img
            src={`https://api.timbu.cloud/images/${item?.photos[0].url}`}
            alt="image of the product"
            className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
          />
          <img
            src={photoSrc}
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
            src={photoSrc}
            alt="image of the product"
            className="w-[251.72px] xl:h-[605.72px] xl:w-[321.72px]"
          />
        </section>
      </div>
    </>
  );
};

export default ProductDescriptionImagesSection;
