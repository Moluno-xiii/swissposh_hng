const Footer = () => {
  return (
    <footer className="mt-7 flex h-[55px] w-[100vw] flex-row items-center justify-between bg-black md:h-[78px] px-2 lg:px-6">
      <ul className="hidden flex-row gap-x-2 text-xs font-medium text-white md:flex">
        <li>Let Us Help You</li>
        <li>Get to Know Us</li>
        <li>Explore</li>
        <li>Corporate Info</li>
      </ul>
      <p className="items-center justify-center bg-black text-center text-[10px] font-bold text-white md:text-xs">
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
