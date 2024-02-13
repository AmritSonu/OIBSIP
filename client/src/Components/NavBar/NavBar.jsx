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
            to="/signUp"
          >
            SignUp
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "transition duration-300 bg-mainAdditionalcolor-150 rounded-full"
                : "border rounded-full "
            }
            to="pizzas/basket"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-8 h-8 p-[3px]"
            >
              <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
