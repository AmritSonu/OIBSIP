import { useState } from "react";
import { Error } from "../../../../utils/Error";
import { useDispatch, useSelector } from "react-redux";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllBaseTypeQuery } from "../../../apis/ingredientsAPI";
import { setCrust, updateTotalPrice } from "../../../slices/orderSlice";
const Crusts = () => {
  const dispatch = useDispatch();
  const [selectedCrust, setSelectedCrust] = useState(null);
  const newTotalPrice = useSelector((state) => state.order.totalPrice);
  const {
    data: crustTypes,
    isLoading: isCrustLoading,
    error,
  } = useGetAllBaseTypeQuery();

  if (isCrustLoading) return <MiniLoader />;
  if (error) return <Error />;

  const handleCrustSelection = (crustName, crustPrice) => {
    dispatch(setCrust(crustName));
    const totalPriceUpdate = newTotalPrice + crustPrice;
    dispatch(updateTotalPrice(totalPriceUpdate));
    setSelectedCrust(crustName);
  };

  return (
    <>
      {crustTypes.map((crust) => (
        <div
          onClick={() => handleCrustSelection(crust.name, crust.price)}
          key={crust._id}
          className={`flex justify-between items-center hover:cursor-pointer ${
            crust._id === selectedCrust ? "bg-yellow-100" : ""
          }`}
        >
          <div className="flex items-center justify-between gap-2 py-5 px-2">
            <img
              // src={crust.imageUrl}
              src="https://www.pizzahut.co.in/order/images/products/crust/pan.d81750fc207f75a79efc1db0b9be794a.png"
              alt={`pizza_crust_${crust.name}`}
              className="w-12 h-12"
            />
            <div className="mr-4">
              <span className="font-semibold text-gray-700">{crust.name}</span>
              <p className="text-sm font-semibold text-gray-500">
                {crust.description}
              </p>
            </div>
            <span className="font-semibold text-gray-500 text-lg">
              ₹{crust.price}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
export { Crusts };
