import Modal from "./Modal";
import LargeScreensNav from "./LargeScreensNav";
import SmallScreensNav from "./SmallScreensNav";
import { useState } from "react";
import SecondaryNav from "./SecondaryNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <header className="text-xs leading-[16.2px] text-white">
      <LargeScreensNav />
      <SmallScreensNav handleOpenModal={handleOpenModal} />
      {isOpen && <Modal onClose={handleCloseModal} />}
      <SecondaryNav />
    </header>
  );
}
