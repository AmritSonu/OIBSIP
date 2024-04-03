import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import axios from "axios";
import { useCart } from "../../ContextAPIs/useCartContext";
import { useLogoutMutation } from "../../apis/authAPI";
import { useAuth } from "../../ContextAPIs/useAuthContext";

function NavBar() {
  const [{ data, isLoading }] = useLogoutMutation();
  const { logout } = useAuth();
  axios.defaults.withCredentials = true;
  const { cart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);

  if (isLoading) {
    console.log("isLoading...");
  }
  if (data) {
    console.log(data);
  }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/app/logout", {
        withCredentials: true,
      });
      console.log(res);
      logout();
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
  return (
    <nav className="bg-white py-4 px-10">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "transition duration-300 bg-mainAdditionalcolor-150 rounded-full relative"
                : "border rounded-full relative"
            }
            to="pizzas/basket"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-8 h-8 p-[3px] text-gray-700 hover:text-white transition duration-300"
            >
              <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
            <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 flex items-center justify-center rounded-full bg-gray-700 text-xs text-white">
              {cart && cart.length}
            </div>
          </NavLink>
          <div className="relative">
            <button type="button" onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <NavLink
                  to="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Orders
                </NavLink>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
