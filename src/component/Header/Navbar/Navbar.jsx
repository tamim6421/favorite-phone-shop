import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between px-8 py-6 shadow-lg">
        <h1 className="text-3xl font-bold text-green-300"> PhoneShop</h1>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
              }
            >
              Login
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
