import React, {Component} from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    let popups = this.props.dinos;
    let {showSkills} = this.props;
    return(
      <ul id="profiles">
        {popups.map((popup, i) => {
          return <li key={i} className="profile-card">
              <header className="profile-header" onClick={() => this.props.handleToggle(i)}>
                <img src={popup.image} alt={popup.name} />
                <h2>{popup.name}</h2>
              </header>
              {popup.showSkills ? <section className="skills-container hidden">
                  <h4>Skills</h4>
                  <ul className="skills-list">
                    {popup.skills.map((skill, j) => {
                      return <li key={j}>{skill}</li>;
                    })}
                  </ul>
                </section> : null}
            </li>;
        })}
      </ul>
    );
  }
}

export default Popup;