import { useState } from "react";

function PizzaStatistics() {
  const [totalOrders] = useState(0);
  const [totalRevenue] = useState(0);
  const [averageOrderValue] = useState(0);
  const [mostPopularPizza] = useState("");

  // useEffect(() => {
  //   // Fetch data or calculate statistics from your APIs
  //   // For now, using dummy data
  //   const fetchStatistics = async () => {
  //     // Replace the API URLs with your actual API endpoints
  //     const ordersResponse = await fetch("https://api.example.com/orders");
  //     const ordersData = await ordersResponse.json();
  //     setTotalOrders(ordersData.length);

  //     const revenueResponse = await fetch("https://api.example.com/revenue");
  //     const revenueData = await revenueResponse.json();
  //     setTotalRevenue(revenueData.total);

  //     const averageOrderValueResponse = await fetch(
  //       "https://api.example.com/averageOrderValue"
  //     );
  //     const averageOrderValueData = await averageOrderValueResponse.json();
  //     setAverageOrderValue(averageOrderValueData.average);

  //     const mostPopularPizzaResponse = await fetch(
  //       "https://api.example.com/mostPopularPizza"
  //     );
  //     const mostPopularPizzaData = await mostPopularPizzaResponse.json();
  //     setMostPopularPizza(mostPopularPizzaData.name);
  //   };

  //   fetchStatistics();
  // }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Pizza Application Statistics</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Total Orders</h2>
          <p>{totalOrders}</p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Total Revenue</h2>
          <p>${totalRevenue.toFixed(2)}</p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Average Order Value</h2>
          <p>${averageOrderValue.toFixed(2)} </p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Most Popular Pizza</h2>
          <p>{mostPopularPizza} Veg pizza </p>
        </div>
      </div>
    </div>
  );
}

export { PizzaStatistics };
