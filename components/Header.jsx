export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between text-xs leading-[16.2px] text-white">
      <ul className="flex flex-row items-center gap-x-7">
        <li>Customer Service</li>
        <li>Store Locator</li>
        <li>News Letter</li>
      </ul>
      <span className="flex-1 text-blue-400 uppercase text-5xl">swissposh</span>
      <ul className="flex flex-row items-center gap-x-7">
        <li className="text-blue-400">Sign in</li>
        <li>Favourites (0)</li>
        <li>Shopping Bag</li>
      </ul>
    </header>
  );
}
