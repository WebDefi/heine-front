import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button,Form} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "4px 15px",
        marginTop:theme.spacing(2),
        textTransform:"capitalize",
        backgroundColor:theme.palette.main,
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

