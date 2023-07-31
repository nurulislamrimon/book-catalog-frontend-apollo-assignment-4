import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase.config";
import { useAppDispatch } from "../redux/hooks";
import { setLoading, setUser } from "../redux/slices/user.slice";

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (loggedUser) => {
      dispatch(setUser(loggedUser));
    });
    dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-24"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
