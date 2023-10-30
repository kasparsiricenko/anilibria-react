import React from "react";
import "./App.css";

import { useQuery } from "react-query";
import createQuery from "./utils/createQuery";

function App() {
  const {
    isLoading,
    error,
    data: organization,
  } = useQuery("getOrganization", createQuery({ name: "teams" }));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      {organization.teams.map((team) => (
        <>
          <h2>{team.title}</h2>
          <p>{team.description}</p>
          <div>
            {team.users.map((user) => {
              return (
                <p>
                  <span>{user.nickname}</span>
                  <span> - </span>
                  <span>{user.roles.map((role) => role.title).join(", ")}</span>
                </p>
              );
            })}
          </div>
        </>
      ))}
      ;
    </div>
  );
}

export default App;
