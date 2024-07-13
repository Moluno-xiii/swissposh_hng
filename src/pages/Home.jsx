import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileFooterNavbar from "../components/MobileFooterNavbar";
import Spinner from "../components/Spinner";
import { Outlet, useNavigation } from "react-router-dom";


function Home() {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Spinner />
  return (
    <div
      className="flex min-h-[100dvh] max-w-[100vw] flex-col justify-center text-primary"
    >
      <Header />
      <div className="mt-[52px] md:mt-[70px]">
        {navigation.state === "loading" && <Spinner />}
        <Outlet />
      </div>
      <MobileFooterNavbar />
      <Footer />
    </div>
  );
}

export default Home;
