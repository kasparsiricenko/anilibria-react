import { useQuery } from "react-query";
import createQuery from "../utils/createQuery";
import React from "react";
import { APIS_BY_QUERY, QUERIES } from "../config";
import { tss } from "tss-react/mui";

const Releases = () => {
  const { cx, classes } = useStyles();
  const { isLoading, error, data } = useQuery(
    QUERIES.RELEASES,
    createQuery({ name: APIS_BY_QUERY[QUERIES.RELEASES] }),
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
            <h2 className={classes.title}>
              {russianName}/{originalName}
            </h2>{" "}
            <img
              src={`https://www.anilibria.tv/${release.poster}`}
              alt={`poster of ${originalName}`}
            />
            <p>{release.type}</p>
            <p>{release.series}</p>
            <p>{release.status}</p>
            <p>
              {release.season} {release.year}
            </p>
            <p>{release.genres.join(", ")}</p>
            <p>Голоса: {release.voices.join(", ")}</p>
            <p
              className={cx(classes.favorite, {
                [classes.favoriteActive]: release.favorite.added,
                [classes.favoriteInactive]: !release.favorite.added,
              })}
            >
              Favourite {release.favorite.rating}
            </p>
            <p className={classes.description}>{release.description}</p>
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
  title: {},
  favorite: {
    padding: theme.spacing(1),
    borderRadius: 4,
  },
  favoriteActive: {
    background:
      theme.palette.mode === "light"
        ? "rgb(200, 255, 200)"
        : "rgb(50, 200, 50)",
  },
  favoriteInactive: {
    background:
      theme.palette.mode === "light"
        ? "rgb(255, 200, 200)"
        : "rgb(200, 50, 50)",
  },
}));

export default Releases;
