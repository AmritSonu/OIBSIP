import PropTypes from "prop-types";
import { useGetPizzasQuery } from "../../../apis/pizzasAPI";
import { PizzaSkeleton } from "../../../../utils/PizzaSkeleton";
import { truncatedContent } from "../../../../utils/truncateContent";
import { Error } from "../../../../utils/Error";

const sizes = [
  { label: "Normal", value: "normal" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
];
function PizzaCardItem({ handleButtonClick }) {
  const { data: madePizzas, isLoading, isError } = useGetPizzasQuery();
  if (isError) {
    return <Error />;
  }
  if (isLoading) {
    return Array.from({ length: 4 }, (_, index) => (
      <PizzaSkeleton key={index} />
    ));
  }
  return (
    <>
      {madePizzas.pizzas.map((pizzas) => (
        <div
          className="list-item bg-white border rounded-md overflow-hidden hover:cursor-pointer"
          key={pizzas._id}
        >
          <div onClick={handleButtonClick}>
            <img src={pizzas.pizza_URL} className="block w-full" alt="image" />
            <div className="flex-1 px-4 my-4">
              <h2 className="text-2xl font-semibold">{pizzas.name}</h2>
            </div>
            <p className="typography-6 list-item__desc flex-1 px-4 text-gray-800">
              {truncatedContent(pizzas.description, 100)}
            </p>
          </div>
          <div className="mt-auto">
            <div className="m-4">
              <div className="mb-4">
                <label htmlFor="dropdown" className="items-center pr-2 pb-2">
                  <span>Select your pizza Size</span>
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
