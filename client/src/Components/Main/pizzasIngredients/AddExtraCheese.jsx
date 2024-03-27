import { Error } from "../../../../utils/Error";
import { useDispatch, useSelector } from "react-redux";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllCheeseTypeQuery } from "../../../apis/ingredientsAPI";
import { setCheese, updateTotalPrice } from "../../../slices/orderSlice";
function AddExtraCheese() {
  const dispatch = useDispatch();
  const currentTotalPrice = useSelector((state) => state.order.totalPrice);
  const selectedCheese = useSelector((state) => state.order.cheese_name);
  const {
    data: extraCheese,
    isLoading: isCheeseLoading,
    error,
  } = useGetAllCheeseTypeQuery();

  if (isCheeseLoading) return <MiniLoader />;
  if (error) return <Error />;

  function handleSelectCheese(newCheeseName, newCheesePrice) {
    dispatch(setCheese(newCheeseName));
    dispatch(
      updateTotalPrice(
        currentTotalPrice - getSelectedCheesePrice() + newCheesePrice
      )
    );
  }
  
  function getSelectedCheesePrice() {
    return selectedCheese
      ? extraCheese.find((cheese) => cheese.name === selectedCheese)?.price || 0
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
              onChange={() => handleSelectCheese(option.name, option.price)}
              checked={option.name === selectedCheese}
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
