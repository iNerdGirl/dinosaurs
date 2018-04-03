import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    const {handleUpdate, handleSubmit, text} = this.props
    return(
    <form id="application-input">
      <label htmlFor="application-text">Apply Here: </label>
      <textarea name="application-text" id="application-text" cols="100" rows="8" value={text} onChange={handleUpdate} />
      <input type="submit" id="submit" value="Submit" onClick={handleSubmit}/>
    </form>
    );
  }
} 