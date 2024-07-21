/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ErrorComponent = ({ message }) => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-y-1 md:gap-y-3">
      <p className="text-xl font-bold uppercase text-red-600 md:text-4xl">
        {message}
      </p>
      {!message && (
        <p className="text-xl font-bold uppercase text-red-600 md:text-4xl">
          An error occurred
        </p>
      )}
      <span className="flex h-[23.96px] w-[133px] items-center justify-center bg-primary capitalize text-white max-md:text-[9.59px] max-md:leading-[14.98px] md:h-10 md:w-[222px] md:text-base">
        <Link to="/">Return To HomePage</Link>
      </span>
    </div>
  );
};

export default ErrorComponent;
