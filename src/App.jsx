import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

const App = () => (
    <HashRouter>
      <main className="container">
        <div>
          <h1>Color Reducer</h1>
        </div>
        <ul className="left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </HashRouter>
);

export default App;
