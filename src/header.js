import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from './navi';
class Header extends Component {
  render() {
    if(sessionStorage.getItem("uid") != null){
      return (
        <div>
        <Navigation/>
        <br />
        <p>오늘 <b>공부한</b> 것을 떠올리면서 다시 한번 정리 해보세요.</p>
        <p>내일 더 멋진 하루가 펼쳐질 것입니다.</p>
        <button><Link to= '/' className="links">Home</Link></button>
        <button><Link to= '/game' className="links">Main</Link></button>
        </div>
      );
    }else{
      return (
        <div>
            <Navigation/>
            <br />
            <p>오늘 <b>공부한</b> 것을 떠올리면서 다시 한번 정리 해보세요.</p>
            <p>내일 더 멋진 하루가 펼쳐질 것입니다.</p>
        </div>
      );
    }
  }
}
/*
  <button><Link to= '/' className="links">Home</Link></button>
*/
export default Header;