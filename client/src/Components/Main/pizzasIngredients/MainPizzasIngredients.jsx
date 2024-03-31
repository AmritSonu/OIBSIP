import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddExtraCheese } from "./AddExtraCheese";
import { AddExtraSauce } from "./AddExtraSauce";
import { AddExtraToppings } from "./AddExtraToppings";
import {
  resetOrder,
  selectOrder,
  totalPizzaPrice,
} from "../../../slices/orderSlice";
import { useCart } from "../../../ContextAPIs/useCartContext";
function MainPizzasIngredients() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const selectedOrder = useSelector(selectOrder);
  const orderPrice = useSelector(totalPizzaPrice);
  const { addToCart } = useCart();

  function handleBasketBtn(e) {
    e.preventDefault();
    const {
      _id: pizzaId,
      PizzaName,
      crust_name,
      cheese_name,
      sauce_name,
      topping_names,
      totalPrice,
      pizzaSize,
    } = selectedOrder;

    const order = {
      _id: pizzaId,
      PizzaName: PizzaName,
      customizations: {
        crust_name: crust_name,
        cheese_name: cheese_name,
        sauce_name: sauce_name,
        topping_names: topping_names,
      },
      pizzaSize: pizzaSize,
      totalPrice: totalPrice,
    };
    console.log(order);
    addToCart(order);
    navigate(-1);
    dispatch(resetOrder());
  }

  return (
    <>
      <div className="overflow-auto h-48">
        <div className="border w-11/12">
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
        <button
          className="bg-green-600 p-2 text-gray-100 hover:bg-green-700 rounded-sm"
          onClick={handleBasketBtn}
        >
          Add to Basket (₹ {orderPrice})
        </button>
      </div>
    </>
  );
}
export { MainPizzasIngredients };
