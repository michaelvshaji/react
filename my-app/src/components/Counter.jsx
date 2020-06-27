import React, { Component } from "react";
class Counter extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      title: "",
      description: "",
      price: "",
      dataTosend: [],
      registerClicked: true
    };
  }
  componentDidMount() {
    localStorage.setItem('lists', JSON.stringify(this.state.dataTosend))
   }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit(e) {
    e.preventDefault();
    let value = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price
    };
    
    let datatosend = this.state.dataTosend;
    datatosend.push(value);
    this.setState({
      dataTosend: datatosend,
      registerClicked: true
    });
    localStorage.setItem("lists", JSON.stringify(this.state.dataTosend));
    this.setState({ registerClicked: true });
  }

  render() {
    if(this.state.registerClicked){
      this.documentData = JSON.parse(localStorage.getItem('lists'))
      this.setState({
        registerClicked: false
      })
    }
    return (
      <div className="container  col-10 col-md-5 align-items-center flex-column h-100 justify-content-center">
        <div
          style={{
            width: "",
            border: "1px solid red",
            height: "fit-content",
            marginTop: "120px"
          }}
        >
          {" "}
          <h2 className="font-weight-bold text-center mt-4 text-primary">
            Form
          </h2>
          <form
            onSubmit={this.handleFormSubmit}
            className="d-flex flex-column justify-content-center align-items-center p-3"
          >
            <div
              className="form-group"
              style={{
                width: "100%",
                paddingLeft: "40px",
                paddingRight: "40px"
              }}
            >
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div
              className="form-group"
              style={{
                width: "100%",
                paddingLeft: "40px",
                paddingRight: "40px"
              }}
            >
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div
              className="form-group"
              style={{
                width: "100%",
                paddingLeft: "40px",
                paddingRight: "40px"
              }}
            >
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ width: "250px", marginTop: "15px" }}
            >
              Submit
            </button>
          </form>
        </div>

        <div
          style={{ marginTop: "60px" }}
          className="d-flex justify-content-center flex-column align-items-center"
        >
         
          {this.documentData && this.documentData.map(data => (
            <div className="d-flex ">
              <div>{data.title}, </div>
              <div>{data.description}, </div>
              <div>{data.price} </div>
            </div>
          ))}
          
        </div>
      </div>
    );
  }
}

export default Counter;