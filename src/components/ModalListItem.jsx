/* eslint-disable react/prop-types */
const ModalListItem = ({text}) => {
  return (
    <li className="mb-5 flex flex-row items-center justify-between border-white text-[14px] font-bold leading-[18.9px] hover:border-b-2">
      {text} <img src="/right-arrow.svg" alt="right-arrow" />
    </li>
  );
}

export default ModalListItem