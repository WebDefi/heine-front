import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrangeBtn from '../../common/Btns/OrangeBtn'
import './input.css'


class Input extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input0 = React.createRef();
      this.input1 = React.createRef();
      this.input2 = React.createRef();
    }
  
    handleSubmit(event) {
      alert(
          'Отправленное имя: ' + this.input0.current.value + 'Отправленное имя: ' + this.input1.current.value + 'Отправленное имя: ' + this.input2.current.value
      
      );
     
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className='form' style={{paddingTop:"20px"}}>
        <Grid container justify="center">
          <Grid item xs={11} sm={4} className='inputs' style={{paddingRight:30}}>
            <label>
                Имя:
                <input type="text" ref={this.input0} />
            </label>
          </Grid>
         <Grid item xs={11} sm={4} className='inputs' style={{padding: "0 30px"}}>
         <label>
            Email:
            <input type="text" ref={this.input1} />
          </label>
         </Grid>
          <Grid item xs={11} sm={4} className='inputs' style={{padding: "0 30px"}}>
          <label>
            Tel:
            <input type="text" ref={this.input2} />
          </label>  
          </Grid>
          
         <Grid item xs={12} style={{paddingTop:10}}>
            <OrangeBtn width="100%" buttonText="Отправить"/>
         </Grid>
          
        
        </Grid>
        </form>
      );
    }
  }
  export default Input;