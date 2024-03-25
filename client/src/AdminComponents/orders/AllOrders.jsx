import { useEffect } from "react";
import { OrderCompleted } from "./OrderCompleted";
import { useGetAllOrdersQuery } from "../../apis/orderAPI";
import { AdminOrdersSkeleton } from "../../../utils/PizzaSkeleton";

function Orders() {
  const { data: orders, error, isLoading, refetch } = useGetAllOrdersQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) return <AdminOrdersSkeleton />;
  if (error)
    return (
      <div className="text-center">An error occurred: {error.message}</div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">All Orders</h1>
      <div className="max-w-3xl mx-auto">
        {orders.allOrders.map((eachOrder) => (
          <div
            key={eachOrder._id}
            className="mb-6 border rounded-lg bg-white shadow-md p-6"
          >
            <>
              {eachOrder.total_order_items.map((eachPizzaDetails) => (
                <h2
                  className="text-xl font-bold mb-2"
                  key={eachPizzaDetails._id}
                >
                  {eachPizzaDetails.PizzaName}
                </h2>
              ))}
            </>
            <p className="my-4 flex items-center">
              <span className="font-semibold mr-2">Order ID:</span>
              <span>{eachOrder.orderId}</span>
              <span className="ml-4 font-semibold mr-2">Status:</span>
              <select
                value={eachOrder.order_status}
                className="ml-2 p-2 border rounded hover:cursor-pointer bg-gray-500 text-white"
              >
                <option value="orderSuccess">Order Success</option>
                <option value="orderReceived">Order Received</option>
                <option value="inKitchen">In the kitchen</option>
                <option value="OutForDelivered">Out for Delivery</option>
                <option value="DeliveredSuccessfully">
                  Delivered Successfully
                </option>
              </select>
            </p>
            <div>
              <span className="font-semibold">CUSTOMER ID: </span>
              <span>{eachOrder.userId}</span>
              <div>
                <span className="font-semibold">CUSTOMER NAME:</span>
                <span className="ml-4">
                  {eachOrder.customer_details.fullname}
                </span>
              </div>
              <span className="font-semibold">CUSTOMER EMAIL:</span>
              <span className="ml-4">{eachOrder.customer_details.email}</span>
            </div>
            <p className="my-1">
              <span className="font-semibold">ADDRESS: </span>
              <span className="">{eachOrder.customer_details.address}</span>
              <div>
                <span className="font-semibold">PHONE NO -</span>
                <span className="ml-4">{eachOrder.customer_details.phone}</span>
              </div>
            </p>
          </div>
        ))}
      </div>
      <OrderCompleted />
    </div>
  );
}

export { Orders };
