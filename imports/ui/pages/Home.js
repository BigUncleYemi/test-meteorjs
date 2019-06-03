import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AddProperty from '../components/Addproperty';

class Home extends Component {
  render() {

    const { currentUser } = this.props;

    return (
      <>
        <AddProperty />
        <Nav />
        <section style={{height: 300,position: 'relative'}}>
          <div className="bg-owner h-100">
            <div className="owner text-light col-sm-12 px-sm-5">
              <h1 className="font-weight-bold">
                Welcome
              </h1>
              <span>{currentUser && currentUser.emails[0].address}</span>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row py-5 px-3">
            <button className="btn col-md-3 position-relative add-property"  data-toggle="modal" data-target="#addProperty">
              <p className="m-auto">+</p>
            </button>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(Home);
