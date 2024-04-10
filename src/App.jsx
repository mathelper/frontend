import React from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import NotFound from './components/NotFound';
import FactDetails from './components/FactDetails';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/facts/:id" component={FactDetails} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;