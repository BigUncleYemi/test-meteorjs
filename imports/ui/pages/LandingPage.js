import React, { Component } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Section />
        <Footer />
      </div>
    )
  }
}
