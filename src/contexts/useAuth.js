import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
      if (
        location.pathname !== "/sign-in" &&
        location.pathname !== "/sign-up"
      ) {
        navigate("/sign-in");
      }
    }
    if (auth) {
      if (
        location.pathname === "/sign-in" ||
        location.pathname === "/sign-up"
      ) {
        navigate("/");
      }
    }
  }, [auth, location]);

  const value = React.useMemo(() => {
    return { auth, setAuth: (newAuth) => setAuth(newAuth) };
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return React.useContext(AuthContext);
}
