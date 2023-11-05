export const API_URL = "http://localhost:3000/public/api/index.php";
export const QUERIES = {
  RELEASES: "releases",
  ORGANIZATION: "organization",
};

export const APIS_BY_QUERY = {
  [QUERIES.RELEASES]: "list",
  [QUERIES.ORGANIZATION]: "teams",
};

export const ANILIBRIA_TITLE = "PROJECT A";

export const VIEWS = {
  MAIN: "main",
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
  PROFILE: "profile",
  RESET_PASSWORD: "reset-password",
};

export const TITLES = {
  [VIEWS.MAIN]: "",
  [VIEWS.SIGN_IN]: "Sign In",
  [VIEWS.SIGN_UP]: "Sign Up",
  [VIEWS.PROFILE]: "Profile",
  [VIEWS.RESET_PASSWORD]: "Reset Password",
};

export const PATHS = {
  [VIEWS.MAIN]: "/",
  [VIEWS.SIGN_IN]: "/sign-in",
  [VIEWS.SIGN_UP]: "/sign-up",
  [VIEWS.PROFILE]: "/profile",
  [VIEWS.RESET_PASSWORD]: "/reset-password",
};
