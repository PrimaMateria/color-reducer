import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Reducer from './containers/Reducer';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

const App = () => (
    <HashRouter>
      <main className="container">
        <div>
          <h1>Color Reducer</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Reducer} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </HashRouter>
);

export default App;
