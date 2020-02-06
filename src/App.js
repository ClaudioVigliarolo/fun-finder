import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';
import NotFound from './screens/NotFound';
import ContactScreen from './screens/ContactScreen';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={MainScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/details" component={DetailScreen} />
          <Route exact path="/about" component={ContactScreen} />
          <Route path="" component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
