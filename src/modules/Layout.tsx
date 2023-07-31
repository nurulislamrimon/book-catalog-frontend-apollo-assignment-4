import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = () => {
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
