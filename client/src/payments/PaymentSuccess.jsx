import { useNavigate, useParams } from "react-router-dom";
import "animate.css";
import { useCart } from "../ContextAPIs/useCartContext";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  let { id: paymentId } = useParams();

  function handlebackButton() {
    navigate("/pizzas");
  }
  function handleOrderList() {
    navigate("/orders");
  }
  if (paymentId) {
    clearCart();
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
          <span>Yours Payment ID : {paymentId}</span>
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
        <button
          onClick={handleOrderList}
          className="ml-1 mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 animate__animated animate__slideInUp animate__pulse"
        >
          orders
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
