import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Nav extends React.Component {

  Logout = (e) => {
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        <Redirect to="/" />
      }
    });
  }
  
  render() {

    const { currentUser } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <a className="navbar-brand" href="/">Property Lounge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav ml-auto">
            {currentUser ?
              (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">
                      {currentUser.emails[0].address}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-dark" href="/" onClick={this.Logout}>Logout</a>
                  </li>
                </>
              )
              :
              (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">LogIn</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp</Link>
                  </li>
                </>
              )}
          </ul>
        </div>
      </nav>
    )
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(Nav);
