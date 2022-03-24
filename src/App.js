import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import JoinForm from './JoinForm';
import Board from './pages/Board';
import Header from './header';
import Magpie from './Magpie';
import Home from './pages/Home.js';
class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} component={Header} />
                <Route path="/login" component={LoginForm} />
                <Route path="/join" component={JoinForm} />
                <Route path="/game" component={Board} />
                <Route path="/magpie" component={Magpie}/>
                <Route path="/Home" component={Home}/>
            </div>
        );   
    }
}

export default App;