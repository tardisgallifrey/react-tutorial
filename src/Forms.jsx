import React from 'react';
import {render} from 'react-dom';

//A controlled Component
//Makes React be the source of 'truth' for the states in
//Forms
export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      //Fill this in at '' if you want a default entry
      this.state = {value: 'dave'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    //Here we rende a form's HTML with events added
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


/*Since the value attribute is set on our form element, 
the displayed value will always be this.state.value, 
making the React state the source of truth. 

Since handleChange runs on every keystroke to update the React state, 
the displayed value will update as the user types.

With a controlled component, 
the input’s value is always driven by the React state. 
While this means you have to type a bit more code, 
you can now pass the value to other UI elements too, 
or reset it from other event handlers.--From Reactjs.org*/

//A <textarea> (text blob) form component
export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

//A Select Form (drop down list)
export class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    //a default choice goes here
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

//A Select Form (drop down list) that uses an array
//for selection options
export class FlavorForm2 extends React.Component {
  constructor(props) {
    super(props);
    //a default choice goes here
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select multiple={true} value={['A', 'B', 'C']}>
          </select>
        </label>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}