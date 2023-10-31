import { tss } from "tss-react/mui";

const SignInView = () => {
  const { classes } = useStyles();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Sign In</h1>
      <p className={classes.subtitle}>This is the sign in </p>
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

export default SignInView;
