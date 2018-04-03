import React, {Component} from 'react';
import './App.css'
import Header from './Header';
import Dinosaurs from './Dinosaurs';
import Footer from './Footer';

class App extends Component {
  render() {
    return(
      <div className="Application">
        <Header />
        <Dinosaurs />
        <Footer />
      </div>
    );
  }
}

export default App;