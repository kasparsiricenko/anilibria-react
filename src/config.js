export const API_URL = "http://localhost:3000/public/api/index.php";
export const QUERIES = {
  RELEASES: "releases",
  ORGANIZATION: "organization",
};

export const APIS_BY_QUERY = {
  [QUERIES.RELEASES]: "list",
  [QUERIES.ORGANIZATION]: "teams",
};
