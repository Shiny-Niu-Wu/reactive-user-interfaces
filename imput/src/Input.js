import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.onChange=this.onChange.bind(this);
  }

   onChange(e){
     let txt = e.target.value;
     txt = txt.replace('Shiny', '[404]');

     this.setState({
       value:txt
     });
   }

   render() {
     return (
         <input type="text" onChange={this.onChange} value={this.state.value}/>
     );
   }


}

export default Input;
