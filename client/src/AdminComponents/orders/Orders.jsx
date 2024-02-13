import { useState, useEffect } from "react";
import { OrderCompleted } from "./OrderCompleted";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the server or an API
    // For now, using extended dummy data
    const dummyOrders = [
      {
        id: 1,
        orderId: "ORD123",
        customer: { id: 101, name: "John Doe", email: "john@example.com" },
        pizzaName: "Pepperoni Deluxe",
        status: "In Progress",
        address: "H.no 43, New Delhi, India, Asia",
      },
      {
        id: 2,
        orderId: "ORD124",
        customer: { id: 102, name: "Jane Smith", email: "jane@example.com" },
        pizzaName: "Vegetarian Supreme",
        address: "H.no 3, Delhi, India",
        status: "Delivered",
      },
      // Add more orders as needed
    ];

    setOrders(dummyOrders);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    // Update the status for the corresponding order
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );

    setOrders(updatedOrders);
    // Add logic to send updated status to the server or API
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">All Orders</h1>

      {/* Orders List */}
      <div className="max-w-2xl mx-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className="mb-6 border px-4 py-5 pyrounded-md bg-white shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">{order.pizzaName}</h2>
            <p className="my-4">
              Order ID: {order.orderId} | Status:{" "}
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                className="ml-2 p-2 border rounded hover:cursor-pointer bg-gray-500 text-white"
              >
                <option value="orderSuccess" className="">
                  Order Success
                </option>
                <option value="orderReceived">Order Received</option>
                <option value="inKitchen">In the kitchen</option>
                <option value="OutForDelivered">Out for Delivery</option>
                <option value="DeliveredSuccessfully">
                  Delivered Successfully
                </option>
                {/* Add more status options as needed */}
              </select>
            </p>
            <p className="font-semibold">
              Customer ID: {order.customer.id} | Customer Name:{" "}
              {order.customer.name} | Customer Email: {order.customer.email}
            </p>
            <p className="my-1">Address: {order.address}</p>
            {/* Add more details such as date, customer info, etc., based on your application */}
          </div>
        ))}
      </div>

      {/* Order Completed */}
      <OrderCompleted />
    </div>
  );
}

export { Orders };
