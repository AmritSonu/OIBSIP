import { useGetAllBaseTypeQuery } from "../../../apis/ingredientsAPI";

const Crusts = () => {
  const {
    data: crustTypes,
    isLoading: isCrustLoading,
    error,
  } = useGetAllBaseTypeQuery();

  if (isCrustLoading) return <h1>Loading...</h1>;
  console.log(crustTypes);
  if (error) return <h1>Something went wrong.</h1>;
  return (
    <>
      {crustTypes.map((crust) => (
        <div
          key={crust._id}
          className="flex justify-between items-center hover:cursor-pointer"
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
