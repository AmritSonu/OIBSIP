import { useNavigate } from "react-router-dom";
import { useCart } from "../../../ContextAPIs/useCartContext";
import { calculateTotals } from "../../../../utils/calculateTotals";

function PizzaSelectorBasket() {
  const navigate = useNavigate();
  const resturent_fees = 18;
  const { cart: basket, removeFromCart } = useCart();
  const { subtotal, total } = calculateTotals(basket, resturent_fees);

  const handleCart = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  const handleBasketDeleteItem = (pizzaId) => {
    removeFromCart(pizzaId);
  };

  return (
    <div className="border absolute top-20 right-0  md:w-3/12 bg-white sm:w-5/12">
      <button
        onClick={() => navigate("/pizzas")}
        type="button"
        className="border rounded-full bg-mainAdditionalcolor-150 p-[8px] m-[4px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
        </svg>
      </button>

      <h2 className="text-center px-4 sm:px-10 pt-1 lg:pt-2 pb-2 font-semibold text-lg ">
        Your Basket
      </h2>
      <div className=" lg:shadow-left lg:border-l bg-white ml-auto h-40 overflow-auto">
        {basket ? (
          basket.map((eachBasketItem) => (
            <div
              className="flex gap-5 justify-between p-2 text-gray-600"
              key={eachBasketItem._id}
            >
              <h1 className="font-semibold text-sm">
                {eachBasketItem.PizzaName}
              </h1>
              <div className="flex w-2/5 justify-between">
                <span className="font-semibold">
                  ₹ {eachBasketItem.totalPrice}
                </span>
                <button
                  className="font-semibold"
                  onClick={() => handleBasketDeleteItem(eachBasketItem._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="px-4 sm:px-10 pt-5 pb-40">
            Your basket looks a little empty :)
          </p>
        )}
      </div>
      {basket.length ? (
        <>
          <div className="flex flex-col gap-5 justify-between p-5 font-semibold text-gray-700">
            <span>Sub-total: ₹ {subtotal}</span>
            <span>Resturent Additional Fees - ₹ {resturent_fees}</span>
            <span>Total - ₹ {total}</span>
          </div>
          <button
            className="p-1 bg-mainAdditionalcolor-150 ml-5 my-2 font-mono px-6"
            onClick={handleCart}
          >
            Conform
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export { PizzaSelectorBasket };
