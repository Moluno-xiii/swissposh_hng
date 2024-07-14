import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/women/womenSlice";
import { clearCartMen } from "../store/men/menSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv) {
      toast.error("Please fill all the fields.");
      return;
    }

    if (isNaN(cardNumber) || cardNumber.length !== 16) {
      toast.error("Card number should be 16 digits.");
      return;
    }

    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      toast.error("Expiry date should be in mm/yy format.");
      return;
    }

    if (isNaN(cvv) || cvv.length !== 3) {
      toast.error("CVV should be 3 digits.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Your order has been placed", {
        onClose: () => {
          dispatch(clearCart());
          dispatch(clearCartMen())
          navigate("/");
        },
      });
    }, 5000);
  };

  return (
    <div className="mx-auto mb-5 md:mb-10 w-[327px] md:w-[680px]">
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
      <p className="py-5 text-center font-black uppercase leading-[21.6px] md:py-10 md:text-2xl md:leading-[32.4px]">
        cart
      </p>
      <div className="flex h-[46px] flex-row items-center justify-start bg-black px-4 text-[10px] uppercase leading-[13.5px] text-white md:px-6 md:text-xs md:leading-[16.2px]">
        Payment Information
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-[396px] border-x border-b border-[#00000040] bg-white px-4 text-black md:h-[519px] md:px-6 md:pt-6"
      >
        <div className="mb-6 flex flex-col gap-y-2 max-md:pt-5">
          <label className="text-[10px] leading-[13.5px]" htmlFor="cardNumber">
            Card Number <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="expiryDate">
            Expiry Date <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            placeholder="mm/yy"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="cvv">
            CVV <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mx-auto flex h-[38px] w-[249px] items-center justify-center bg-black text-xs text-[#E4E4E4] md:w-[403px]"
        >
          {loading ? "Processing..." : "Submit Payment"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
