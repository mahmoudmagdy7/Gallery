import { Navigate } from "react-router-dom";

export default function AdminProtection({ children }) {
  if (localStorage.getItem("admin_token") !== null) {
    {
      return children;
    }
  } else {
    return <Navigate to={"/auth/login"} replace />;
  }
}
