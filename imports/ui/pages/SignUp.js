import React, { Component } from "react";
import Nav from "../components/Nav";
import { Accounts } from 'meteor/accounts-base';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let cpassword = document.getElementById('cPassword').value;

    if(password !== cpassword ){
      return alert("Password not the same")
    }

    Accounts.createUser({email: email, password: password},  (err) => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {

    const {error} = this.state;

    return (
      <>
        <Nav />
        <div className="text-center my-5" data-gr-c-s-loaded="true">
          {error.length > 0 ?
            <div className="alert alert-danger text-dark">{error}</div>
            : ''
          }
          <form className="form-signin py-5" onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="Email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Email address"

              required
              autoFocus
            />
            <label htmlFor="Password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="Password"
              className="form-control"
              placeholder="Password"
              required
            />
             <label htmlFor="Confirm Password" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              id="cPassword"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
            <button className="btn mt-5 btn-lg btn-dark btn-block" type="submit">
              Sign Up
            </button>
            <p className="mt-5 mb-3 text-muted">©Property Lounge 2017-2019</p>
          </form>
        </div>
      </>
    );
  }
}
