import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  new: {
    cursor: "pointer"

  }}));

const Breadcrumbs = props => {
  const classes = useStyles();
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link className={classes.new} onClick={() => history.push("/")}>Главная</Link>
      ) : (
        <Typography className={classes.new}> Главная </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography className={classes.new} key={name}>{name}</Typography>
        ) : (
          <Link className={classes.new} key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
