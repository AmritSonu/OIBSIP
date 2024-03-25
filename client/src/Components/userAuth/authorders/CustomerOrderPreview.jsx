import { useAppNavigate } from "../../../../utils/useAppNavigate";
import { useLocation } from "react-router-dom";
import styles from "./order.module.css";

const trackOrder = [
  "order_success",
  "order_received",
  "in_the_kitchen",
  "Out_for_delivery",
  "delivered_successfully",
];

function CustomerOrderPreview() {
  const { goTo } = useAppNavigate();
  const { state } = useLocation();
  const { order } = state;
  console.log(order);
  function handleBack() {
    goTo(-1);
  }
  if (!order) {
    return <div>No order data available</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-red-200 flex items-center justify-between px-5 py-3">
        <button onClick={handleBack} className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold">Order Preview</h2>
      </div>
      <div className="p-4 my-4 bg-white rounded-lg shadow-md">
        <h1 className="font-bold text-2xl font-serif">
          Order Name:
          {order.total_order_items.map((eachPizzaItem, index) => (
            <span key={eachPizzaItem._id} className="ml-2">
              {eachPizzaItem.PizzaName}
              {index !== order.total_order_items.length - 1 && ","}
            </span>
          ))}
        </h1>
        {/* order */}
        <h1 className="text-lg font-semibold text-center my-10 font-serif underline">
          Order Tracking
        </h1>
        {/* Delivery step flow */}
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center justify-center w-1/4 gap-7 relative">
            <div className="h-[1px] w-48 bg-gray-500 absolute rotate-90 z-2"></div>
            {trackOrder.map((eachTrack, index) => (
              <div
                key={index}
                className={`bg-mainAdditionalcolor-150 rounded-full w-3 h-3 z-20 ${
                  eachTrack === order.order_status
                    ? `ml-2 ${styles.orderDot}`
                    : ""
                }`}
              ></div>
            ))}
          </div>
          <div className="flex flex-col justify-start w-1/4 gap-4 -ml-36 z-20">
            {trackOrder.map((eachTrack, index) => (
              <span
                key={index}
                className={`text-gray-700 ${
                  eachTrack === order.order_status
                    ? `text-lg ${styles.MyCustomFonts}`
                    : ""
                }`}
              >
                {eachTrack}
              </span>
            ))}
          </div>
        </div>

        <div className="text-gray-700 font-semibold flex flex-col gap-2 my-6 mx-5">
          <span>Total Bill: ₹{order.totalOrderAmount}</span>
          <span>Order Date: {order.orderDate}</span>
          <span>Order ID: {order.orderId}</span>
        </div>
      </div>

      <div className="py-4 my-4 bg-white rounded-lg shadow-md flex flex-col gap-3 font-semibold text-gray-700 px-6">
        <span>Payment Method - Online</span>
        <span>Payment Status: {order.payments[0].paymentStatus}</span>
        <span>Payment Id: {order.payments[0].razorpay_payment_id}</span>
      </div>
    </div>
  );
}
export { CustomerOrderPreview };
