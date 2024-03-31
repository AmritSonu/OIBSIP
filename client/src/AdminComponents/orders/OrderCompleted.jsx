import { useGetDeliveredOrdersQuery } from "../../apis/orderAPI";

function OrderCompleted() {
  const {
    data: orders,
    error,
    isLoading,
    refetch,
  } = useGetDeliveredOrdersQuery();

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8">An error occurred</div>;

  const handleRefreshClick = () => {
    refetch();
    console.log("refetch");
  };
  
  // Calculate total of all prices
  const totalAllPrices = orders.completedOrders.reduce(
    (total, order) => total + order.totalOrderAmount,
    0
  );

  return (
    <div className="my-14">
      <div className="flex justify-between my-5">
        <p className="text-3xl font-bold mb-4">All Completed Orders</p>
        <div>
          <p className="text-lg">
            Total orders:{" "}
            <span className="font-semibold">
              {orders.completedOrders.length}
            </span>
          </p>
          <span className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="blue"
              className="w-6 h-6 hover:cursor-pointer my-2"
              onClick={handleRefreshClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <ul className="space-y-4">
          {orders.completedOrders.map((order) => (
            <li key={order._id} className="border rounded-lg p-4">
              <div className="flex justify-between">
                <div className="font-bold">
                  {order.total_order_items.map((item) => (
                    <span key={item._id}>{item.PizzaName}, </span>
                  ))}
                </div>
                <div>Quantity: {order.total_order_items.length}</div>
              </div>
              <div className="mt-2">
                <div>Total Amount: ₹{order.totalOrderAmount.toFixed(2)}</div>
                <div className="text-sm text-gray-500">
                  Order ID: {order.orderId}
                </div>
                <div className="text-sm text-gray-500">
                  Order Date: {new Date(order.orderDate).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 font-bold text-lg">
          Total of All Prices: ₹{totalAllPrices.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export { OrderCompleted };
