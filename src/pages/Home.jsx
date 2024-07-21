import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileFooterNavbar from "../components/MobileFooterNavbar";
import Spinner from "../components/Spinner";
import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    toast.info(
      "Please be patient, loading content FOR THE FIRST TIME may take a while (up to 3 minutes) because of the reverse proxy server to bypass CORS policies",
    );
  }, []);
  if (navigation.state === "loading") return <Spinner />;

  return (
    <div className="flex min-h-[100dvh] max-w-[100vw] flex-col justify-center text-primary">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
