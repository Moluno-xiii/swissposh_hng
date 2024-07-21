/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ErrorComponent = ({ message }) => {
  return (
    <div className="flex flex-col gap-y-1 h-[100dvh] md:gap-y-3 justify-center items-center">
      <p className="font-bold text-red-600 text-xl md:text-4xl uppercase">{message}</p>
      <span className="flex h-[23.96px] md:text-base w-[133px] items-center justify-center bg-primary capitalize text-white max-md:text-[9.59px] max-md:leading-[14.98px] md:h-10 md:w-[222px]">
        <Link to="/">Return To HomePage</Link>
      </span>
    </div>
  );
};

export default ErrorComponent;
