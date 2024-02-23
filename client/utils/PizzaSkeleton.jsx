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
