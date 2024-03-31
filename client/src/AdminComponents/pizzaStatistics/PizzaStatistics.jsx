import PropTypes from "prop-types"; // Import PropTypes
import { useGetOrderStaticsQuery } from "../../apis/orderAPI";
import { StaticsLoader } from "../../../utils/StaticsLoader";

function PizzaStatistics() {
  const { data: orderStatics, isLoading, isError } = useGetOrderStaticsQuery();

  if (isLoading) {
    return (
      <>
        <StaticsLoader />
      </>
    );
  }
  if (isError || !orderStatics) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Pizza Application Statistics</h1>

      <div className="grid grid-cols-2 gap-4">
        <StatCard title="Total Orders" value={orderStatics.totalOrders} />
        <StatCard
          title="Total Revenue"
          value={`$${orderStatics.totalRevenue.toFixed(2)}`}
        />
        <StatCard
          title="Average Order Value"
          value={`$${orderStatics.averageOrderValue.toFixed(2)}`}
        />
        <StatCard
          title="Most Popular Pizza"
          value={orderStatics.mostPopularPizza}
        />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{value}</p>
    </div>
  );
}
StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export { PizzaStatistics };
