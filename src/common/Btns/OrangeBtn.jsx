import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btnControl: {
    padding: "4px 15px",
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Link to={props.link}>
      <Button
        className={classes.btnControl}
        type="submit"
        style={{ width: props.width, padding: props.padding }}
      >
        {props.buttonText}
      </Button>
    </Link>
  );
}
