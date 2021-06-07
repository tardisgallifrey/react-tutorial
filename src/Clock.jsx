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
        <div class="Clock">
          <h1>Today's Clock</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;

