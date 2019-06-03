import React, { Component } from 'react'

class AddProperty extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const Name = document.getElementById('Name').value;
    const Address = document.getElementById('Address').value;
    const Description = document.getElementById('description').value;
    const img = document.getElementById('image').value;
    
  
  }

  render() {
    return (
      <div className="modal fade" id="addProperty" tabIndex="-1" role="dialog" aria-labelledby="addPropertyTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form className="form py-5" onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Add New Property</h1>
                <div className="form-group">
                  <label htmlFor="Name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    className="form-control"
                    placeholder="Property Name"
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Address">
                    Address
                  </label>
                  <input
                    type="address"
                    id="Address"
                    className="form-control"
                    placeholder="Property Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Description">
                    Description
                  </label>
                  <textarea 
                    className="form-control" 
                    id="description" 
                    placeholder="Property Description"
                    col={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Image">
                    Upload Image
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="form-control h-100"
                  />
                </div>
                <button className="btn mt-5 btn-lg btn-dark btn-block" type="submit">
                  +{" "}
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddProperty;