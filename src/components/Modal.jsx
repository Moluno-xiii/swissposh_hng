import { NavLink } from "react-router-dom";
import ModalListItem from "./ModalListItem";
// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  return (
    <ul className="fixed inset-0 z-50 gap-y-4 bg-primary px-4 py-6 uppercase text-white md:hidden">
      <div className="flex flex-row justify-between text-base">
        <div className="flex flex-row gap-x-4">
          <span onClick={onClose} className="mb-10 font-black leading-[21.6px]">
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive ? "text-[#F20000]" : "text-White"
              }
            >
              Women
            </NavLink>
          </span>
          <span onClick={onClose} className="mb-10 font-black leading-[21.6px]">
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive ? "text-[#F20000]" : "text-White"
              }
            >
              Men
            </NavLink>
          </span>
        </div>
        <span className="mb-10 font-black leading-[21.6px]" onClick={onClose}>
          <img src="/close_icon.svg" alt="close icon" />
        </span>
      </div>
      <ModalListItem text={"new arrivals"} />
      <ModalListItem text={"trending now"} />
      <ModalListItem text={"shop by occasion"} />
      <ModalListItem text={"shop by product"} />
      <ModalListItem text={"gifting"} />
      <ModalListItem text={"magazine"} />
      <ModalListItem text={"sustainability"} />
    </ul>
  );
};

export default Modal;
