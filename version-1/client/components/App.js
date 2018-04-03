import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import JobListing from './JobListing';
import Footer from './Footer';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <JobListing />
        <Footer />
      </div>
    );
  }
}

export default App;