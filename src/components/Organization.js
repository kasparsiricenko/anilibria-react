import { useQuery } from "react-query";
import createQuery from "../utils/createQuery";
import React from "react";
import { APIS_BY_QUERY, QUERIES } from "../config";
import { tss } from "tss-react/mui";

const Organization = () => {
  const { classes } = useStyles();
  const {
    isLoading,
    error,
    data: organization,
  } = useQuery(
    QUERIES.ORGANIZATION,
    createQuery({ name: APIS_BY_QUERY[QUERIES.ORGANIZATION] }),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(organization);

  return (
    <div className={classes.root}>
      {organization.teams.map((team, index) => (
        <React.Fragment key={index}>
          <h2>{team.title}</h2>
          <p>{team.description}</p>
          <div>
            {team.users.map((user, userIndex) => {
              return (
                <p key={userIndex}>
                  <span>{user.nickname}</span>
                  <span> - </span>
                  <span>{user.roles.map((role) => role.title).join(", ")}</span>
                </p>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default Organization;
