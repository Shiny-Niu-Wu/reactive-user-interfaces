import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
// import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }

    this.changeFirstName=this.changeFirstName.bind(this);
    this.changeLastName=this.changeLastName.bind(this);
    this.changeEmail=this.changeEmail.bind(this);
    this.changePassword=this.changePassword.bind(this);
    this.confirmInfo=this.confirmInfo.bind(this);
  }

  changeFirstName(e){
    this.setState({
      first_name: e.target.value
    });
  }

  changeLastName(e){
    this.setState({
      last_name: e.target.value
    });
  }

  changeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  changePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  confirmInfo(event){
    const apiBaseUrl = "http://localhost:4000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    const self = this;
    let payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  render() {
    return (
        <div className="Register">
          <h1>Register</h1>
          <input placeholder="First name" value={this.state.firstName} onChange={this.changeFirstName}></input>
          <input placeholder="Last name" value={this.state.lastName} onChange={this.changeLastName}></input>
          <input placeholder="email" value={this.state.email} onChange={this.changeEmail}></input>
          <input placeholder="password" value={this.state.password} onChange={this.changePassword}></input>
          <button onClick={this.confirmInfo}>Confirm</button>
        </div>
    );
  }
}

export default Register;
