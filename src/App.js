import { func } from 'prop-types';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Home from './routes/Home';

function App(){
    return (
        <HashRouter>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;
