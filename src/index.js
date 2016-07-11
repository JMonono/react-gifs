import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Favourites from './containers/Favourites';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="signup" component={Signup} />
              <Route path="login" component={Login} />
              <Route path="favourites" component={Favourites} />
          </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
);
