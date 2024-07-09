/* eslint-disable react/prop-types */

const Filters = ({text}) => {
  return (
    <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-primary text-xxs uppercase leading-[13.5px] text-white md:flex md:bg-white md:text-[13px] md:text-primary">
      {text}
      <img
        src="/chevron-down.svg"
        className="inline-block md:hidden"
        alt="arrow down"
      />
      <img
        src="/down-arrow.svg"
        className="hidden md:inline-block"
        alt="arrow down"
      />
    </div>
  );
}

export default Filters