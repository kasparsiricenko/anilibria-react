import { tss } from "tss-react/mui";
import { VIEWS } from "../config";
import usePageTitle from "../hooks/usePageTitle";

const ProfileView = () => {
  const { classes } = useStyles();
  usePageTitle(VIEWS.PROFILE);

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Profile</h1>
      <p className={classes.subtitle}>This is the profile page</p>
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
  subtitle: {
    color: "blue",
  },
}));

export default ProfileView;
