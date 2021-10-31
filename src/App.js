import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import JoinForm from './JoinForm';
import Game from './game';
import { Link } from "react-router-dom";
import Header from './header';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} component={Header} />
                <Route path="/login" component={LoginForm} />
                <Route path="/join" component={JoinForm} />
                <Route path="/game" component={Game} />
                <button><Link to= '/' className="links">Home</Link></button>
                <button><Link to= '/Login' className="links">로그인</Link></button>
                <button><Link to= '/Join' className="links">회원가입</Link></button>
            </div>
        );   
    }
}

export default App;