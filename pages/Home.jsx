// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";

import { Outlet } from "react-router-dom";

// function Home() {
//   return (
//     <div className="text-primary flex flex-row items-center justify-center text-4xl">
//       <p className="text-blue-500">Welcome to Home Page</p>
//       <Header />
//       <Outlet />
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center text-red-400 uppercase">
      <p className="text-red-400">swiss posh Home page</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
