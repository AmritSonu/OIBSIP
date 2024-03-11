import { useLocation, useNavigate } from "react-router-dom";
import "animate.css";

const PaymentSuccess = () => {
  const { state: orderDetails } = useLocation();
  const navigate = useNavigate();

  function handlebackButton() {
    navigate("/pizzas");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-200">
      <div className="animate__animated animate__fadeIn animate__zoomIn bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="animate__animated animate__slideInLeft animate__delay-1s">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 mx-auto text-green-500"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14l4 4 8-8" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4 animate__animated animate__slideInRight">
          Payment Successfull...
        </h2>
        <p className="block text-2xl font-bold text-gray-800 mt-4 animate__animated slideInLeft">
          Your Order is placed 😊
        </p>
        <div className="flex flex-col gap-5 my-5">
          <span>Yours Track Order ID : {orderDetails.razorpay_order_id}</span>
          <span>Yours Order ID : {orderDetails.razorpay_payment_id}</span>
        </div>
        <p className="text-gray-600 mt-2 text-lg font-serif">
          Thank you for your purchase.
        </p>
        <button
          onClick={handlebackButton}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 animate__animated animate__slideInUp animate__pulse"
        >
          Continue Shopping
        </button>
        <div className="animate__animated animate__slideInRight animate__delay-1s">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 mx-auto text-green-500"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14l4 4 8-8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { PaymentSuccess };
