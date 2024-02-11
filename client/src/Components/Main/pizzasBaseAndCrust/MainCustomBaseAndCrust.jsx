import { BaseAndCrusts } from "./BaseAndCrusts";

function PizzaCustomBaseAndCrust() {
  return (
    <div className="overflow-auto h-52">
      <h3 className="text-lg font-bold mb-2">Select your size & crust:</h3>
      <div className="mb-4">
        <div className="text-lg">
          <p className="font-extralight">
            Personal -{" "}
            <span className="font-semibold text-gray-500">Serves 1-2</span>
          </p>
          <div className="border h-[3px] max-w-9 bg-gray-500"></div>
        </div>
        <BaseAndCrusts />
      </div>
    </div>
  );
}
export { PizzaCustomBaseAndCrust };
