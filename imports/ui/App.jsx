import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { PrivateRoute, PublicRoute } from './utils/Route'
import Home from './pages/Home'

const Four0Four = ( ) => (
  <div>Not Found</div>
)


class App extends React.Component {
  render() {

    return (
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/signup" exact component={SignUp} />
        <PrivateRoute path="/home" exact component={Home} />
        <Route component={Four0Four} />
      </Switch>  
    )
  }
}


export default App;
