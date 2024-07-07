import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  return (
    <ul className="fixed inset-0 z-50 gap-y-4 bg-primary px-4 py-6 uppercase text-white md:hidden">
      <div className="flex flex-row justify-between text-base">
        <span className="mb-10 font-black leading-[21.6px]">Women</span>
        <span className="mb-10 font-black leading-[21.6px]" onClick={onClose}>
          X
        </span>
      </div>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2" onClick={onClose}>
        <NavLink
          to="/new-arrivals"
          className="w-full flex flex-row items-center justify-between"
        >
          new arrivals
          <img src="/right-arrow.svg" alt="right-arrow" />
        </NavLink>{" "}
      </li>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
        trending now <img src="/right-arrow.svg" alt="right-arrow" />
      </li>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
        shop by occasion <img src="/right-arrow.svg" alt="right-arrow" />
      </li>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
        shop by product <img src="/right-arrow.svg" alt="right-arrow" />
      </li>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
        gifting <img src="/right-arrow.svg" alt="right-arrow" />
      </li>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
        magazine <img src="/right-arrow.svg" alt="right-arrow" />
      </li>
      <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
        sustainability <img src="/right-arrow.svg" alt="right-arrow" />
      </li>
    </ul>
  );
};

export default Modal;
