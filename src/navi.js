import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button ,NavDropdown,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Redirect } from "react-router-dom";

function Navigation(){
    const logout = () => {
      axios
        .post("http://localhost:8000/app/logout/", {}) //정상 수행
        .then((Response) => {
          if (Response.status === 201 || Response.status === 200) {
            if (Response.data.status === "Success") {
              sessionStorage.removeItem("uid");
              //history.push('/signup')
              window.location.href='/';
            }
          } else {
            alert("로그아웃 실패");
          }
        })
        //에러
        .catch((err) => {
          console.log(err);
        });
    };
    return(
      <div className="Navigation"> 
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">Today I Learned</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link >Home</Nav.Link>
                {
                  sessionStorage.getItem("uid") !== null? <Nav.Link onClick={logout}>Logout</Nav.Link> : <Nav.Link onClick={() => window.location.href='/Login'}>Login</Nav.Link>
                }
                {
                  sessionStorage.getItem("uid") !== null? null : <Nav.Link onClick={() => window.location.href='/Join'}>Join</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default Navigation;