import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />

        </Switch>
      </Router>
    </div>
  )
}

export default App;
