import React from 'react';

//Event handler used in JavaScript class Component (ES6)
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      //sets default state??
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      //There are other methods to bind the event handler in the lesson
      //on event handlers, but this seems logical and simpler than those
      this.handleClick = this.handleClick.bind(this);
    }
  
    //Event handler
    //reads sets state of isToggleOn opposite of 
    //current state????
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    //Renders button
    //calls event handler method of Toggle Component
    //sets value of Button to current state of isToggleOn
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  export default Toggle;

  //Not a functional class Component
  //Just an example to show how to return 
  //a parameter with the event handler call
  class MoreOnEventHandlers extends React.Component{
    constructor(props) {
        super(props);
    
       
      }
    

        render(){
            return(
                //These two are equal methods to return parameter with event
                //handler method call
                <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>, //Arrow function style
                <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> //Function.prototype.bind style
            );
        }
  }
