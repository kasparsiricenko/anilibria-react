import { Button, Link as MuiLink, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { tss } from "tss-react/mui";
import useAuth from "../contexts/useAuth";
import { TITLES, VIEWS } from "../config";
import usePageTitle from "../hooks/usePageTitle";

const ResetPassword = () => {
  const { classes, cx } = useStyles();
  const { setAuth } = useAuth();
  usePageTitle(VIEWS.RESET_PASSWORD);

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Sign in data:", formData);
      setAuth(true);
    }
  };
  return (
    <main className={classes.root}>
      <h1 className={classes.title}>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          className={classes.field}
          inputProps={{ className: classes.fieldInput }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Continue
        </Button>
      </form>
    </main>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: "1 0 0px",
    padding: theme.spacing(0, 2.5),
  },
  header: {
    height: theme.typography.pxToRem(44),
  },
  title: {
    fontFamily: "var(--font-oswald)",
  },
  paragraph: {
    margin: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  field: {
    marginTop: theme.spacing(2),
  },
  fieldInput: {
    background: "#191919",
  },
  button: {
    textTransform: "none",
    width: "100%",
    fontWeight: 500,
    padding: theme.spacing(1.5, 0),
    fontSize: "1rem",
    marginTop: theme.spacing(2),
  },
  link: {
    color: theme.palette.mode === "dark" ? "#EF5350" : "#D32F2F ",
    textDecorationColor: "inherit",
  },
  createAccountParagraph: {
    marginTop: theme.spacing(1),
  },
  createAccountLink: {
    marginLeft: theme.spacing(0.5),
  },
}));

export default ResetPassword;
