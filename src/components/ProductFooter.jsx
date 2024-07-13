/* eslint-disable react/prop-types */
const ProductFooter = ({ progress, currentNumber, switchPage }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 py-5 md:py-10">
      <span className="text-[8.09px] font-medium text-[#001F3FDB] md:text-xs">
        Showing {currentNumber} of 30
      </span>
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
