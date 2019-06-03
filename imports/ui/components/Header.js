import React from "react";
import Nav from "./Nav";

const Header = ( )=> (
  <header className="head">
    <Nav />
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-img">
      <div className="col-md-7 p-lg-3 mx-auto my-5 text-white">
        <h1 className="display-4 font-weight-normal">Property Lounge</h1>
        <p className="lead font-weight-normal">Managing Properties Has never been this easy.</p>
        <a className="btn btn-outline-light" href="#">Learn More</a>
      </div>
    </div>
  </header>
);

export default Header;
