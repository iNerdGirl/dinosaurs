import React, { Component } from "react";
import "./Jobs.css";

class Jobs extends Component {
  render() {
    let jobs = this.props.jobs || {interested: []};
    return (
      <ul id="job-listings">
        {jobs.map(job => {
          job.interested = job.interested || []
          return (<li key={job.id}>
            <h4>{job.title}</h4>
            <small>{job.pay}</small>
            <p>{job.description}</p>
            <small>{job.interested.length} dinos are interested in this job</small>
          </li>)
        })}
      </ul>
    );
  }
}

export default Jobs;
