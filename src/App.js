import React from 'react';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard'
import About from './components/layout/About'
import Guide from './components/layout/Guide'
import {BrowserRouter , Route,Switch} from 'react-router-dom'
import Clock from './components/layout/Clock'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Clock/>
      <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/Quarantimes" component={Dashboard}/>
      <Route path="/about" component={About}/>
      <Route path="/guide" component={Guide}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
