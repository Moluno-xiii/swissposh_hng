/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center text-center text-primary max-md:mx-auto max-md:w-[211px] max-md:px-3">
      <p className="text-[73px] font-black text-[#F20000] md:text-[150px] md:leading-[202.5px]">
        Oops!
      </p>
      <p className="text-[13px] font-black leading-[17.55px] text-primary md:py-10 md:text-[26px] md:leading-[35.1px]">
        404-Page Not Found
      </p>
      <p className="mx-auto mb-6 max-w-[182px] font-medium capitalize max-md:text-xxs max-md:leading-[12.21px] md:max-w-[364px] md:leading-[25px]">
        "looks like you've found yourself on a lost page. "or" the page you
        requested was not found"
      </p>
      <span className="flex h-[23.96px] w-[133px] items-center justify-center bg-primary capitalize text-white max-md:text-[9.59px] max-md:leading-[14.98px] md:h-10 md:w-[222px]">
        <Link to="/">Return To HomePage</Link>
      </span>
    </div>
  );
}

export default ErrorElement;
