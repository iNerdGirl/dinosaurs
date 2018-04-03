import React, {Component, Fragment} from 'react';
import Popup from './Popup';
import './Dinosaurs.css';

class Dinosaurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    const apiUrl = "./dinosaurs.json";
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          dinos: data
        });
      });
  }

  handleToggle(i) {
    const newDinos = this.state.dinos.map((dino, index) => {
      if (i === index) {
        dino.showSkills = !dino.showSkills;
      }
      return dino;
    });
    this.setState({
      dinos: newDinos
    });
  }

  render() {
    return (
      <main>
        <section>
          <h2>Profiles</h2>
          <Popup dinos={this.state.dinos} showSkills={this.state.showSkills} handleToggle={this.handleToggle}/>
        </section>
      </main>
    );
  }
}

export default Dinosaurs;