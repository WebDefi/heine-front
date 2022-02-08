import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from './components/Item/Breadcrumbs'

const useStyles = makeStyles(theme => ({
  subHeaderContainer: {
      background:theme.palette.mainBg.main,
      marginTop:80,
      padding:"50px 0 10px 0",
      borderBottom:theme.palette.borderMain.main
    },
  title: {
    fontSize: "1.3em",
  },
  subTitle: {
    fontSize: "1.1em"
  },
  categoryInfo: {
    marginTop: "1em",
    display: "flex",
    flexFlow: "column wrap",
  },
  subLinks: {
    display: "flex",
    flexFlow: "row wrap",
    marginTop: "1em"
  },
  subLink: {
    padding: "0 0.5em",
    margin: "0 1em",
    marginTop: "0.5em",
    color: "#EE5F22"
  }
}));


export default function SubHeader({pathItems, title, subTitle = '', subLinks = []})  {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" className={classes.subHeaderContainer}>
       <Container>
        <Breadcrumbs size={12} pathItems={pathItems}/>
        <div className={classes.categoryInfo}>
        <h3 className={classes.title}>{title}</h3>
        <small className={classes.subTitle}>{subTitle}</small>
        <ul className={classes.subLinks}>
  {subLinks.length ? subLinks.map(({path, text, active}) => <li className={classes.subLink}>{active ? <i>&#10004;</i> : ''}<Link style={{color: "#EE5F22", marginLeft: "0.2em"}} to={path}>{text}</Link></li>) : ''}
        </ul>
        </div>
       </Container>
    </Grid>
  );
};
