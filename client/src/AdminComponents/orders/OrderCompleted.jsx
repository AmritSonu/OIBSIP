function OrderCompleted() {
  // Sample order data
  const sampleOrder = [
    { id: 1, item: "Veg Pizza", quantity: 2, price: 15.99 },
    { id: 2, item: "Margherita Pizza", quantity: 1, price: 12.99 },
    { id: 3, item: "Pepperoni Pizza", quantity: 3, price: 18.99 },
  ];

  // Calculate total price
  const totalAmount = sampleOrder.reduce(
    (acc, order) => acc + order.quantity * order.price,
    0
  );

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-4">Order Completed</h1>
      <div>
        <ul className="list-disc pl-4">
          {sampleOrder.map((order) => (
            <li key={order.id} className="mb-2">
              <span className="font-bold">{order.item}</span> - Quantity:{" "}
              {order.quantity}, Price: ${order.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export { OrderCompleted };
