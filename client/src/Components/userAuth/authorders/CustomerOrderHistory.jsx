// import { useAppNavigate } from "../../../../utils/useAppNavigate";
import { useGetCustomerOrdersQuery } from "../../../apis/authAPI";
import { truncatedContent } from "../../../../utils/truncateContent";
import { useNavigate } from "react-router-dom";

function CustomerOrderHistory() {
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("user_info"));
  const {
    data: customerOrders,
    error,
    isLoading,
  } = useGetCustomerOrdersQuery(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  function handleBack() {
    navigate(-1);
  }

  function handlePreviewOrder(eachOrder) {
    navigate(`prev/${eachOrder.orderId}`, { state: { order: eachOrder } });
  }

  return (
    <div className="min-h-screen p-4">
      <div className="bg-red-200 flex items-center justify-between px-5 py-3">
        <button onClick={handleBack}>
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
        <h2 className="text-xl font-semibold">My Orders</h2>
      </div>

      {customerOrders.ordersWithPayments.map((order, index) => (
        <div className="flex justify-center" key={index}>
          <div
            className="bg-white p-4 my-1 rounded-lg shadow-md flex items-end w-6/12 hover:cursor-pointer"
            onClick={() => handlePreviewOrder(order)}
          >
            <img
              src={order.total_order_items[0].image}
              alt={order.total_order_items[0].name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h1 className="text-lg font-semibold">
                {order.total_order_items[0].name}
              </h1>
              <p className="text-gray-500">
                Order ID: {truncatedContent(order.orderId, 12)}
              </p>
            </div>
            <p className="text-gray-500 ml-6 place-self-start text-xs font-semibold mt-2">
              Time: {order.orderDate}
            </p>
            <div className="place-self-center ml-20 hover:cursor-pointer">
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
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CustomerOrderHistory };
