import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="text-primary flex flex-col justify-center text-4xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home
