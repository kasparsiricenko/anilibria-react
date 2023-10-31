import { useQuery } from "react-query";
import createQuery from "../utils/createQuery";
import React from "react";
import { APIS_BY_QUERY, QUERIES } from "../config";
import { tss } from "tss-react/mui";

const Releases = () => {
  const { cx, classes } = useStyles();
  const { isLoading, error, data } = useQuery(
    QUERIES.RELEASES,
    createQuery({ name: APIS_BY_QUERY[QUERIES.RELEASES] })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const { pagination, items: releases } = data;
  console.log(pagination);
  console.log(releases);

  return (
    <div className={classes.root}>
      {releases.map((release) => {
        const [russianName, originalName] = release.names;
        return (
          <React.Fragment key={release.id}>
            <h2>
              {russianName}/{originalName}
            </h2>
            <p
              className={cx({
                [classes.favoriteActive]: release.favorite.added,
                [classes.favoriteInactive]: !release.favorite.added,
              })}
            >
              Favourite {release.favorite.rating}
            </p>
          </React.Fragment>
        );
      })}
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
  favoriteActive: {
    background: "rgb(200, 255, 200)",
  },
  favoriteInactive: {
    background: "rgb(255, 200, 200)",
  },
}));

export default Releases;
