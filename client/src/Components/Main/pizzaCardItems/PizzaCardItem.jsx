import PropTypes from "prop-types";
import { useGetPizzasQuery } from "../../../apis/pizzasAPI";
const sizes = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
];
function PizzaCardItem({ handleButtonClick }) {
  const { data: madePizzas } = useGetPizzasQuery();
  console.log(madePizzas.pizzas);
  return (
    <>
      {madePizzas.pizzas.map((pizzas) => (
        <div
          className="list-item bg-white border rounded-md overflow-hidden hover:cursor-pointer"
          key={pizzas._id}
        >
          <div onClick={handleButtonClick}>
            <div className="list-item__image">
              <img
                src={pizzas.pizza_URL}
                className="block w-full"
                alt="image"
              />
            </div>

            <div className="typography-4 list-item__name flex-1 px-4 pt-4">
              <h2>{pizzas.name}</h2>

              <span className="ml-2 inline-flex align-middle">
                <span className="flex font-light mr-2">
                  <i className="icon-veg-india style-Irxjn"></i>
                </span>
              </span>
            </div>
            <p className="typography-6 list-item__desc flex-1 px-4">
              {pizzas.description}
            </p>
          </div>
          <div className="mt-auto">
            <div className="m-4">
              <div className="mb-4 relative">
                <label htmlFor="dropdown" className="items-center pr-2 pb-2">
                  <span>Select your size & crust</span>
                  <select
                    id="dropdown"
                    className="phdv-dropdown-select bg-grey-lightest p-2 w-full typography-6 bold my-1 border"
                  >
                    {sizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button className="button button--md button--green flex-1 font-semibold bg-mainAdditionalcolor-150 py-1 px-5 font-mono">
                <span>Add</span>
                <span className="w-auto ml-2">{pizzas.price}</span>
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
