import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    exact
    render={props =>
      Meteor.userId() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    exact
    render={props =>
      !Meteor.userId() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
