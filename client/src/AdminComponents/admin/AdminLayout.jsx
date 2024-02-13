import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white min-w-64 p-4 ">
        <div className="my-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "transition duration-300 font-bold text-4xl border-2 text-mainAdditionalcolor-150 rounded-full p-2"
                : "font-semibold"
            }
            to="/admin"
          >
            Pizza Admin
          </NavLink>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "transition duration-300 font-bold text-mainAdditionalcolor-150"
                    : "font-semibold"
                }
                to="/admin/orders"
              >
                Orders
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/ingredients"
                className={({ isActive }) =>
                  isActive
                    ? "transition duration-300 font-bold text-mainAdditionalcolor-150"
                    : "font-semibold"
                }
              >
                Ingredients
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/add-pizza"
                className={({ isActive }) =>
                  isActive
                    ? "transition duration-300 font-bold text-mainAdditionalcolor-150"
                    : "font-semibold"
                }
              >
                Add Pizza
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/edit-pizza"
                className={({ isActive }) =>
                  isActive
                    ? "transition duration-300 font-bold text-mainAdditionalcolor-150"
                    : "font-semibold"
                }
              >
                Edit Pizza
              </NavLink>
            </li>
            {/* Add more routes as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Your content goes here */}
        <Outlet />
      </div>
    </div>
  );
}
export { AdminLayout };
