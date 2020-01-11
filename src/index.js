import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App2 from './app2';
import ConditionalRendering from './ConditionalRendering';
import * as serviceWorker from './serviceWorker';
//import ListAndKeys from "./ListAndKeys";
import Training from './Training';
import Forms from "./Forms";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import Calculator from "./LiftingStateUp";
import HandlingEvents from "./HandlingEvents";
import Page from "./ConditionalRendering";
import Add from "./add";
import AutoCompleteText from "./AutoCompleteText";
import ExportObject from "./ExportObject";
import HandlingMultipleForms from "./HandlingMultipleForms";
import SimpleForm from "./SimpleForm"
import Toggle from "./Toggle"
import LiftingStateUp from "./LiftingStateUp"
import LiftingStateUp2 from "./LiftingStateUp2"
import Temperature from "./TemperatureT"
import Api from "./api"
import City from "./city"
ReactDOM.render((
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/city" component={City} />
    </Router>
    ),
    document.getElementById('root')
);
//ReactDOM.render(<ListAndKeys/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
