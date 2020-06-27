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
      registerClicked: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("document", JSON.stringify(this.state));
    this.setState({ registerClicked: true });
  }
  componentDidUpdate() {
    // console.log("working");
    this.documentData = JSON.parse(localStorage.getItem("document"));

    if (this.state.registerClicked && localStorage.getItem("document")) {
      this.setState({
        submittedtitle: this.documentData.title,
        submitteddescription: this.documentData.description,
        submittedprice: this.documentData.price,
        registerClicked: false,
        title: "",
        price: "",
        description: ""
      });
      console.log(this.documentData.title);
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{width:"30%", border: '1px solid red',height:"350px",marginLeft:"350px",marginTop:"50px"}}>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group" style={{width:"250px",marginLeft:"40px"}}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" style={{width:"250px",marginLeft:"40px"}}>
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" style={{width:"250px",marginLeft:"40px"}}>
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{width:"250px",marginLeft:"40px",marginTop:"45px"}}>
            Submit
          </button>
        </form>
        </div>

        <div style={{marginLeft:"470px",marginTop:"60px"}} >
        
        <div>{this.state.submittedtitle}</div>
        <div>{this.state.submitteddescription}</div>
        <div>{this.state.submittedprice}</div>
        
        </div>
      </div>
    );
  }
}

export default Counter;
