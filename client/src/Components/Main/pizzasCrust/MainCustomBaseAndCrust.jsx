import { Crusts } from "./Crusts";
function PizzaCustomCrust() {
  return (
    <div className="overflow-auto h-52">
      <h3 className="text-lg font-bold mb-2">Select your Crust :</h3>
      <div className="mb-4">
        <div className="text-lg">
          <div className="border h-[3px] max-w-9 bg-gray-500"></div>
        </div>
        <Crusts />
      </div>
    </div>
  );
}
export { PizzaCustomCrust };
