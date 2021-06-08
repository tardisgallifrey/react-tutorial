import React from 'react';

//This function is here only for reference
//It cannot be called correctly as it is written
//But, this is where the lesson begins on state and lifecycle
//See the final component below

function tick() {
  return(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(tick, 1000);

//I could not make the non-state Tick function work at all
//After wasting much time, I just moved on to the state and lifecycle
//lesson and it fixed clock so that it will work from its own Component JSX file
class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

        //Lifecycle function sets up timer for clock
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
        //Lifecycle counter clears timer
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //More or less, the original tick function 
    tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
      return (
        <div className="Clock">
          <h1>Today's Clock</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;

  function somestaterules(){

      //None of this is active code.  Just for reference
      //DO NOT MODIFY state DIRECTLY

    // Wrong
    this.state.comment = 'Hello';

    //ALWAYS USE setState()
    // Correct
    this.setState({comment: 'Hello'});

    //state MAY BE ASYNCHRONOUS
    //For example, this code may fail to update the counter:

    // Wrong
    this.setState({counter: this.state.counter + this.props.increment,});

    // Correct, this form uses a function call, arrow function here
    this.setState((state, props) => ({
        counter: state.counter + props.increment
        }));

    // Correct as well.  Regular function
    this.setState(function(state, props) {
      return {
          counter: state.counter + props.increment
          };
      });

      //A component may choose to pass its state down as props to its child components:

      <FormattedDate date={this.state.date} />

      //The FormattedDate component would receive the date in its props and
      //wouldn’t know whether it came from the Clock’s state, 
      //from the Clock’s props, or was typed by hand:

      function FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
      }

      //In React apps, whether a component is stateful or stateless 
      //is considered an implementation detail of the component that 
      //may change over time. You can use stateless components 
      //inside stateful components, and vice versa.
  }

