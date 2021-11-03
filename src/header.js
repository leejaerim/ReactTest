import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
          <h1>Today I  Learned</h1>
          <br />
          <p>오늘 <b>공부한</b> 것을 떠올리면서 다시 한번 정리 해보세요.</p>
          <p>내일 더 멋진 하루가 펼쳐질 것입니다.</p>
          <button><Link to= '/' className="links">Home</Link></button>
          <button><Link to= '/Login' className="links">로그인</Link></button>
          <button><Link to= '/Join' className="links">회원가입</Link></button>
      </div>
    );
  }
}

export default Header;