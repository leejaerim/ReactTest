import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

//const headers = { withCredentials: true };

class JoinForm extends Component {
  state = {};
  home = () => {
    this.props.history.push("/")
  }
  join = () => {
    // // let axiosConfig = {
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //   }
    // };
    // const send_param = {
    //   uid: this.joinEmail.value,
    //   password: this.joinPw.value
    // };
    if(this.joinEmail.value==""||this.joinPw.value==""){
      alert("정보를 정확히 입력해주세요.");
    }else if(this.joinPw.value != this.joinrePw.value){
      alert("비밀번호가 다릅니다.");
      this.joinPw.value = "";
      this.joinrePw.value = "";
    }else{
      axios.post("http://localhost:8000/app/signup/", {
        uid : this.joinEmail.value,
        password : this.joinPw.value
      })
      //정상 수행
      .then(Response => {
        if (Response.status === 201 || Response.status === 200){
          if(Response.data.status === 'Success') {
            alert("회원가입 성공");
            this.props.history.push("/login")
          }else{
            alert(Response.data.Error)
          }
        } else {
          alert("회원가입 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
    }
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
          <Form.Label>re-Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.joinrePw = ref)}
            placeholder="re-Password"
          />
          <Button onClick={this.join} variant="primary" type="button">
            회원가입
          </Button>
          <Button onClick={this.home} variant="primary" type="button">
            홈으로
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default JoinForm;