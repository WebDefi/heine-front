import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Link} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "4px 15px",
        marginTop:theme.spacing(2),
        textTransform:"capitalize",
        backgroundColor:"#EE5F22",
        '&:hover': {
            background: theme.palette.secondary.main,
          }
      },
}));

export default function Header(props) {
    const classes = useStyles();
  
    return (
        <a href={props.link}><Button className={classes.btnControl} style={{width:props.width, height:props.height}}>{props.buttonText}</Button></a>
    );
  }

