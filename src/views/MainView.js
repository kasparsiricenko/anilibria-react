import { tss } from "tss-react/mui";
import Organization from "../components/Organization";
import Releases from "../components/Releases";

const MainView = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Main</h1>
      <Organization />
      <Releases />
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
  title: {
    color: "red",
  },
}));

export default MainView;
