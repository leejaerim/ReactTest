import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Game from "./game";

class Body extends Component {
  render() {
    return (
      <div>
        <Game />
        <LoginForm />
      </div>
    
    );
  }
}

export default Body;