import createQuery from "../utils/createQuery";

export default function getOrganization() {
  return createQuery("teams");
}
