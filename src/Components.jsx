import React from 'react';


//This is the simplest form of a component
//You must import it into App.jsx to use it
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
export default Welcome;


//This is an ES6 formatted JSX function
//It is equivalent to the one above
class Welcome1 extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
export {Welcome1};




//A Component goes into its own JSX file
//A Component does need to import React, but not ReactDOM
//A Component does not use a .render() function
//A Component must end with an export of some type.  Maybe multiple?