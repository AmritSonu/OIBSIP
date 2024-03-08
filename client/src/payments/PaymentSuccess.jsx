import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  function handlebackButton() {
    navigate("/pizzas");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
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
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Payment Successful
        </h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        <button
          onClick={handlebackButton}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export { PaymentSuccess };
