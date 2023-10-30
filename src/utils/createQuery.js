import { API_URL } from "../config";

export default function createQuery({ name, params = {} } = {}) {
  return () => {
    const formData = new FormData();

    formData.append("query", name);

    Object.entries(params).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return fetch(API_URL, {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((res) => res.json())
      .then((json) => json.data);
  };
}
