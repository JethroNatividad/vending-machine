import React from 'react';
import VendingMachine from './VendingMachine';
import Cola from './Cola';
import Hotdog from './Hotdog';
import Chips from './Chips';
import Navbar from './Navbar';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={VendingMachine}/>
        <Route path='/cola' component={Cola}/>
        <Route path='/hotdog' component={Hotdog}/>
        <Route path='/Chips' component={Chips}/>
      </Switch>
    </div>
  )
}

export default App;