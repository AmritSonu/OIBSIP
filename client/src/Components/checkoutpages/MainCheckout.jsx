import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";
const cart = [
  {
    id: 1,
    projectName: "Project Shoe Shop",
    productInfo: "Lightweight running shoes for optimal performance.",
    price: 59.99,
    imageUrl:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=450",
  },
  {
    id: 2,
    projectName: "Project Shoe Shop",
    productInfo: "Lightweight running shoes for optimal performance.",
    price: 59.99,
    imageUrl:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=450",
  },
];
const MainCheckout = () => {
  const navigate = useNavigate();
  return (
    <div className="w-10/12 mx-auto my-5">
      <button
        onClick={() => navigate("/pizzas")}
        className="border rounded-full bg-mainAdditionalcolor-150 p-[8px] m-[4px] w-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
        </svg>
      </button>

      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center gap-1">
                  <img
                    src={item.imageUrl}
                    alt={item.projectName}
                    className="w-16 h-16 object-cover "
                  />

                  <p>{item.projectName}</p>
                </div>

                <p>${item.price}</p>
              </div>
            ))}
            <hr className="my-4" />
            <p className="font-semibold">Total: 44</p>
          </div>
          {/* form  */}
          <CheckoutForm />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export { MainCheckout };
