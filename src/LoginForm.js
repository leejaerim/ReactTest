import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

class LoginForm extends Component {
  state = {};
  login = () => {
    const send_param = {
      uid: this.email.value,
      password: this.password.value
    };
    if(this.password.value != null && this.email.value  != null ){
      axios.post('http://localhost:8000/app/login/',send_param)
        .then((Response)=>{
          if(Response.data.status === 'Success'){
            this.props.history.push("/game")
          }
          })
        .catch((Error)=>{console.log(Error)})
    }else{
      alert("Wrong Answer");
    }
  };
  render() {
    return (
      <Form>
        <h1>로그인</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={ref => (this.email = ref)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginForm">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.password = ref)}
            placeholder="Password"
          />
          <Button onClick={this.login} variant="primary" type="button">
            로그인
          </Button>
        </Form.Group>
        <br></br>
      </Form>
    );
  }
}

export default LoginForm;