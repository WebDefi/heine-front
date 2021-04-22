import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button,Form} from '@material-ui/core';

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

export default function Input({placeholder}) {
    const classes = useStyles();
  
    return (
        <TextField placeholder={placeholder}  />
    );
  }

