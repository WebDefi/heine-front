import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        <Button className={classes.btnControl} component='a'>{props.buttonText}</Button>
    );
  }

