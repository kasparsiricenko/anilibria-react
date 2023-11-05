import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileView from "./views/ProfileView";
import SignUpView from "./views/SignUpView";
import SignInView from "./views/SignInView";
import MainView from "./views/MainView";
import { ThemeStateProvider } from "./contexts/useThemeState";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./contexts/useAuth";
import Header from "./components/Header";
import Footer from "./components/Footer";

if (process.env.NODE_ENV === "development") {
  console.log = () => {};
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeStateProvider>
            <React.Fragment>
              <CssBaseline enableColorScheme />
              <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/sign-in" element={<SignInView />} />
                <Route path="/sign-up" element={<SignUpView />} />
                <Route path="/profile" element={<ProfileView />} />
              </Routes>
            </React.Fragment>
          </ThemeStateProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
