import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.config";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  const navs = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/profile",
      text: "Profile",
    },
    {
      path: "/allbooks",
      text: "All",
    },
  ];
  user ||
    navs.push(
      {
        path: "/login",
        text: "Login",
      },
      {
        path: "/signup",
        text: "Signup",
      }
    );
  return (
    <div className="nav-container">
      <h3 className="main-logo">Book Catalog</h3>
      <nav className="menu">
        {navs.map(({ path, text }, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-menu" : ""
            }
          >
            {text}
          </NavLink>
        ))}
        {user && (
          <button
            onClick={() => {
              signOut(auth);
            }}
          >
            Log out
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
