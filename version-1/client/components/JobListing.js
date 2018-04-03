import React, { Component } from "react";
import "./JobListing.css";
import Jobs from "./Jobs";
import JobForm from "./JobForm";

class JobListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    const apiUrl = "./listings.json";
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({ jobs: data });
      });
  }

  handleSave(listing) {
    this.setState({jobs: [ listing, ...this.state.jobs]})
  }

  render() {
    return (
      <main>
        <section>
          <h2>Job Listings</h2>
          <Jobs jobs={this.state.jobs} />
        </section>
        <aside id="side-bar">
          <h3>Add a Job</h3>
          <JobForm onSave={this.handleSave} />
        </aside>
      </main>
    );
  }
}

export default JobListing;
