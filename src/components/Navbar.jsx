
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏠 Apartments App</h1>
      <div className="hidden md:flex gap-4">
        {["/", "/create", "/apartments/1", "/edit/1"].map((path, i) => {
          const names = ["Home", "Create", "Sample Apartment", "Edit"];
          return (
            <NavLink
              key={i}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-blue-600 px-3 py-1 rounded font-semibold"
                  : "hover:bg-blue-400 hover:text-white px-3 py-1 rounded"
              }
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
