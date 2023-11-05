import { tss } from "tss-react/mui";
import Organization from "../components/Organization";
import Releases from "../components/Releases";
import usePageTitle from "../hooks/usePageTitle";
import { TITLES, VIEWS } from "../config";

const MainView = () => {
  const { classes } = useStyles();
  usePageTitle(TITLES[VIEWS.MAIN]);

  return (
    <main className={classes.root}>
      <Organization />
      <Releases />
    </main>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 0 0px",
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    color: "red",
  },
}));

export default MainView;
