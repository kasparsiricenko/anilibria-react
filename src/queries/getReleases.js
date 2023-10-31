import createQuery from "../utils/createQuery";

export default function getReleases() {
  return createQuery("list");
}
