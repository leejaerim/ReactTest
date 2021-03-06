import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import JoinForm from './JoinForm';
import DataTable from './pages/Board';
import Header from './header';
import WriteContent from './pages/WriteContent.js';
import ViewContent from './pages/ViewContent.js';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} component={Header} />
                <Route path="/login" component={LoginForm} />
                <Route path="/join" component={JoinForm} />
                <Route path="/game" component={DataTable} />
                <Route path="/writecontent" component={WriteContent}/>
                <Route path="/viewcontent/:id" component={ViewContent}/>
            </div>
        );   
    }
}

export default App;