import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToExamine from './pages/ToExamine.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Table from './pages/table.js';

class Magpie extends Component{
    render(){
        return(
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/ToExamine" component={ToExamine} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Table" component={Table} />
                </Switch>
            </Router>
        
        )
    }
}

export default Magpie;