// PizzaInfoPageDialogBox.js
import PropTypes from "prop-types";

const PizzaInfoPageDialogBox = ({ isOpen, handleClose }) => {
  if (!isOpen) {
    return null; // Do not render the dialog if it's not open
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="overflow-auto">
            <h2 className="text-lg font-bold mb-2">Schezwan Margherita</h2>
            <p className="text-gray-700 mb-4">
              Your very own Margherita, now with a spicy twist! Loaded with our
              signature spicy schezwan sauce & 100% mozzarella cheese.
            </p>

            <div className="mb-4 overflow-auto">
              <h3 className="text-lg font-bold mb-2">Details:</h3>
              <span className="font-light">Vegetarian</span>
              <span className="ml-2 font-light">Mild</span>
            </div>

            <h3 className="text-lg font-bold mb-2">
              Select your size & crust:
            </h3>
            {/* overflow */}
            <div className="overflow-auto h-52">
              {/* items  */}
              <div className="mb-4">
                <div className="text-lg">
                  <p className="font-extralight">
                    Personal -{" "}
                    <span className="font-semibold text-gray-500">
                      Serves 1-2
                    </span>
                  </p>
                  <div className="border h-[3px] max-w-9 bg-gray-500"></div>
                </div>

                <div className="flex justify-between items-center ">
                  <div>
                    <h4>Pan</h4>
                    <p>
                      Original Pan crust. Crunchy on the outside, soft & fluffy
                      on the inside.
                    </p>
                  </div>
                  <span>- ₹199</span>
                </div>
                <p>
                  Stuffed Crust - Cheese Maxx - Cheese lovers paradise! Crust
                  stuffed with cheese & creamy Peruvian sauce - ₹274
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PizzaInfoPageDialogBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export { PizzaInfoPageDialogBox };
