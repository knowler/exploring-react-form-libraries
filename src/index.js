import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';

import routes from './routes';

const Navigation = ({routes}) => (
  <nav>
    <ul>
      {routes.map(({path, title}) => (
        <li key={`navlink${path}`}>
          <NavLink
            to={path}
            activeStyle={{textDecoration: 'none', color: 'inherit'}}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

const App = () => (
  <Router>
    <Navigation routes={routes} />
    <Switch>
      <Route path="/" exact>
        Comparing libraries
      </Route>
      {routes.map(({path, Component}) => (
        <Route key={`route${path}`} path={path}>
          <Component />
        </Route>
      ))}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
