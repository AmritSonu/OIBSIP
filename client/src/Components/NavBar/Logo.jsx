import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center">
      <div className="text-red-600 text-4xl">🍕</div>
      <h1 className="text-2xl font-extrabold ml-2 text-gray-800 tracking-wide">
        <NavLink to="/pizzas" className="font-mono">
          PizzaGrand
        </NavLink>
      </h1>
    </div>
  );
}

export { Logo };
