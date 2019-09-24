import React from 'react';
// import debounce from 'lodash.debounce';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import ErrorBoundary from './errorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={Home} />
          </ErrorBoundary>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
