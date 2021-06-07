import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Link,Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "4px 15px",
        marginTop:theme.spacing(2),
        textTransform:"capitalize",
        backgroundColor:theme.palette.primary.main,
        '&:hover': {
            background: theme.palette.secondary.main,
          }
      },
}));

export default function Header(props) {
    const classes = useStyles();
  
    return (
            <a href={props.link}><Button className={classes.btnControl} type="submit" style={{width:props.width, padding:props.padding}}>{props.buttonText}</Button></a>
    );
  }

