// import { useGetAllPizzasQuery } from "../../../apis/pizzasAPI";
// import { useGetPizzasQuery } from "../../../apis/pizzasAPI";
import { PizzaBox } from "./PizzaBox";
function ItemsPage() {
 
  return (
    <>
      <div className="flex items-center gap-6 justify-center my-4">
        <div className="w-40 h-[2px] bg-gray-200"></div>
        <h1 className="font-mono font-bold text-lg text-mainAdditionalcolor-150">
          ItemsPage
        </h1>
        <div className="w-40 h-[2px] bg-gray-200"></div>
      </div>
      {/*  */}
      <div className="border w-11/12 mx-auto">
        <PizzaBox />
      </div>
    </>
  );
}

export { ItemsPage };
