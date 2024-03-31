import { useEffect, useState } from "react";
import { OrderCompleted } from "./OrderCompleted";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../apis/orderAPI";
import { AdminOrdersSkeleton } from "../../../utils/PizzaSkeleton";

function Orders() {
  const { data: orders, error, isLoading, refetch } = useGetAllOrdersQuery();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [showCustomizations, setShowCustomizations] = useState(false);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleMouseEnter = () => {
    setShowCustomizations(true);
  };

  const handleMouseLeave = () => {
    setShowCustomizations(false);
  };
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
      <div className="flex justify-between my-5">
        <p className="font-semibold text-3xl">All Orders</p>
        <p className="text-lg">
          Total orders:
          <span className="font-semibold"> {orders.allOrders.length}</span>
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        {orders.allOrders.map((eachOrder) => (
          <div
            key={eachOrder._id}
            className="mb-6 border rounded-lg bg-white shadow-md p-6"
          >
            <div className="relative">
              {eachOrder.total_order_items.map((eachPizzaDetails, index) => (
                <div className="text-xl font-bold mb-2" key={index}>
                  <span>{eachPizzaDetails.PizzaName}</span>
                  {eachPizzaDetails.customizations ? (
                    <span
                      className="bg-blue-600 p-1 mx-1 text-sm text-white font-mono hover:cursor-pointer"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      customized
                    </span>
                  ) : (
                    <span className="bg-green-600 p-1 mx-1 text-sm text-white font-mono">
                      no-customized
                    </span>
                  )}
                  {/*  */}
                  {showCustomizations && eachPizzaDetails.customizations && (
                    <div className="text-sm absolute top-0 -right-20 w-8/12 bg-gray-500 p-1 font-semibold rounded-lg text-white">
                      <p> {eachPizzaDetails.customizations.crust_name},</p>
                      <p>{eachPizzaDetails.customizations.cheese_name},</p>
                      <p>{eachPizzaDetails.customizations.sauce_name},</p>
                      <p>
                        {eachPizzaDetails.customizations.topping_names.map(
                          (topping, toppingIndex) => (
                            <span key={toppingIndex}>
                              {topping}
                              {toppingIndex !==
                                eachPizzaDetails.customizations.topping_names
                                  .length -
                                  1 && ", "}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
