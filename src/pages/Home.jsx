import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="text-primary flex flex-col min-h-[100dvh] justify-center max-w-[100vw]">
      <Header />
      <div className="mt-[52px] md:mt-[70px]">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Home
