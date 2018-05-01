import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
// import './LoginScreen.css';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }

    this.handleClick=this.handleClick.bind(this);
  }

  componentWillMount(){
    let loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen:loginscreen,
      loginmessage:loginmessage
    })
  }

  handleClick(event){
    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      const loginmessage = "Already registered.Go to Login";
      this.setState({
       loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Login",
       isLogin:false
      })
    }else{
      let loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      const loginmessage = "Not Registered yet.Go to registration";
      this.setState({
       loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
      })
    }
  }

  render() {
    return (
        <div className="LoginScreen">
          {this.state.loginscreen}
          {this.state.loginmessage}
          <button onClick={this.handleClick}></button>
        </div>
    );
  }
}

export default LoginScreen;
