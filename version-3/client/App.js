import React, {Component} from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}