import React from 'react';


//Had a real problem getting the beginning of the conditional rendering section to work
//Found this example set that works so far
//  https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/#ifelse
class Condition1 extends React.Component {
  constructor(props) {
    super(props);

    //This is a state object with three properties
    this.state = {
      text: '',
      inputText: '',
      mode: 'view'
    };

    //Bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  //Event method?
  //handles a value on Change in text input
  // e is the text sent and we set inputText to that value
  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  //Event method
  handleSave() {
    this.setState({ text: this.state.inputText, mode: 'view' });
  }

  //Event method
  handleEdit() {
    this.setState({ mode: 'edit' });
  }

  //And, render the output based on whether mode; equals view or edit
  render() {
    //View mode renders the text and an Edit button
    if (this.state.mode === 'view') {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>
            Edit
          </button>
        </div>
      );
    } else {

      //Else, enter an input box and a save button
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <input
            onChange={this.handleChange}
            value={this.state.inputText}
          />
          <button onClick={this.handleSave}>
            Save
          </button>
        </div>
      );
    }
  }
}
export default Condition1;


class Condition_Better extends React.Component {
  constructor(props) {
    super(props);

    //This is a state object with three properties
    this.state = {
      text: '',
      inputText: '',
      mode: 'view'
    };

    //Bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  //Event method?
  //handles a value on Change in text input
  // e is the text sent and we set inputText to that value
  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  //Event method
  handleSave() {
    this.setState({ text: this.state.inputText, mode: 'view' });
  }

  //Event method
  handleEdit() {
    this.setState({ mode: 'edit' });
  }

  //Build Conditional Render methods instead

  //One for the Input Field Box
  renderInputField() {
    if(this.state.mode === 'view') {
      //return <div></div>;
      //changed in favor of null
      //See class below
      
    } else {
      return (
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          </p>
      );
    }
  }
  
  //One for the Button
  renderButton() {
    if(this.state.mode === 'view') {
      return (
          <button onClick={this.handleEdit}>
            Edit
          </button>
      );
    } else {
      return (
          <button onClick={this.handleSave}>
            Save
          </button>
      );
    }
  }

  //Main render now renders methods instead of all the HTML/JavaScript
  render () {
    return (
      <div>
        <p>Text: {this.state.text}</p>
        {this.renderInputField()}
        {this.renderButton()}
      </div>
    );
  }
}
export {Condition_Better};

function IfOrSwitch() {

  //You can do this, but
  if (this.state.mode === 'a') {
    // ...   
  } else if (this.state.mode === 'b') {
    // ...
  } else if (this.state.mode === 'c') {
    // ...
  } else {
    // ...
  }

  //Switch/Case is better
  switch(this.state.mode) {
    case 'a':
      // ...
    case 'b':
      // ...
    case 'c':
      // ...
    default:
      // equivalent to the last else clause ...
  }

}

class Number extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  
  render() {
    if(this.props.number % 2 == 0) {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    } else {
      //Notice the return null value
      return null;
    }
  }
}

class Condition_Null extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  
  onClick(e) {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <Number number={this.state.count} />
        <button onClick={this.onClick.bind(this)}>Count</button>
      </div>
    )
  }
}
export {Condition_Null};