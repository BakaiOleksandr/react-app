
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4 w-48 hidden md:block">
      <h2 className="font-bold mb-4 text-gray-700">Navigation</h2>
      <ul className="flex flex-col gap-2">
        {[
          { path: "/", label: "Home" },
          { path: "/create", label: "Create Apartment" },
          { path: "/apartments/1", label: "Sample Apartment" },
          { path: "/edit/1", label: "Edit Apartment" },
        ].map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-500 px-3 py-1 rounded block"
                  : "text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-1 rounded block"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
