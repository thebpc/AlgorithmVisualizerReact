import React from 'react';
import './App.css';
import Nav from './container/Nav';
import BS from './container/BS';
import Home from './container/Home';
import About from './container/About';
import { Route,Switch } from 'react-router-dom';


function App() {

 
  return (

      <div className="App">
        {/* Navigation related component */}
      <Nav name="Algorithm Visualizer" />
      {/* Main component which holds main User Interface */}
      <div className="main">
      {/* <BS></BS> */}
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/BS" component={BS} />
      <Route path="/about" component={About} />
      </Switch>
      </div>
      
      </div>

  );
}

export default App;
