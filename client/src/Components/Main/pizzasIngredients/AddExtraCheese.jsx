// AddExtraCheese.js
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../../utils/Error";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllCheeseTypeQuery } from "../../../apis/ingredientsAPI";
import { setCheeseId, updateTotalPrice } from "../../../slices/orderSlice";

function AddExtraCheese() {
  const currentTotalPrice = useSelector((state) => state.order.totalPrice);
  const selectedCheeseId = useSelector((state) => state.order.cheeseId);

  const dispatch = useDispatch();
  const {
    data: extraCheese,
    isLoading: isCheeseLoading,
    error,
  } = useGetAllCheeseTypeQuery();

  if (isCheeseLoading) return <MiniLoader />;
  if (error) return <Error />;

  function handleSelectCheese(newCheeseId, newCheesePrice) {
    dispatch(setCheeseId(newCheeseId));
    dispatch(
      updateTotalPrice(
        currentTotalPrice - getSelectedCheesePrice() + newCheesePrice
      )
    );
  }

  function getSelectedCheesePrice() {
    // Return 0 if no cheese is selected, otherwise return the price of the selected cheese
    return selectedCheeseId
      ? extraCheese.find((cheese) => cheese._id === selectedCheeseId)?.price ||
          0
      : 0;
  }

  return (
    <ul className="pt-3">
      {extraCheese.map((option) => (
        <li
          key={option._id}
          className="flex justify-between items-center px-4 py-1.5"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id={`extraCheeseOption${option.id}`}
              name="extraCheese"
              value={option.id}
              onChange={() => handleSelectCheese(option._id, option.price)}
              checked={option._id === selectedCheeseId}
            />
            <span className="text-gray-700 font-semibold">{option.name}</span>
          </label>
          <span className="font-semibold text-gray-600 text-sm">
            + ₹{option.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

export { AddExtraCheese };
