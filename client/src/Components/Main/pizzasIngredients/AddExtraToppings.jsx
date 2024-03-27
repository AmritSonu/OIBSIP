import { Error } from "../../../../utils/Error";
import { useDispatch, useSelector } from "react-redux";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllToppingQuery } from "../../../apis/ingredientsAPI";
import { addToppingName, removeToppingName } from "../../../slices/orderSlice";

function AddExtraToppings() {
  const dispatch = useDispatch();
  const selectedToppings = useSelector((state) => state.order.topping_names);
  const {
    data: extraToppings,
    isLoading: isextraToppingsLoading,
    error,
  } = useGetAllToppingQuery();

  if (isextraToppingsLoading) return <MiniLoader />;
  if (error) return <Error />;

  const handleAddExtraToppings = (topping_name, topping_price) => {
    if (selectedToppings.length < 4) {
      const toppingCount = selectedToppings.filter(
        (name) => name === topping_name
      ).length;
      if (toppingCount < 1) {
        dispatch(
          addToppingName({
            topping_name: topping_name,
            topping_price: topping_price,
          })
        );
      } else {
        console.log("You already selected this topping ");
      }
    }
  };

  const handleRemoveTopping = (topping_name, topping_price) => {
    dispatch(
      removeToppingName({
        topping_name: topping_name,
        topping_price: topping_price,
      })
    );
  };

  return (
    <>
      {extraToppings.map((topping) => (
        <div className="my-2 relative" key={topping._id}>
          <ul
            onClick={() => handleAddExtraToppings(topping.name, topping.price)}
            className={`px-4 py-2 ${
              selectedToppings.includes(topping.name) ? "bg-yellow-100" : ""
            }  `}
          >
            <li
              className={`flex justify-between items-center hover:cursor-pointer text-gray-700 ${
                selectedToppings.length === 4
                  ? "text-opacity-20 cursor-not-allowed"
                  : ""
              }
                  ${
                    selectedToppings.includes(topping.name)
                      ? "text-opacity-95 font-semibold"
                      : ""
                  }
                  `}
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://us.123rf.com/450wm/prettyvectors/prettyvectors2304/prettyvectors230400004/201542383-sweet-pepper-bell-slice-paprika-chopped-concept-vector-graphic-design-illustration.jpg?ver=6"
                  className="w-10 h-10 object-cover"
                  alt={`${topping.name} icon`}
                />
                <span>{topping.name}</span>
              </div>
              <div
                className={`flex items-center gap-4 font-semibold text-gray-600 ${
                  selectedToppings.length === 4
                    ? "text-opacity-20 cursor-not-allowed"
                    : ""
                } 
                  ${
                    selectedToppings.includes(topping.name)
                      ? "text-opacity-95 font-semibold"
                      : ""
                  }`}
              >
                <span className="text-sm">₹{topping.price}</span>
              </div>
            </li>
          </ul>
          {selectedToppings.includes(topping.name) && (
            <button
              className="bg-gray-400 rounded-full font-thin absolute top-5 -right-6"
              onClick={() => handleRemoveTopping(topping.name, topping.price)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      ))}
    </>
  );
}
export { AddExtraToppings };
