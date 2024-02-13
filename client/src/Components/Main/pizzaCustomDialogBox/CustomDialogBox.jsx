import PropTypes from "prop-types";
// import { PizzaCustomBaseAndCrust } from "./pizzasBaseAndCrust/MainCustomBaseAndCrust";
import { MainPizzasIngredients } from "../pizzasIngredients/MainPizzasIngredients";

const selectedPizzaDetails = {
  pizzaName: "Schezwan Margherita",
  description:
    "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
};
const CustomDialogBox = ({ isOpen, handleClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white  rounded-lg shadow-md max-w-4xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button
            className="absolute top-2 right-2 cursor-pointer p-1"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Left side with pizza image */}
          <div className="mb-4 md:mb-0">
            <img
              src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/mazedar-makhni-paneer.cb3150d2be9cb8dcd248be70921c5196.1.jpg?width=800"
              alt="Pizza"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right side with pizza information */}
          <div className="overflow-auto p-3 col-span-2 py-10 ">
            <h2 className="text-lg font-bold mb-2">
              {selectedPizzaDetails.pizzaName}
            </h2>
            <p className="text-gray-700 mb-4">
              {selectedPizzaDetails.description}
            </p>

            <div className="mb-4 overflow-auto">
              <h3 className="text-lg font-bold mb-2">Details :</h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#00A651"
                className="w-5 h-5 inline-block"
              >
                <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
              </svg>
              <span className="font-light ml-2">Vegetarian</span>
            </div>

            {/* <PizzaCustomBaseAndCrust /> */}
            <MainPizzasIngredients />
          </div>
        </div>
      </div>
    </div>
  );
};

CustomDialogBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export { CustomDialogBox };
