const Footer = () => {
  return (
    <footer className="mt-auto flex h-[55px] flex-row items-center justify-center bg-black px-2 md:h-[78px] md:justify-between md:px-6">
      <ul className="hidden flex-row gap-x-2 text-xs font-medium text-white md:flex">
        <li>Let Us Help You</li>
        <li>Get to Know Us</li>
        <li>Explore</li>
        <li>Corporate Info</li>
      </ul>
      <p className="items-center justify-center bg-black text-center text-[10px] font-bold text-white lg:text-[14px]">
        SWISSPOSH 2024. All right reserved
      </p>
      <ul className="hidden flex-row gap-x-2 text-xs font-medium text-white md:flex">
        <li>Help</li>
        <li>Privacy</li>
        <li>Shipping</li>
        <li>FAQs</li>
      </ul>
    </footer>
  );
};

export default Footer;
