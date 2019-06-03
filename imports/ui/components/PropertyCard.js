import React, { Component } from 'react'

export default class PropertyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.handleEdit =  this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit(){
    this.setState({
      edit: !this.state.edit
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const Name = document.getElementById('EditName').value;
    const Address = document.getElementById('EditAddress').value;
    const Description = document.getElementById('Editdescription').value;
    const img = document.getElementById('Editimage').files;
    if(window.FileReader) {
      if(img.length > 0){
        var file  = img[0];
        var reader = new FileReader();
        var id = this.props.data._id;
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          console.log(e.target.result)
          const data = {
            Name,
            Address,
            Description,
            image: e.target.result,
            _id:  id,
          };
          Meteor.call('property.update', data);
        }
      }else{
        const data = {
          Name,
          Address,
          Description,
          image: this.props.data.image,
          _id:  this.props.data._id,
        };
        Meteor.call('property.update', data);
      }
    }
    
    this.setState({
      edit: false
    })
  }

  render() {

    const { handleSubmit, handleEdit } = this;
    const { data } = this.props;
    const { edit } = this.state;

    return (
      <div className="col-md-4 py-3">
        <div className="card w-100">{console.log(data)}
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
                  <button className="btn btn-dark edit showEdit my-2" onClick={handleEdit} >
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
                    id="EditName"
                    className="form-control"
                    placeholder="Property Name"
                    required
                    autoFocus
                    defaultValue={data.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Address">
                    Address
                  </label>
                  <input
                    type="address"
                    id="EditAddress"
                    className="form-control"
                    placeholder="Property Address"
                    required
                    defaultValue={data.address}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Description">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="Editdescription"
                    placeholder="Property Description"
                    col={5}
                    required
                    defaultValue={data.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Image">
                    Upload Image
                   </label>
                  <input
                    id="Editimage"
                    type="file"
                    accept="image/*"
                    className="form-control h-100"
                  />
                </div>
                <div className="d-flex flex-row justify-items-between">
                  <button className="btn mt-5 btn-dark" type="submit">
                    Edit
                  </button>
                  <button className="btn mt-5 btn-primary ml-auto" type="submit" onClick={handleEdit} >
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
