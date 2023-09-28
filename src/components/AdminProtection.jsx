import { Navigate } from "react-router-dom";

export default function AdminProtection({ children }) {
  if (false) {
    {
      return children;
    }
  } else {
    return <Navigate to={"/auth/login"} replace />;
  }
}
