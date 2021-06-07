import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles/NameForm.css'



class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value0: ''};
      this.state = {value1: ''};
      this.state = {value2: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value0: event.target.value});
      this.setState({value1: event.target.value});
      this.setState({value2: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value0);
      alert('Отправленное имя: ' + this.state.value1);
      alert('Отправленное имя: ' + this.state.value2);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Ваш Е-мейл" value={this.state.value0} onChange={this.handleChange} className="textField" />
          <input type="submit" value=">" className="sumbitBtn" />
        </form>
      );
    }
  }

export default NameForm;