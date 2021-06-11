import React from 'react';


//Had a real problem getting the beginning of the conditional rendering section to work
//Found this example set that works so far
//  https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/#ifelse

//a class that renders based on a condition (a user choice)
class Condition1 extends React.Component {
  constructor(props) {
    super(props);

    //This is an object with three properties
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

  //And, render the output based on whether mode equals view or edit
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



//A better version
//creates two render functions, then Render just points 
//to the correct function
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
  //renderInputField() {
    //if(this.state.mode === 'view') {
      //return null;
      //return <div></div>;
      //changed in favor of null
      //See class below
      
    //} else {
      //return (
          //<p>
            //<input
              //onChange={this.handleChange}
              //value={this.state.inputText}
            ///>
          ///</p>
      //);
    //}
  //}
  
  //One for the Button
  //renderButton() {
    //if(this.state.mode === 'view') {
      //return (
         // <button onClick={this.handleEdit}>
            //Edit
          //</button>
      //);
    //} else {
      //return (
          //<button onClick={this.handleSave}>
           // Save
          //</button>
      //);
    //}
  //}

  ///These functions now use variables to determine rendering on condition
  renderInputField() {
    let input;
    
    if(this.state.mode !== 'view') {
      input = 
        <p>
          <input
            onChange={this.handleChange}
            value={this.state.inputText} />
        </p>;
    }
      //We now return an empty variable, or a full variable
      return input;
  }
  
  //This works the same way with the button variable
  renderButton() {
    let button;
    
    if(this.state.mode === 'view') {
      button =
          <button onClick={this.handleEdit}>
            Edit
          </button>;
    } else {
      button =
          <button onClick={this.handleSave}>
            Save
          </button>;
    }
    
    return button;
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

//this class helps with the class below
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

//using Null to hide a renderable element
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

//Now, a final solution that uses condition statements 
class Condition_Best extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', mode:'view'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }
  
  handleSave() {
    this.setState({text: this.state.inputText, mode: 'view'});
  }

  handleEdit() {
    this.setState({mode: 'edit'});
  }
  
  render () {
    const view = this.state.mode === 'view';
    
    //Condition statement view ? null : render_something
    //braces are required, parentheses helpful

    //If your choice  is rendersomething or nothing, you may use
    //  { !view && render_something }
    return (
      <div>
        <p>Text: {this.state.text}</p>
        
        {
          view
          ? null
          : (
            <p>
              <input
                onChange={this.handleChange}
                value={this.state.inputText} />
            </p>
          )
        }
        
        <button
          onClick={
            view 
              ? this.handleEdit 
              : this.handleSave
          }
        >
          {view ? 'Edit' : 'Save'}
        </button>
      </div>
    );
  }
}
export {Condition_Best}

//There are many more different methods to do conditional rendering
//However, for a beginning tutorial, I've probably already taken it too far