import { tss } from "tss-react/mui";

const SignUpView = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Sign Up</h1>
      <p className={classes.subtitle}>This is the sign up</p>
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

export default SignUpView;
