import pizzaholder from "../images/pizza_placeholder.png";
export function PizzaSkeleton() {
  return (
    <>
      <div className="flex flex-col shadow rounded-md animate-pulse px-4">
        {/* Replace the image with a skeleton loader */}
        <img
          src={pizzaholder}
          className="w-full h-40 bg-gray-300 object-contain"
        />
        {/* Skeleton loader for the pizza name */}
        <div className="w-2/3 h-8 my-4 ml-4 bg-gray-200"></div>
        <span className="ml-2 my-3 align-middle bg-gray-200 h-24 p-4"></span>
        {/* Skeleton loader for the description */}
        <div className="w-full h-4 bg-gray-200 my-2"></div>
        <div className="w-full h-8 bg-gray-200 my-2"></div>
        <button className=" w-5 p-4 bg-gray-200 my-3"></button>
      </div>
    </>
  );
}

export function OrderSkeleton() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between mt-10">
        <div className="flex w-9/12 justify-center items-center text-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse sm:w-24 sm:h-24"></div>
          <div className="w-3/12 bg-gray-300 h-4 animate-pulse sm:w-24 sm:h-4"></div>
          <div className="w-3/12 bg-gray-300 h-4 animate-pulse sm:w-24 sm:h-4"></div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2">
        <div className="w-3/12 bg-gray-300 h-4 animate-pulse sm:w-24 sm:h-4"></div>
        <div className="w-3/12 bg-gray-300 h-4 animate-pulse sm:w-24 sm:h-4"></div>
      </div>
    </div>
  );
}
export function AdminOrdersSkeleton() {
  return (
    <div className="container mx-auto p-6 py-14 my-10">
      <h1 className="text-3xl font-bold mb-8">All Orders</h1>
      <div className="max-w-3xl mx-auto">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="mb-6 border rounded-lg bg-gray-200 shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="w-2/3 h-8 bg-gray-400 animate-pulse"></h2>
              <span className="w-1/3 h-8 bg-gray-400 animate-pulse"></span>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-1/4 h-6 bg-gray-400 animate-pulse mr-4"></span>
              <span className="w-1/4 h-6 bg-gray-400 animate-pulse mr-4"></span>
              <span className="w-1/4 h-6 bg-gray-400 animate-pulse"></span>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-1/4 h-6 bg-gray-400 animate-pulse mr-4"></span>
              <span className="w-1/4 h-6 bg-gray-400 animate-pulse"></span>
            </div>
            <div className="flex items-center justify-between">
              <span className="w-1/3 h-6 bg-gray-400 animate-pulse mr-4"></span>
              <span className="w-1/3 h-6 bg-gray-400 animate-pulse mr-4"></span>
              <span className="w-1/3 h-6 bg-gray-400 animate-pulse"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
