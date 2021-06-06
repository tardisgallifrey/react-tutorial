import React from 'react';


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

