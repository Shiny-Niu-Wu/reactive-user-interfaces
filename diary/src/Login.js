import React, { Component } from 'react';
import Homepage from './Homepage'
import axios from 'axios';
// import './Login.css';

// log in following https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }

    this.changeName=this.changeName.bind(this);
    this.changePassword=this.changePassword.bind(this);
    this.confirmInfo=this.confirmInfo.bind(this);
 }

 changeName(e){
   this.setState({
     username: e.target.value
   });
 }

 changePassword(e){
   this.setState({
     password: e.target.value
   });
 }

 confirmInfo(event){
   const apiBaseUrl = "http://localhost:4000/api/";
   const self = this;
   let payload = {
     "email":this.state.username,
     "password":this.state.password
   }

   axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
   console.log(response);
   if(response.data.code === 200){
   console.log("Login successfull");
   var uploadScreen=[];
   uploadScreen.push(<Homepage appContext={self.props.appContext}/>)
   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
   }
   else if(response.data.code === 204){
   console.log("Username password do not match");
   alert("username password do not match")
   }
   else{
   console.log("Username does not exists");
   alert("Username does not exist");
   }
   })
   .catch(function (error) {
   console.log(error);
   });
 }

  render() {
    return (
        <div className="Login">
          <h1>Login</h1>
          <input placeholder="username" value={this.state.username} onChange={this.changeName}></input>
          <input placeholder="password" value={this.state.password} onChange={this.changePassword}></input>
          <button onClick={this.confirmInfo}>Confirm</button>
        </div>
    );
  }
}

export default Login;
