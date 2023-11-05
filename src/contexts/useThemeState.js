import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF", // White color for primary
      contrastText: "#000000",
    },
    secondary: {
      main: "#333333", // Dark grey color for secondary
      contrastText: "#FFFFFF",
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: "var(--font-oswald)",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#333333", // Dark grey color for primary
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF", // White color for secondary
      contrastText: "#000000",
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: "var(--font-oswald)",
  },
});

const THEME_STATES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

const THEMES = {
  [THEME_STATES.LIGHT]: lightTheme,
  [THEME_STATES.DARK]: darkTheme,
};

const getTheme = (themeState, doesSystemPreferDark) => {
  switch (themeState) {
    case THEME_STATES.SYSTEM: {
      return doesSystemPreferDark
        ? THEMES[THEME_STATES.DARK]
        : THEMES[THEME_STATES.LIGHT];
    }
    case THEME_STATES.LIGHT: {
      return THEMES[THEME_STATES.LIGHT];
    }
    case THEME_STATES.DARK: {
      return THEMES[THEME_STATES.DARK];
    }
    default: {
      throw new Error("Unexpected theme state");
    }
  }
};
const getThemeState = () => {
  return localStorage.getItem("themeState") || THEME_STATES.SYSTEM;
};

const ThemeStateContext = React.createContext();

export const ThemeStateProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState(getThemeState);
  const doesSystemPreferDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [theme, setTheme] = React.useState(() =>
    getTheme(themeState, doesSystemPreferDark),
  );

  React.useEffect(() => {
    const newThemeState = getThemeState();
    setTheme(getTheme(newThemeState, doesSystemPreferDark));
  }, [doesSystemPreferDark]);

  React.useEffect(() => {
    localStorage.setItem("themeState", themeState);
  }, [themeState]);

  console.log({ themeState, theme: theme.palette.mode });

  const value = React.useMemo(
    () => ({ themeState, setThemeState }),
    [themeState],
  );

  return (
    <ThemeStateContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeStateContext.Provider>
  );
};

export function useThemeState() {
  return React.useContext(ThemeStateContext);
}
