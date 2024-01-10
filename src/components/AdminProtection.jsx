import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function AdminProtection({ children }) {
  if (Cookies.get("admin_token")) {
    {
      return children;
    }
  } else {
    return <Navigate to={"/auth/login"} replace />;
  }
}
