import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export { Layout };
