import React, { Component } from 'react'

export default class PropertyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.handleEdit =  this.handleEdit.bind(this);
  }

  handleEdit(){
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {

    const { handleSubmit, handleEdit } = this;
    const { data } = this.props;
    const { edit } = this.state;

    return (
      <div className="col-md-4 py-3">
        <div className="card w-100">
          {!edit ?
            (
              <>
                <img src={data.image} className="card-img-top" alt={data.name} />
                <div className="card-body">
                  <pre className="mb-1 mt-3">Name:</pre>
                  <h5 className="card-title text-capitalize">{data.name}</h5>
                  <pre className="mb-1 mt-3">Address:</pre>
                  <h6 className="card-subtitle mb-2 text-muted">{data.address}</h6>
                  <pre className="mb-1 mt-3">Description:</pre>
                  <p className="card-text">{data.description}</p>
                  <span className="blockquote-footer">{data.createdAt.toString()}</span>
                  <button className="btn btn-dark edit showEdit my-2" onClick={this.handleEdit} >
                    Edit
                  </button>
                </div>
              </>
            ) :
            (
              <form className="form p-3" id="EditProp" onSubmit={handleSubmit}>
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
                    value={data.name}
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
                    value={data.address}
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
                    value={data.description}
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
                <div className="d-flex flex-row justify-items-between">
                  <button className="btn mt-5 btn-dark" type="submit">
                    Edit
                  </button>
                  <button className="btn mt-5 btn-primary ml-auto" type="submit" onClick={this.handleEdit} >
                    Cancel
                  </button>
                </div>
              </form>
            )
          }
        </div>
      </div>
    )
  }
}
