import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AddProperty from '../components/Addproperty';
import Properties from '../../api/properties';
import PropertyCard from '../components/PropertyCard';

class Home extends Component {
  handleAddPropertySubmit = (e) => {
    e.preventDefault();

    const Name = document.getElementById('Name').value;
    const Address = document.getElementById('Address').value;
    const Description = document.getElementById('description').value;
    const img = document.getElementById('image').files;
    if(window.FileReader) {
      const file  = img[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        const data = {
          Name,
          Address,
          Description,
          image: e.target.result,
        };
        Meteor.call('property.insert', data);
      }
    }
    $('#addProperty').modal('hide');
    document.getElementById("AddProp").reset();
    alert('Property added');
  }

  renderProperties() {
    let filteredProperties = this.props.properties;
    return filteredProperties.map((properties) => {
 
      return (
        <PropertyCard
          key={properties._id}
          data={properties}
        />
      );
    });
  }

  render() {

    const { currentUser, properties } = this.props;

    return (
      <>
        <AddProperty
         handleSubmit={this.handleAddPropertySubmit}
        />
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
            {this.renderProperties()}
            <button className="btn m-3 col-md-3 position-relative add-property"  data-toggle="modal" data-target="#addProperty">
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
  Meteor.subscribe('properties');
  return {
    currentUser: Meteor.user(),
    properties: Properties.find({}).fetch(),
  };
})(Home);
