import { Button, Container, Link as MuiLink, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { tss } from "tss-react/mui";
import useAuth from "../contexts/useAuth";
import { VIEWS } from "../config";
import usePageTitle from "../hooks/usePageTitle";
import { FormattedMessage, useIntl } from "react-intl";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ResetPassword = () => {
  const { classes } = useStyles();
  const { setAuth } = useAuth();
  const { formatMessage } = useIntl();
  usePageTitle(VIEWS.RESET_PASSWORD);

  const [formData, setFormData] = React.useState({
    email: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
  });

  const onChange = (e) => {
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Reset password:", formData);
      setAuth(true);
    }
  };
  return (
    <>
      <Header hasSearchField={false} hasProfile={false} />
      <Container component="main" maxWidth="xl" className={classes.root}>
        <Container maxWidth="xs">
          <h1>
            <FormattedMessage id="reset-password" />
          </h1>
          <form onSubmit={onSubmit}>
            <TextField
              fullWidth
              label={formatMessage({ id: "email" })}
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={onChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              className={classes.field}
              autoComplete="email"
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
              <FormattedMessage id="continue" />
            </Button>
          </form>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: "1 0 0px",
  },
  paragraph: {
    margin: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  field: {
    marginTop: theme.spacing(2),
    "& label.Mui-focused": {
      color: "inherit",
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #091B29 inset",
      WebkitTextFillColor: "#FFFFFF",
      caretColor: "#FFFFFF",
      borderRadius: "inherit",
    },
    "& .Mui-focused > fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "inherit",
    },
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
    color: theme.palette.mode === "dark" ? "#EF5350" : "#D32F2F",
    textDecorationColor: "inherit",
  },
}));

export default ResetPassword;
