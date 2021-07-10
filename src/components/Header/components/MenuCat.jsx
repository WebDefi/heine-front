import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuCats: {
    background: "#212121",
    color: theme.palette.white.main,
   
  },
}));

export default function MenuCat({ fstCat, scndCat, thrdCat }) {
  const classes = useStyles();
  return <li className={classes.menuCats}>{fstCat}</li>;
}
