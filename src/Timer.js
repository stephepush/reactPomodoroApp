import React from "react";


const timerStyle ={
  color: "black",
  fontSize: "7rem",
  fontFamily: "DS-Digital",
}
const sessionTextStyle = {
  color: "white",
  fontFamily:"DS-Digital",
  
}
class Timer extends React.Component {
  render() {
    return (
      <section id="time-left" className="boxes three">
        {/* Timer component (You send state down to me and I display it!) */}
        <h3 style={sessionTextStyle} class="sessionText" id="timer-label">{this.props.timerType} Timer:</h3>
        <p className="timer-display" style={timerStyle}> {this.props.minutes}:{this.props.seconds} </p>
      </section>
    );
  }
}

export default Timer;