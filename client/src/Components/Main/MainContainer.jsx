import { Outlet } from "react-router-dom";
import { ItemsPage } from "./pizzaCardItems/ItemsPage";
// import { PizzaSelectorBasket } from "./PizzaSelectorBasket";

// local backend URl = http://localhost:3000/demo
// backend URL = https://pizza-psi-two.vercel.app/demo

function MainContainer() {
  return (
    <div className="p-5">
      <ItemsPage />
      {/* <PizzaSelectorBasket /> */}
      <Outlet />
    </div>
  );
}

export { MainContainer };
