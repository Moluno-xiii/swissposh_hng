import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPersonalInformation = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, phoneNumber } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      toast.error("Please fill all the fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (isNaN(phoneNumber) || phoneNumber.length < 10) {
      toast.error("Phone number should be more than 9 digits.");
      return;
    }

    navigate("/payment");
  };

  return (
    <div className="w-[327px] md:w-[680px]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex h-[46px] flex-row items-center justify-start bg-black px-4 text-[10px] uppercase leading-[13.5px] text-white md:px-6 md:text-xs md:leading-[16.2px]">
        Your information
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-[396px] border-x border-b border-[#00000040] bg-white px-4 text-black md:h-[519px] md:px-6 md:pt-6"
      >
        <div className="mb-6 flex flex-col gap-y-2 max-md:pt-5">
          <label className="text-[10px] leading-[13.5px]" htmlFor="email">
            Email <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2 max-md:pt-5">
          <label className="text-[10px] leading-[13.5px]" htmlFor="password">
            Password <span className="text-pink-400">*</span>
          </label>
          <input
            type="password"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="firstName">
            First Name <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="lastName">
            Last Name <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="phoneNumber">
            Phone Number <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="checkbox" checked={true} className="mr-2 accent-black" />
          <span className="text-xs font-medium leading-[16.2px]">
            {formData.email}
          </span>
        </div>
        <button
          type="submit"
          className="mx-auto flex h-[38px] w-[249px] items-center justify-center bg-black text-xs text-[#E4E4E4] md:w-[403px]"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPersonalInformation;
