import React from "react";
import "./App.css";

import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("teams", () => {
    const formData = new FormData();
    formData.append("query", "teams");
    return fetch("http://localhost:3000/public/api/index.php", {
      method: "POST",
      body: new URLSearchParams(formData),
    }).then((res) => res.json());
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      Anilibria Unofficial Web Alternative Application
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
