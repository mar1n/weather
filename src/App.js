import React from 'react';
import logo from './logo.svg';
import './App.css';
import './AutoCompleteText.css'
import AutoCompleteText from './AutoCompleteText'
import countries from './countries'
import cities from './cities'
import ukCities from './ukCities'
import City from "./city";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Api from "./api";
class App extends React.Component {
    render() {
        return (
            <div className="App">
              <div className="App-Component">
                <div className="App-Component">

                  <AutoCompleteText items={ukCities} />



                </div>
              </div>
            </div>

        );
    }
}

export default App;
