import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>HOME</Link>{" "}
        <Link to='/aboutme'>ABOUT ME</Link>{" "}
        <Link to='/resume'>RESUME</Link>{" "}
        <h1>Hello World!</h1>
        <Switch>
          {/*<Route exact path="/aboutme" component={AboutMe} />*/}
          {/*<Route exact path="/aboutme" component={Resume} />*/}
        </Switch>
      </div>
    );
  }
}

export default App;
