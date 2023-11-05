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
import { IntlProvider } from "react-intl";

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
}

const loadTranslatedMessages = async (locale) => {
  switch (locale) {
    case "ru":
    case "ru-RU":
      return import("./lang/ru.json");
    default:
      return import("./lang/en.json");
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Root = () => {
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

const bootstrapRoot = async () => {
  const locale = navigator.language;
  const messages = await loadTranslatedMessages(locale);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <IntlProvider locale={locale} messages={messages}>
        <Root />
      </IntlProvider>
    </React.StrictMode>,
  );
};

bootstrapRoot();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
