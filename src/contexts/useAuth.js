import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NO_AUTH_PATHS } from "../config";

const AuthContext = React.createContext();

const getAuth = () => {
  const auth = localStorage.getItem("auth");
  if (!auth) return null;
  return JSON.parse(auth) === true;
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(getAuth());
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (auth !== getAuth()) {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth]);

  React.useEffect(() => {
    console.log(location);
    if (!auth) {
      if (!NO_AUTH_PATHS.includes(location.pathname)) {
        navigate("/sign-in");
      }
    }
    if (auth) {
      if (NO_AUTH_PATHS.includes(location.pathname)) {
        navigate("/");
      }
    }
  }, [auth, location, navigate]);

  const value = React.useMemo(() => {
    return { auth, setAuth: (newAuth) => setAuth(newAuth) };
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return React.useContext(AuthContext);
}
