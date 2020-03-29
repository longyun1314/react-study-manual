import React, { Component } from 'react';
import './App.css';
import RondomMeUsers from "./components/PeopleList";
import WrappedCountryNames from "./components/CountryDropDown";
import HideMessage from './components/ShowHideMessage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <RondomMeUsers/>
         <WrappedCountryNames selected="China"/>
         <HideMessage hidden={true}>
           This content will start off hidden
         </HideMessage>
        </div>
      </div>
    );
  }
}

export default App;
