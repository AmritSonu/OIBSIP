import { useState } from "react";
import { useDispatch } from "react-redux";
import { Error } from "../../../../utils/Error";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllBaseTypeQuery } from "../../../apis/ingredientsAPI";
import { setCrustId } from "../../../slices/orderSlice";
const Crusts = () => {
  const [selectedCrust, setSelectedCrust] = useState(null);
  const dispatch = useDispatch();
  const {
    data: crustTypes,
    isLoading: isCrustLoading,
    error,
  } = useGetAllBaseTypeQuery();

  // Handling Crust Selection by Customer...
  const handleCrustSelection = (crustId) => {
    dispatch(setCrustId(crustId));
    setSelectedCrust(crustId);
  };

  // Handling API Error And Loading....
  if (isCrustLoading) return <MiniLoader />;
  if (error) return <Error />;

  return (
    <>
      {crustTypes.map((crust) => (
        <div
          onClick={() => handleCrustSelection(crust._id)}
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
