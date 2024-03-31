import { useGetDeliveredOrdersQuery } from "../../apis/orderAPI";

function OrderCompleted() {
  const { data: orders, error, isLoading } = useGetDeliveredOrdersQuery();

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8">An error occurred</div>;

  // Calculate total of all prices
  const totalAllPrices = orders.completedOrders.reduce(
    (total, order) => total + order.totalOrderAmount,
    0
  );

  return (
    <div className="my-10 ">
      <div className="flex justify-between my-5">
        <p className="text-3xl font-bold mb-4">All Completed Orders</p>
        <p className="text-lg">
          Total orders:{" "}
          <span className="font-semibold">{orders.completedOrders.length}</span>
        </p>
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
