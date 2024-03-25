import { useEffect } from "react";
import { OrderCompleted } from "./OrderCompleted";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../apis/orderAPI";
import { AdminOrdersSkeleton } from "../../../utils/PizzaSkeleton";

function Orders() {
  const { data: orders, error, isLoading, refetch } = useGetAllOrdersQuery();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const data = await updateOrderStatus({
        orderId,
        order_status: newStatus,
      });
      console.log(data);
      refetch();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (isLoading) return <AdminOrdersSkeleton />;
  if (error) return <div className="text-center">An error occurred :(</div>;

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
              {eachOrder.total_order_items.map((eachPizzaDetails, index) => (
                <h2 className="text-xl font-bold mb-2" key={index}>
                  {eachPizzaDetails.PizzaName}
                </h2>
              ))}
            </>
            <div className="my-4 flex items-center">
              <span className="font-semibold mr-2">Order ID:</span>
              <span>{eachOrder.orderId}</span>
              <span className="ml-4 font-semibold mr-2">Status:</span>
              <select
                value={eachOrder.order_status}
                onChange={(e) =>
                  handleStatusChange(eachOrder._id, e.target.value)
                }
                className="ml-2 p-1 border rounded hover:cursor-pointer bg-black text-white"
              >
                <option value="order_success">ORDER SUCCESS</option>
                <option value="order_received">ORDER RECEIVED</option>
                <option value="in_the_kitchen">IN THE KITCHEN</option>
                <option value="Out_for_delivery">OUT FOR DELIVERY</option>
                <option value="delivered_successfully">
                  DELIVERED SUCCESSFULLY
                </option>
              </select>
            </div>
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
            <div className="my-1">
              <span className="font-semibold">ADDRESS: </span>
              <span>{eachOrder.customer_details.address}</span>
              <div className="my-1">
                <span className="font-semibold">PHONE NO -</span>
                <span className="ml-4">{eachOrder.customer_details.phone}</span>
              </div>
              <span className="font-semibold text-sm">ORDER TOTAL AMOUNT:</span>
              <span>{eachOrder.totalOrderAmount}</span>
            </div>
          </div>
        ))}
      </div>
      <OrderCompleted />
    </div>
  );
}

export { Orders };
