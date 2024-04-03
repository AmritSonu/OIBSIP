import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./heropage/Layout";
import { MainContainer } from "./Components/Main/MainContainer";
import { NotFound } from "./Components/NotFound";
import { PizzaSelectorBasket } from "./Components/Main/pizzabasket/PizzasBasket";
import { Signup } from "./Components/userAuth/Signup";
import { MainCheckout } from "./Components/checkoutpages/MainCheckout";
import { MainAdmin } from "./AdminComponents/admin/MainAdmin";
import { Orders } from "./AdminComponents/orders/AllOrders";
import { Ingredients } from "./AdminComponents/ingredients/Ingredients";
import { AddPizza } from "./AdminComponents/pizzas/AddPizza";
import { EditPizza } from "./AdminComponents/pizzas/Editpizza";
import { PizzaStatistics } from "./AdminComponents/pizzaStatistics/PizzaStatistics";
import { HeroPage } from "./heropage/HeroPage";
import { CartProvider } from "./ContextAPIs/CartContext";
import { PaymentSuccess } from "./payments/PaymentSuccess";
import { Login } from "./Components/userAuth/Login";
import { CustomerOrderHistory } from "./Components/userAuth/authorders/CustomerOrderHistory";
import { CustomerOrderPreview } from "./Components/userAuth/authorders/CustomerOrderPreview";
import { CustomerOrderLayout } from "./Components/userAuth/authorders/CustomerOrderLayout";
import { AuthProvider } from "./ContextAPIs/AuthContext";
import { ProtectedRoutes } from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<ProtectedRoutes Component={Layout} />}>
              <Route index element={<HeroPage />} />
              <Route path="/pizzas/:id?" element={<MainContainer />}>
                <Route path="basket" element={<PizzaSelectorBasket />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route
              path="/admin"
              element={<ProtectedRoutes Component={MainAdmin} />}
            >
              <Route index element={<PizzaStatistics />} />
              <Route path="orders" element={<Orders />} />
              <Route path="ingredients" element={<Ingredients />} />
              <Route path="add-pizza" element={<AddPizza />} />
              <Route path="edit-pizza" element={<EditPizza />} />
            </Route>
            <Route
              path="/paymentSuccess/:id"
              element={<ProtectedRoutes Component={PaymentSuccess} />}
            />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route
              path="checkout"
              element={<ProtectedRoutes Component={MainCheckout} />}
            />
            <Route
              path="orders"
              element={<ProtectedRoutes Component={CustomerOrderLayout} />}
            >
              <Route path="" element={<CustomerOrderHistory />} />
              <Route path="prev/:id" element={<CustomerOrderPreview />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
