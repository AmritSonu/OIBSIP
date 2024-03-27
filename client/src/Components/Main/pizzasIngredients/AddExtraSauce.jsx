import { useState } from "react";
import { Error } from "../../../../utils/Error";
import { useDispatch, useSelector } from "react-redux";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllSauceTypeQuery } from "../../../apis/ingredientsAPI";
import { setSauce, updateTotalPrice } from "../../../slices/orderSlice";

function AddExtraSauce() {
  const dispatch = useDispatch();
  const [selectedSauce, setSelectedSauce] = useState();
  const currentTotalPrice = useSelector((state) => state.order.totalPrice);
  const selectedSauces = useSelector((state) => state.order.sauce_name);
  const {
    data: extraSauce,
    isLoading: isExtraSauceLoading,
    error,
  } = useGetAllSauceTypeQuery();
  if (isExtraSauceLoading) return <MiniLoader />;
  if (error) return <Error />;

  function handleAddExtraSauce(sauceId, sauceName, saucePrice) {
    dispatch(setSauce(sauceName));
    setSelectedSauce(sauceId);
    dispatch(
      updateTotalPrice(currentTotalPrice - getSelectedSaucePrice() + saucePrice)
    );
  }
  function getSelectedSaucePrice() {
    return selectedSauces
      ? extraSauce.find((sauce) => sauce.name === selectedSauces)?.price || 0
      : 0;
  }
  return (
    <>
      <ul className="my-2">
        <div className="px-4 py-2">
          {extraSauce.map((sauce) => (
            <li
              key={sauce._id}
              onClick={() =>
                handleAddExtraSauce(sauce._id, sauce.name, sauce.price)
              }
              className={`flex justify-between items-center hover:cursor-pointer mb-3 ${
                sauce._id === selectedSauce ? "bg-yellow-100" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://www.pngkey.com/png/detail/308-3085628_pizza-clipart-pizza-sauce-cartoon-pizza-sauce.png"
                  className="w-10 h-10 object-cover rounded-full"
                  alt={`${sauce.name} icon`}
                />
                <span className="text-gray-700">{sauce.name}</span>
              </div>
              <div className="flex items-center gap-4 font-semibold text-gray-600">
                <span className="text-sm">₹{sauce.price}</span>
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
          ))}
        </div>
      </ul>
    </>
  );
}
export { AddExtraSauce };
