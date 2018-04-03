import React, { Component } from "react";
import "./JobForm.css";

class JobForm extends Component {
  constructor({onSave}) {
    super(arguments[0]);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({ ...this.state });
    this.setState({
      title: "",
      pay: "",
      description: "",
      interested: []
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}); 
  }

  render() {
    return (
      <form className="job-form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={this.handleChange} />
        <label htmlFor="pay">Compensation</label>
        <input type="text" name="pay" onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows="8" cols="40" onChange={this.handleChange} />
        <input
          type="submit"
          name="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default JobForm;
