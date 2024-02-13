// PizzaList component
const pizzaList = [
  {
    id: 33,
    name: "Veg pizza",
    crust: "pizza crust",
    sauce: "pizza sauce",
    cheese: "pizzacheese",
    type: "veg",
    toppings: "mashrooms,onion,carrot,peas,red chilly",
  },
  {
    id: 33,
    name: "Veg pizza",
    crust: "pizza crust",
    sauce: "pizza sauce",
    cheese: "pizzacheese",
    type: "non-veg",
    toppings: "mashrooms,onion,carrot,peas,red chilly",
  },
  {
    id: 33,
    name: "Veg pizza",
    crust: "pizza crust",
    sauce: "pizza sauce",
    cheese: "pizzacheese",
    type: "veg",

    toppings: "mashrooms,onion,carrot,peas,red chilly",
  },
  {
    id: 33,
    name: "Veg pizza",
    crust: "pizza crust",
    sauce: "pizza sauce",
    cheese: "pizzacheese",
    type: "mixed",
    toppings: "mashrooms,onion,carrot,peas,red chilly",
  },
];
function PizzaList() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Pizza List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Crust</th>
              <th className="py-2 px-4 border-b">Sauce</th>
              <th className="py-2 px-4 border-b">Cheese</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Toppings</th>
            </tr>
          </thead>
          <tbody>
            {pizzaList.map((pizza, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{pizza.id}</td>
                <td className="py-2 px-4 border-b">{pizza.type}</td>
                <td className="py-2 px-4 border-b">{pizza.name}</td>
                <td className="py-2 px-4 border-b">{pizza.crust}</td>
                <td className="py-2 px-4 border-b">{pizza.sauce}</td>
                <td className="py-2 px-4 border-b">{pizza.cheese}</td>
                <td className="py-2 px-4 border-b">{pizza.toppings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { PizzaList };
