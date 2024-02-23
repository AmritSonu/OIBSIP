import { Error } from "../../../../utils/Error";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllToppingQuery } from "../../../apis/ingredientsAPI";
function AddExtraToppings() {
  const {
    data: extraToppings,
    isLoading: isextraToppingsLoading,
    error,
  } = useGetAllToppingQuery();
  if (isextraToppingsLoading) return <MiniLoader />;
  if (error) return <Error />;
  return (
    <ul className="my-2">
      {extraToppings.map((topping) => (
        <div className="px-4 py-2" key={topping._id}>
          <li className="flex justify-between items-center hover:cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                // src={topping.imageUrl}
                src="https://us.123rf.com/450wm/prettyvectors/prettyvectors2304/prettyvectors230400004/201542383-sweet-pepper-bell-slice-paprika-chopped-concept-vector-graphic-design-illustration.jpg?ver=6"
                className="w-10 h-10 object-cover"
                alt={`${topping.name} icon`}
              />
              <span className="text-gray-700">{topping.name}</span>
            </div>
            <div className="flex items-center gap-4 font-semibold text-gray-600">
              <span className="text-sm">₹{topping.price}</span>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="green"
                  className="w-6 h-6"
                >
                  <path strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}
export { AddExtraToppings };
