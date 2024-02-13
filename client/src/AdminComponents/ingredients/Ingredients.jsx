// Ingredients component with added id, heading, scroll-x, and fixed height
function Ingredients() {
  const generateRandomData = (category) => {
    const getRandomQuantity = () => Math.floor(Math.random() * 100) + 1;
    const getRandomPrice = () => (Math.random() * 5).toFixed(2);

    const ingredients = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: `${category} ${index + 1}`,
      quantity: getRandomQuantity(),
      price: getRandomPrice(),
    }));

    return ingredients;
  };

  const crusts = generateRandomData("Crust");
  const sauces = generateRandomData("Sauce");
  const cheeses = generateRandomData("Cheese");
  const toppings = generateRandomData("Topping");

  const renderTable = (ingredient, category) => (
    <div key={category} className="mb-6">
      <h2 className="text-2xl font-bold mb-4">{category}s</h2>
      <div className="overflow-x-auto h-80">
        <table className="min-w-full bg-white border border-gray-300 text-center ">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Quantity Available</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ingredient.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b font-semibold">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.quantity}</td>
                <td className="py-2 px-4 border-b">${item.price}</td>
                <td className="py-2 px-4 border-b ">
                  <button
                    type="button"
                    className="text-mainColor-400 border rounded-full py-[4px] px-2 font-semibold "
                  >
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right my-1 mr-5">
          <button
            type="button"
            className="bg-mainAdditionalcolor-150 px-4 py-1 font-bold "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Ingredients Control Center</h1>

      {renderTable(crusts, "Crust")}
      {renderTable(sauces, "Sauce")}
      {renderTable(cheeses, "Cheese")}
      {renderTable(toppings, "Topping")}
    </div>
  );
}

export { Ingredients };
