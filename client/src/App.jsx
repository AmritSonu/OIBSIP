import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { MainContainer } from "./Components/Main/MainContainer";
import { NotFound } from "./Components/NotFound";
import { PizzaSelectorBasket } from "./Components/Main/PizzasBasket";
import { Signup } from "./Components/userAuth/Signup";
import { MainCheckout } from "./Components/checkoutpages/MainCheckout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="checkout" element={<MainCheckout />} />
          <Route path="/pizzas/:id?" element={<MainContainer />}>
            <Route path="basket" element={<PizzaSelectorBasket />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
