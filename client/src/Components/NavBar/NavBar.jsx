import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

function NavBar() {
  return (
    <nav className="bg-white py-4 px-10">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex items-center space-x-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-mainColor-400 transition duration-300 font-bold"
                : "border-b-2 border-white font-semibold"
            }
            to="/SignUp"
          >
            SignUp
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-mainColor-400 transition duration-300 font-bold"
                : "border-b-2 border-white font-semibold"
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
