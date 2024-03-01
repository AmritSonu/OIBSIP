// AddExtraToppings.js
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../../utils/Error";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllToppingQuery } from "../../../apis/ingredientsAPI";
import { addToppingId, removeToppingId } from "../../../slices/orderSlice";

function AddExtraToppings() {
  const selectedToppings = useSelector((state) => state.order.toppingIds);
  const dispatch = useDispatch();

  const {
    data: extraToppings,
    isLoading: isextraToppingsLoading,
    error,
  } = useGetAllToppingQuery();

  const handleAddExtraToppings = (topping) => {
    const toppingCount = selectedToppings.filter(
      (id) => id === topping._id
    ).length;

    if (toppingCount < 1) {
      dispatch(
        addToppingId({
          id: topping._id,
          price: topping.price,
          name: topping.name,
        })
      );
    } else {
      console.log("You already selected this topping ");
    }
  };

  const handleRemoveTopping = (toppingId) => {
    dispatch(removeToppingId(toppingId));
  };

  if (isextraToppingsLoading) return <MiniLoader />;
  if (error) return <Error />;

  return (
    <>
      {extraToppings.map((topping) => (
        <div className="my-2 relative" key={topping._id}>
          <ul
            onClick={() => handleAddExtraToppings(topping)}
            className={`px-4 py-2 ${
              selectedToppings.includes(topping._id) ? "bg-yellow-100" : ""
            }  `}
          >
            <li
              className={`flex justify-between items-center hover:cursor-pointer text-gray-700 ${
                selectedToppings.length === 4
                  ? "text-opacity-20 cursor-not-allowed"
                  : ""
              }
                  ${
                    selectedToppings.includes(topping._id)
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
                    selectedToppings.includes(topping._id)
                      ? "text-opacity-95 font-semibold"
                      : ""
                  }`}
              >
                <span className="text-sm">₹{topping.price}</span>
              </div>
            </li>
          </ul>
          {selectedToppings.includes(topping._id) && (
            <button
              className="bg-gray-400 rounded-full font-thin absolute top-5 -right-6"
              onClick={() => handleRemoveTopping(topping._id)}
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
