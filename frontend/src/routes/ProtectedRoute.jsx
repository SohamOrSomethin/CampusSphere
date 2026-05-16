import { Navigate }
  from "react-router-dom";

import useAuth
  from "../hooks/useAuth";

export default function ProtectedRoute({
  children,
}) {

  const {
    isAuthenticated,
    isLoading,
  } = useAuth();

  if (isLoading) {

    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}