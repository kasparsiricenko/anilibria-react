import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { tss } from "tss-react/mui";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()}{" "}
        <FormattedMessage id="personal-project-a" />
      </Typography>
      <Typography variant="body2" align="center">
        <FormattedMessage id="contact-me-on-telegram" />
        <Link
          color="inherit"
          href="https://t.me/maggot99999"
          className={classes.link}
        >
          @maggot99999
        </Link>
      </Typography>
    </footer>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    padding: theme.spacing(2),
  },
  link: {
    color: theme.palette.mode === "dark" ? "#EF5350" : "#D32F2F ",
    textDecorationColor: "inherit",
    marginLeft: theme.spacing(0.5),
  },
}));

export default Footer;
