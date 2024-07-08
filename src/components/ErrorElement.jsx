/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-primary h-[100dvh] max-md:px-3">
      <p className="font-black text-4xl text-[#F20000] md:text-[150px] md:leading-[202.5px]">
        Oops!
      </p>
      <p className="font-black text-primary md:py-10 md:text-[26px] md:leading-[35.1px]">
        404-Page Not Found
      </p>
      <p className="mx-auto max-w-[364px] mb-6 font-medium capitalize md:leading-[25px]">
        "looks like you've found yourself on a lost page. "or" the page you
        requested was not found"
      </p>
      <span className="text-white bg-primary h-7 w-44 md:h-10 md:w-[222px] flex justify-center items-center capitalize">
        <Link to="/">Return To HomePage</Link>
      </span>
    </div>
  );
}

export default ErrorElement;
