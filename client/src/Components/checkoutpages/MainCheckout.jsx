import axios from "axios";
import { useNavigate } from "react-router-dom";
import { calculateTotals } from "../../../utils/calculateTotals";
import { useCart } from "../../ContextAPIs/useCartContext";
import { CheckoutForm } from "./CheckoutForm";
const MainCheckout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const resturent_fees = 18;
  const { subtotal, total: amount } = calculateTotals(cart, resturent_fees);
  const userInfo = localStorage.getItem("user_info");
  const userId = JSON.parse(userInfo);

  async function checkoutHandler(customerOrder) {
    const { customer_details, totalPrice: amount } = customerOrder;
    console.log("customerOrder", customerOrder);
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:3000/payment/get_api_key");
      const {
        data: { order },
      } = await axios.post("http://localhost:3000/payment/checkout", {
        razor: { amount, customerOrder, userId },
      });
      if (order) {
        clearCart();
        const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: customer_details.fullname,
          description: "Pizza Delivery Payments",
          image: "https://picsum.photos/200",
          order_id: order.id,
          callback_url: "http://localhost:3000/payment/payment_verification",
          prefill: {
            name: customer_details.fullname,
            email: customer_details.email,
            contact: customer_details.phone,
          },
          notes: {
            address: customer_details.address,
          },
          theme: {
            color: "#F4C430",
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  }
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
          <div className="bg-white rounded-md shadow-sm my-10 p-5">
            <h3 className="text-2xl font-semibold mb-8">Order Summary</h3>
            <div className="h-3/6 overflow-y-auto">
              {cart &&
                cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between gap-1 font-semibold items-center mb-2 w-10/12"
                  >
                    <div className="flex items-center gap-1">
                      <img
                        src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=450"
                        alt={item.PizzaName}
                        className="w-16 h-16 object-cover"
                      />
                      <p>{item.PizzaName} </p>
                    </div>
                    <p> ₹ {item.totalPrice}</p>
                  </div>
                ))}
            </div>
            <hr className="my-4" />
            <div className="my-10 sm:text-sm flex justify-center flex-col gap-2 font-normal ">
              <span className="font-semibold text-lg">
                Extra Restrurent charges: ₹ {resturent_fees}
              </span>
              <span className="font-semibold block">
                Sub-total : ₹ {subtotal}
              </span>
              <span className="font-semibold text-lg">Total: ₹ {amount}</span>
            </div>
          </div>
          <CheckoutForm checkoutPayAndPlace={checkoutHandler} />
        </div>
      </div>
    </div>
  );
};
export { MainCheckout };
