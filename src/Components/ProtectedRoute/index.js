import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const ProtectedRoute = (props) => {
  const token = Cookies.get("jwt");
  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  //   console.log(props)
  return <Outlet />;
};

export default ProtectedRoute;
