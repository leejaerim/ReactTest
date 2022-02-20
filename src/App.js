import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import JoinForm from './JoinForm';
import Game from './game';
import Header from './header';
import Magpie from './Magpie';
import Table from './pages/table.js';
class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} component={Header} />
                <Route path="/login" component={LoginForm} />
                <Route path="/join" component={JoinForm} />
                <Route path="/game" component={Game} />
                <Route path="/magpie" component={Magpie}/>
                <Route path="/Table" component={Table}/>
            </div>
        );   
    }
}

export default App;