import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, TextField } from "@mui/material";
import React from "react";
import { tss } from "tss-react/mui";

const SearchField = () => {
  const { classes } = useStyles();
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState("");

  const handleSearch = () => {
    if (!value) {
      inputRef.current.focus();
      return;
    }

    alert(`Performing search for: ${value}`);
  };

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        aria-label="Search"
        placeholder="Search anime..."
        value={value}
        onChange={(e) => setValue((e.target.value || "").trim())}
        inputRef={inputRef}
        InputProps={{
          classes: {
            // notchedOutline: classes.notchedOutline,
            // input: classes.input,
          },
          endAdornment: (
            <IconButton
              color="inherit"
              onClick={handleSearch}
              aria-label="Search"
              className={classes.iconButton}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

const useStyles = tss.create(({ theme }) => ({
  root: {
    width: "100%",
    margin: theme.spacing(0, 2),
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: 0,
    },
    "& input": {
      opacity: 0,
    },
    "&:hover": {
      background: "#191919",
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 0.8,
      },
      "& input": {
        opacity: 1,
      },
    },
    "&:active": {
      background: "#191919",

      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 0.8,
      },
      "& input": {
        opacity: 1,
      },
    },
    "&:focus": {
      background: "#191919",

      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 0.8,
      },
      "& input": {
        opacity: 1,
      },
    },
    "& input:hover": {
      opacity: 1,
    },
    "& input:active": {
      opacity: 1,
    },
    "& input:focus": {
      opacity: 1,
    },
  },
  iconButton: {
    fontSize: "1rem",
  },
}));

export default SearchField;
