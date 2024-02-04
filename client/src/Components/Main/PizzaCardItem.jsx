import PropTypes from "prop-types";
const data = {
  imageSrc:
    "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=450",
  name: "Schezwan Margherita",
  description:
    "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
  sizes: [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ],
  price: 542,
};
function PizzaCardItem({ handleButtonClick }) {
  return (
    <div
      className="list-item bg-white border rounded-md overflow-hidden hover:cursor-pointer"
      onClick={handleButtonClick}
    >
      <div className="list-item__image">
        <img src={data.imageSrc} className="block w-full" alt="image" />
      </div>
      {/* <button className="absolute right-0 top-0 p-5 mt-2 mr-2 w-auto rounded-full text-11 border-grey-lighter text-black bg-white opacity-90 hover:opacity-100">
          <span>Customize</span>
        </button> */}
      <div className="typography-4 list-item__name flex-1 px-4 pt-4">
        {data.name}
        <span className="ml-2 inline-flex align-middle">
          <span className="flex font-light mr-2">
            <i className="icon-veg-india style-Irxjn"></i>
          </span>
        </span>
      </div>
      <p className="typography-6 list-item__desc flex-1 px-4">
        {data.description}
      </p>
      <div className="mt-auto">
        <div className="m-4">
          <div className="mb-4 relative">
            <label htmlFor="dropdown" className="items-center pr-2 pb-2">
              <span>Select your size & crust</span>
              <select
                id="dropdown"
                className="phdv-dropdown-select bg-grey-lightest p-2 w-full typography-6 bold my-1 border"
              >
                {data.sizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="button button--md button--green flex-1 font-semibold bg-mainAdditionalcolor-150 py-1 px-5 font-mono">
            <span>Add</span>
            <span className="w-auto ml-2">{data.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
PizzaCardItem.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};
export { PizzaCardItem };
