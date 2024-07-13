import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileFooterNavbar from "../components/MobileFooterNavbar";

import { Outlet } from "react-router-dom";
import { increment, decrement } from "../store/men/menSlice";
const fetchData2 = async () => {
  try {
    const response = await fetch(
      "https://reverse-proxy-tp0r.onrender.com/products?organization_id=13cad8063ba940efbccda69212e11d26&reverse_sort=false&page=1&size=10&Appid=3FMR5O3PRSXTMG8&Apikey=7c133f07b8864976a3095c480e82577a20240712120853424774",
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
fetchData2();

function Home() {
  // const count = useSelector((state) => state.men.value);
  // const dispatch = useDispatch();

  // const addOne = () => {
  //   dispatch(increment());
  //   console.log(count)
  // };
  // const removeOne = () => {
  //   dispatch(decrement());
  //   console.log(count);
  // };
  return (
    <div
      className="flex min-h-[100dvh] max-w-[100vw] flex-col justify-center text-primary"
    >
      {/* <p>{count}</p>
      <button onClick={addOne}>click me</button>
      <button onClick={removeOne}>remove 1</button> */}
      <Header />
      <div className="mt-[52px] md:mt-[70px]">
        <Outlet />
      </div>
      <MobileFooterNavbar />
      <Footer />
    </div>
  );
}

export default Home;
