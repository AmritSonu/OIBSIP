import { useState } from "react";
import { PizzaList } from "./PizzaList";

function AddPizza() {
  const [pizza, setPizza] = useState({
    name: "",
    crust: "",
    sauce: "",
    cheese: "",
    toppings: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPizza((prevPizza) => ({ ...prevPizza, [name]: value }));
  };

  const handleToppingsChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setPizza((prevPizza) => ({
      ...prevPizza,
      toppings: selectedOptions,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the pizza data to the server
    console.log("Pizza Data:", pizza);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Add Pizza</h1>

      {/* Pizza Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Pizza Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={pizza.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="crust"
            className="block text-sm font-medium text-gray-700"
          >
            Crust
          </label>
          <select
            id="crust"
            name="crust"
            value={pizza.crust}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="thin">Thin Crust</option>
            <option value="thick">Thick Crust</option>
            <option value="stuffed">Stuffed Crust</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="sauce"
            className="block text-sm font-medium text-gray-700"
          >
            Sauce
          </label>
          <select
            id="sauce"
            name="sauce"
            value={pizza.sauce}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="tomato">Tomato Sauce</option>
            <option value="white">White Sauce</option>
            <option value="bbq">BBQ Sauce</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="cheese"
            className="block text-sm font-medium text-gray-700"
          >
            Cheese
          </label>
          <select
            id="cheese"
            name="cheese"
            value={pizza.cheese}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="mozzarella">Mozzarella</option>
            <option value="cheddar">Cheddar</option>
            <option value="parmesan">Parmesan</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="toppings"
            className="block text-sm font-medium text-gray-700"
          >
            Toppings
          </label>
          <select
            multiple
            id="toppings"
            name="toppings"
            onChange={handleToppingsChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="pepperoni">Pepperoni</option>
            <option value="mushrooms">Mushrooms</option>
            <option value="onions">Onions</option>
            <option value="sausage">Sausage</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Pizza
        </button>
      </form>
      <PizzaList />
    </div>
  );
}

export { AddPizza };
