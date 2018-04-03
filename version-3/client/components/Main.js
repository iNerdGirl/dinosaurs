import React, {Component} from 'react';
import './Main.css';
import Form from './Form';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isHidden: true,
      text: '',
      message: ''
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const apiURI = `./listing.json`;
    fetch(apiURI)
      .then(res => res.json())
      .then(data => {
        data = Array.isArray(data) ? data : [data]
        this.setState({
          jobs: data
        })
      })
      .catch(console.error)
  }

  toggleClass() {
    const currentlyActive = this.state.isHidden;
    this.setState({
      isHidden: !currentlyActive
    });
  }

  handleUpdate(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      text: '',
      message: 'Your application was submitted!'
    });
  }

  render() {
    const {jobs, isHidden, message, text} = this.state;
    return(
      <main>
        <section id="job-details">
          <h2>Job Details</h2>
          {jobs.map(job => {
            return (<div key={job.id}>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
            </div>
          )})}
        </section>
        <Form handleUpdate={this.handleUpdate} handleSubmit={this.handleSubmit} text={text}/>
        <p id="message">{message}</p>
        <button id="preview-toggle" onClick={this.toggleClass}>Show Preview</button>
        <section id="application-preview" className={isHidden ? "hidden" : null}>{text}</section>
      </main>
    );
  }
}