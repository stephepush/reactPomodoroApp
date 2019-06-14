import React from "react";


const timerStyle ={
  color: "black",
  fontSize: "5rem",
  fontFamily: "DS-Digital",
}
class Timer extends React.Component {
  render() {
    return (
      <section id="time-left" class="boxes three">
        {/* Timer component (You send state down to me and I display it!) */}
        <p className="timer-display" style={timerStyle}> {this.props.minutes}:{this.props.seconds} </p>
      </section>
    );
  }
}

export default Timer;