import React from "react";

const Section = ( )=> (
  <section className="container my-5">
    <div className="row my-3">
      <div className="col-12 text-center">
        <h2 className="font-weight-bold">From The Best, For The Best, To The Best.</h2>
        <div className="my-3 mx-auto">
          <p>
          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
          </p>
        </div>
      </div>
    </div>
    <div className="row mx-auto align-items-center py-4">
      <div className="col-md-6">
        <img src="http://via.placeholder.com/300x370" alt="placholder" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <div className="d-flex flex-column">
          <h3 className="font-weight-bold">Title</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div className="row mx-auto align-items-center py-4">
      <div className="col-md-6 order-2 order-md-1">
        <div className="d-flex flex-column">
          <h3 className="font-weight-bold">Title</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="col-md-6 order-1 order-md-2">
        <img src="http://via.placeholder.com/300x370" alt="placholder" className="img-fluid" />
      </div>
    </div>
  </section>
);

export default Section;
