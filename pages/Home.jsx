// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";

import { Outlet } from "react-router-dom";


export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center text-red-400 uppercase">
      <p className="text-purple-400">swiss posh Home page</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
