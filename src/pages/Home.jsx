import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileFooterNavbar from "../components/MobileFooterNavbar";


import { Outlet } from "react-router-dom";
const fetchData2 = async () => {
  try {
    const response = await fetch(
      "https://api.timbu.cloud/products?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=1&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774",
    );


    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Received non-JSON response");
    }

    const data = await response.json();
    console.log(response);
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData2()

function Home() {

  return (
    <div className="text-primary flex flex-col min-h-[100dvh] justify-center max-w-[100vw]" onClick={fetchData2}>
      <Header />
      <div className="mt-[52px] md:mt-[70px]">
      <Outlet />
      </div>
      <MobileFooterNavbar />
      <Footer />
    </div>
  );
}

export default Home
