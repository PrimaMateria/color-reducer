import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/Home';

import reactLogo from './assets/React-icon.png';

const App = () => (
    <HashRouter>
      <main className="container">
        <div>
          <h1>Color Reducer</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </HashRouter>
);

export default App;
