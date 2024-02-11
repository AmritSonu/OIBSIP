import { AddExtraCheese } from "./AddExtraCheese";
import { AddExtraSauce } from "./AddExtraSauce";
import { AddExtraToppings } from "./AddExtraToppings";
import { IncludedToppings } from "./IncludedToppings";
function MainPizzasIngredients() {
  return (
    <>
      <div className="overflow-auto h-48">
        <div className="border w-11/12">
          <h2 className="bg-slate-800 font-bold py-3 pl-5 text-lg text-white">
            Change your toppings
          </h2>
          <IncludedToppings />

          <h2 className="bg-slate-800 font-bold py-3 pl-5 text-lg text-white">
            Add Extra Toppings
          </h2>
          <AddExtraToppings />

          <h2 className="bg-slate-800 font-bold py-3 pl-5 text-lg text-white">
            Choice Extra Cheese type
          </h2>
          <AddExtraCheese />

          <h2 className="bg-slate-800 font-bold py-3 pl-5 text-lg text-white">
            Choice Extra Sauce Types
          </h2>
          <AddExtraSauce />
        </div>
      </div>

      <div className="font-bold mx-auto max-w-32 mt-2">
        <button className="bg-green-600 p-2 text-gray-100 hover:bg-green-700 rounded-sm">
          Add to Basket (₹ 432)
        </button>
      </div>
    </>
  );
}
export { MainPizzasIngredients };
