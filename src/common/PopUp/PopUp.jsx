import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,TextField,Typography, Grid, Container} from '@material-ui/core';
import OrangeBtn from '../Btns/OrangeBtn'
import NameForm from '../FooterInput/NameForm'
import Input from '../Input/Input'
import PopUp from './PopUp.css'
import close from '../../assets/images/close.svg'
import { Autorenew } from '@material-ui/icons';

function getModalStyle() {
  return {
    left:"50%",
    marginLeft:"-500px",
    bottom:0,
    
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    bottom:0,
    zIndex: "1000",
    position: 'fixed',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #C1C4C5',
    boxShadow: theme.shadows[5],

  },
}));

export default function SimpleModal({show, closePopup}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const [showResults, setShowResults] = React.useState(true)
  // const onClick = () => setShowResults(false)

  const Results = () => (
    <Container> 
      <Grid container justify="center">
      <Grid item xs={12} sm={8} className={classes.paper}>
        <button onClick={closePopup} style={{float:'right',background:"none",border:'none'}}><img src={close} style={{position:"absolute",top:10, right:15}}></img></button>
        <Typography variant="h6" align="center" style={{textTransform: "uppercase"}}>Связатся <span style={{color:"#EE5F22"}}>с менеджером</span></Typography>
        <Input />
      </Grid>
    </Grid>
    </Container>
  )

  return (
    <div>
      { show ? <Results /> : null }
    </div>
     
     
  );
  
}