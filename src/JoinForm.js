import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class JoinForm extends Component {
  state = {};
  join = () => {
    const send_param = {
      headers,
      email: this.joinEmail.value,
      password: this.joinPw.value
    };
    axios
      .post("http://localhost:8080/member/insert", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          this.setState({
            name: returnData.data.name
          });
        } else {
          alert("회원가입 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Form>
        <br></br>
        <h1>회원가입</h1>
        <Form.Group controlId="joinForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={ref => (this.joinEmail = ref)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.joinPw = ref)}
            placeholder="Password"
          />
          <Button onClick={this.join} variant="primary" type="button">
            회원가입
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default JoinForm;