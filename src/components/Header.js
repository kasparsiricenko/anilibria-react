import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Link as MuiLink } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { tss } from "tss-react/mui";
import SearchField from "./SearchField";

const Header = ({
  hasBackButton = true,
  hasSearchField = true,
  hasProfile = true,
}) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar>
        {hasBackButton && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Go back"
            onClick={onGoBack}
            className={classes.backButton}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        )}
        <img src="./logo.svg" className={classes.logo} alt="Anilibria logo" />
        {hasSearchField && <SearchField />}
        {hasProfile && (
          <RouterLink to="/sign-up">
            <MuiLink component="span" to="/profile" aria-label="Go to Profile">
              Profile
            </MuiLink>
          </RouterLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    boxShadow: "none",
  },
  backButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  logo: {
    height: "1.5rem",
  },
}));

export default Header;
