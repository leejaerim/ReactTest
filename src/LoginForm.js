import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class LoginForm extends Component {
  state = {};
  home = () => {
    this.props.history.push("/");
  };
  login = () => {
    const send_param = {
      uid: this.email.value,
      password: this.password.value,
    };
    if (this.password.value != null && this.email.value != null) {
      axios
        .post("http://localhost:8000/app/login/", send_param)
        .then((Response) => {
          debugger;
          if (Response.data.status === "Success") {
            sessionStorage.setItem("uid", this.email.value);
            this.props.history.push("/game");
          } else if (Response.data.Error != null) {
            alert(Response.data.Error);
          }
        })
        .catch((Error) => {
          debugger;
          console.log(Error);
        });
    } else {
      alert("Wrong Answer");
    }
  };
  onKeyPress = (e) =>{
    if(e.key =='Enter'){
      this.login();
    }
  }
  onKeyPress_ = (e) =>{
    if(e.key =='Enter'){
      this.password.focus();
    }
  }
  render() {
    if (sessionStorage.getItem("uid") != null) {
      return <Redirect to="/game" />;
    }
    return (
      <Form>
        <h1>로그인</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={(ref) => (this.email = ref)}
            placeholder="Enter email"
            onKeyPress={this.onKeyPress_}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginForm">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={(ref) => (this.password = ref)}
            placeholder="Password"
            onKeyPress={this.onKeyPress}
          />
          <Button onClick={this.login} variant="primary" type="button">
            로그인
          </Button>
          <Button onClick={this.home} variant="primary" type="button">
            홈으로
          </Button>
        </Form.Group>
        <br></br>
      </Form>
    );
  }
}

export default LoginForm;
