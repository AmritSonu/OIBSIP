import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useGetCustomerOrdersQuery } from "../../../apis/authAPI";
import { truncatedContent } from "../../../../utils/truncateContent";
import { OrderSkeleton } from "../../../../utils/PizzaSkeleton";

function CustomerOrderHistory() {
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("user_info"));
  const {
    data: customerOrders,
    error,
    isLoading,
  } = useGetCustomerOrdersQuery(userId);

  if (isLoading)
    return (
      <>
        <OrderHeader handleBack={() => navigate(-1)} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <OrderSkeleton key={index} />
          ))}
        </div>
      </>
    );

  if (!customerOrders.ordersWithPayments.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">No order items yet</h1>
        <button
          className="bg-mainAdditionalcolor-150 text-white px-4 py-2 rounded-md hover:bg-mainLightcolor-200"
          onClick={() => navigate("/pizzas")}
        >
          Explore now &#10140;
        </button>
      </div>
    );
  }

  if (error) return <div>An error occurred</div>;

  function handlePreviewOrder(eachOrder) {
    navigate(`prev/${eachOrder.orderId}`, { state: { order: eachOrder } });
  }
  return (
    <div className="min-h-screen p-4">
      <OrderHeader handleBack={() => navigate(-1)} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {customerOrders.ordersWithPayments.map((order, index) => (
          <div
            className="hover:cursor-pointer"
            key={index}
            onClick={() => handlePreviewOrder(order)}
          >
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start">
              <img
                src="https://media.istockphoto.com/id/1377372234/photo/pizza-with-salami-bell-pepper-tomatoes-and-cheese-pickles-bacon-and-sausages-on-a-light.jpg?s=612x612&w=0&k=20&c=Cw2GlLY474sFLmBm4IFsSoSXV4wHZM-ub691aaDqLlw="
                alt={order.total_order_items[0].PizzaName}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {order.total_order_items.map((eachPizzaItem, index) => (
                    <span key={index} className="mr-3">
                      {eachPizzaItem.PizzaName}
                    </span>
                  ))}
                </h3>
                <p className="text-gray-500">
                  Order ID: {truncatedContent(order.orderId, 12)}
                </p>
              </div>
              <p className="text-gray-500 text-xs font-semibold mt-2">
                Time: {order.orderDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderHeader({ handleBack }) {
  return (
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
  );
}
OrderHeader.propTypes = {
  handleBack: PropTypes.func.isRequired,
};
export { CustomerOrderHistory };
