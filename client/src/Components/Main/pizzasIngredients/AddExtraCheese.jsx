import { Error } from "../../../../utils/Error";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllCheeseTypeQuery } from "../../../apis/ingredientsAPI";
function AddExtraCheese() {
  const {
    data: extraCheese,
    isLoading: isCheeseLoading,
    error,
  } = useGetAllCheeseTypeQuery();
  if (isCheeseLoading) return <MiniLoader />;
  if (error) return <Error />;

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
