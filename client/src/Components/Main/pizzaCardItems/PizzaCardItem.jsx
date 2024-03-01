import { useState } from "react";
import PropTypes from "prop-types";
import { useGetPizzasQuery } from "../../../apis/pizzasAPI";
import { PizzaSkeleton } from "../../../../utils/PizzaSkeleton";
import { truncatedContent } from "../../../../utils/truncateContent";
import { Error } from "../../../../utils/Error";
import { useDispatch } from "react-redux";
import {
  setPizzaId,
  setPizzaSize,
  updateTotalPrice,
} from "../../../slices/orderSlice";

const sizes = [
  { label: "Normal", value: "normal", priceIncrease: 0 },
  { label: "Medium", value: "medium", priceIncrease: 90 },
  { label: "Large", value: "large", priceIncrease: 190 },
];

function PizzaCardItem({ handleButtonClick }) {
  const dispatch = useDispatch();
  const { data: madePizzas, isLoading, isError } = useGetPizzasQuery();
  const [selectedSizes, setSelectedSizes] = useState({});

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return Array.from({ length: 4 }, (_, index) => (
      <PizzaSkeleton key={index} />
    ));
  }

  const handleSizeChange = (pizzaId, event) => {
    const newSize = event.target.value;
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [pizzaId]: newSize,
    }));
  };

  const calculatePrice = (pizza) => {
    const selectedSize = selectedSizes[pizza._id];
    const selectedSizeInfo = sizes.find((s) => s.value === selectedSize);
    if (selectedSizeInfo) {
      return pizza.price + selectedSizeInfo.priceIncrease;
    }
    return pizza.price;
  };

  const updateTotalPricePizza = (totalPrice, pizzaId, pizzaSize) => {
    // Dispatch the action to update the total price
    dispatch(updateTotalPrice(totalPrice));
    dispatch(setPizzaId(pizzaId));
    dispatch(setPizzaSize(pizzaSize));
    console.log(totalPrice);
  };

  return (
    <>
      {madePizzas.pizzas.map((eachPizza) => (
        <div
          className="list-item bg-white border rounded-md overflow-hidden hover:cursor-pointer"
          key={eachPizza._id}
        >
          <div
            onClick={() =>
              handleButtonClick(
                eachPizza._id,
                eachPizza.name,
                calculatePrice(eachPizza),
                selectedSizes[eachPizza._id]
              )
            }
          >
            <img
              src={eachPizza.pizza_URL}
              className="block w-full"
              alt="image"
            />
            <div className="flex-1 px-4 my-4">
              <h2 className="text-2xl font-semibold">{eachPizza.name}</h2>
            </div>
            <p className="typography-6 list-item__desc flex-1 px-4 text-gray-800">
              {truncatedContent(eachPizza.description, 100)}
            </p>
          </div>
          <div className="mt-auto">
            <div className="m-4">
              <div className="mb-4">
                <label
                  htmlFor={`dropdown-${eachPizza._id}`}
                  className="items-center pr-2 pb-2"
                >
                  <span>Select your pizza Size</span>
                  <select
                    id={`dropdown-${eachPizza._id}`}
                    className="phdv-dropdown-select bg-grey-lightest p-2 w-full typography-6 bold my-1 border"
                    // value={selectedSizes[eachPizza._id] || "normal"}
                    value={
                      selectedSizes[eachPizza._id] !== undefined
                        ? selectedSizes[eachPizza._id]
                        : "normal"
                    }
                    onChange={(event) => handleSizeChange(eachPizza._id, event)}
                  >
                    {sizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                className="button button--md button--green flex-1 font-semibold bg-mainAdditionalcolor-150 py-1 px-5 font-mono"
                onClick={() =>
                  updateTotalPricePizza(
                    calculatePrice(eachPizza),
                    eachPizza._id,
                    selectedSizes[eachPizza._id]
                  )
                }
              >
                <span>Add</span>
                <span className="w-auto ml-2">{calculatePrice(eachPizza)}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

PizzaCardItem.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export { PizzaCardItem };
