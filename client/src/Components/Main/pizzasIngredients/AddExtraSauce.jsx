import { Error } from "../../../../utils/Error";
import { MiniLoader } from "../../../../utils/MiniLoader";
import { useGetAllSauceTypeQuery } from "../../../apis/ingredientsAPI";

function AddExtraSauce() {
  const {
    data: extraSauce,
    isLoading: isextraSauceLoading,
    error,
  } = useGetAllSauceTypeQuery();

  if (isextraSauceLoading) return <MiniLoader />;
  if (error) return <Error />;
  return (
    <>
      <ul className="my-2">
        <div className="px-4 py-2">
          {extraSauce.map((sauce) => (
            <li
              key={sauce._id}
              className="flex justify-between items-center hover:cursor-pointer mb-3"
            >
              <div className="flex items-center gap-2">
                <img
                  // src={sauce.imageUrl}
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