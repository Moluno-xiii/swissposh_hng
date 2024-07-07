import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="text-primary flex flex-col min-h-[100dvh] justify-center max-w-[100vw]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home
