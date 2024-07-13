/* eslint-disable react/prop-types */
const ProductFooter = ({ progress, currentNumber, switchPage }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 py-5 md:py-10">
      <span className="text-[8.09px] font-medium text-[#001F3FDB] md:text-xs">
        Showing {currentNumber} of 30
      </span>
      {/* <img
        src="/loading-bar.svg"
        alt="loader indicator"
        className="h-[3.37px] max-md:w-[155px] md:h-[5px]"
      /> */}
      {/* <button className="flex h-[22.24px] w-[136.8px] items-center justify-center bg-primary bg-opacity-[86%] text-[8.09px] font-bold capitalize leading-[10.92px] text-white md:h-[33px] md:w-[203px] md:text-xs md:leading-[16.2px]">
        load more product
      </button> */}
      <progress value={progress} max={1} className="" />
      <ul className="flex flex-row gap-3 text-[8.09px] md:text-xs">
        <li className="hover:underline" onClick={() => switchPage(1, 10, 0.3)}>
          1
        </li>
        <li className="hover:underline" onClick={() => switchPage(2, 20, 0.6)}>
          2
        </li>
        <li className="hover:underline">3</li>
      </ul>
    </div>
  );
};

export default ProductFooter;
