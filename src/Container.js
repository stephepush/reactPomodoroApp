import React from "react";

import PlayPauseToggle from "./PlayPauseToggle";
import ResetButton from "./ResetButton";
import Label from "./Label";
import Timer from "./Timer";
//import { FiClock } from "react-icons/fi";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionSecondsRemaining: 1500, //in raw seconds
      breakSecondsRemaining: 300, //in raw seconds
      sessionLength: 25, //in minutes
      breakLength: 5, // in minutes
      displaySeconds: "",
      displayMinutes: "",
      //playing: false,
      pause: true
    };
    //this.sessionCountDown=this.sessionCountDown.bind(this);
  }

  alarmSound = new Audio(
    "https://res.cloudinary.com/dmkct6wfu/video/upload/v1557109540/pomodoroAppAssets/alarm.mp3"
  ); //js audio object that handles playing the alarm sound

  secondsToHms(d) {
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);

    var mDisplay = m < 10 ? "0" + m.toString() : m.toString();

    var sDisplay = s < 10 ? "0" + s.toString() : s.toString(); 
    /*
        both vars sDisplay and mDisplay 
        start as numbers but are converted to string values.
        The function converts raw numbers, and if the value
        is less than 10 from either display variable, the function
        will display a single digit value. A string 
        value of "0" is concatenated to the string converted numerical value to
        pad the value out.
    */ 

    this.setState(prevState => ({
      displayMinutes: mDisplay, //sets state.displayMinutes value to mDisplay
      displaySeconds: sDisplay //Sets state.displaySeconds value to sDisplay
    }));
  }

    

    incrementItem = labelTitle => {
        switch (labelTitle) {
            case 'Session':
                if (this.state.sessionLength < 60 && this.state.pause){
                    this.setState(prevState => ({
                        sessionLength: prevState.sessionLength + 1,
                        sessionSecondsRemaining: prevState.sessionSecondsRemaining + 60
                    }))  
                };
                break;
            case 'Break':
                if (this.state.breakLength < 60 && this.state.pause){
                    this.setState(prevState => ({
                        breakLength: prevState.breakLength + 1,
                        breakSecondsRemaining: prevState.breakSecondsRemaining + 60
                    }))  
                };
                break;
            default: break;
        }  
    }

    decrementItem = labelTitle => {
        switch (labelTitle){
            case 'Session':
                if (this.state.sessionLength > 1 && this.state.pause){
                    this.setState(prevState => ({
                        sessionLength: prevState.sessionLength - 1,
                        sessionSecondsRemaining: prevState.sessionSecondsRemaining - 60
                    }))
                };
                break;
            case 'Break':
                if (this.state.breakLength > 1 && this.state.pause) {
                    this.setState(prevState => ({
                        breakLength: prevState.breakLength - 1,
                        breakSecondsRemaining: prevState.breakSecondsRemaining - 60
                    }))
                };
                break;
            default: break;
        }
    }

  sessionTimeSetter = () => {
    let readableSessionTime = this.secondsToHms(
      this.state.sessionSecondsRemaining
    );
    this.setState({
      sessionSecondsRemaining: this.state.sessionSecondsRemaining - 1,
      sessionTime: readableSessionTime - 1
    });
  };

  breakTimeSetter = () => {
    let readableBreakTime = this.secondsToHms(this.state.breakSecondsRemaining);
    this.setState({
      breakSecondsRemaining: this.state.breakSecondsRemaining - 1,
      breakTime: readableBreakTime - 1
    });
  };
  sessionCountDown = interval => setInterval(interval, 1000);
  breakCountDown = (interval) => setInterval(interval, 1000);
  timers = (interval) => this.sessionCountDown(interval);

  componentDidMount(){
    this.sessionCountDown = setInterval(this.sessionIntervalCount, 1000);
    //this.breakCountDown = setInterval(this.breakIntervalCount, 1000);
    //this.timers(this.sessionIntervalCount).then(this.breakCountDown = setInterval(this.breakIntervalCount))
  };

  sessionIntervalCount = () => {
    this.state.pause === false && this.sessionTimeSetter();
    console.log(
        "outputs literals for session interval",
      "display minutes string: " + this.state.diplayMinutes + "|",
      "display seconds string: " + this.state.displaySeconds + "|",
      "int: " + this.state.sessionSecondsRemaining + "|",
      "end of outputting literals for session interval"

    );
    console.log(
        "outputs typeofs of literal output for session interval",
      "  display minutes string typeof: " + typeof this.state.displayMinutes + "|",
      "  displayseconds string typeof: " + typeof this.state.displaySeconds + "|",
      "int typeof: " + typeof this.state.sessionSecondsRemaining + "|"
    );
    if (
      this.state.displayMinutes === "00" &&
      this.state.displaySeconds === "00"
    ) {
      clearInterval(this.sessionCountDown);
      this.playAlarm();
      this.breakCountDown(this.breakIntervalCount);
    }
  };

  breakIntervalCount = () => {
    this.state.pause === false && this.breakTimeSetter();
    /* console.log(
      "display minutes string: " + this.state.displayMinutes,
      "display seconds string: " + this.state.displaySeconds,
      "int: " + this.state.breakSecondsRemaining
    );
    console.log(
      "string displayMinutes typeof: " + typeof this.state.displayMinutes,
      "string displaySeconds typeof: " + typeof this.state.displaySeconds,
      "int typeof " + typeof this.state.sessionSecondsRemaining
    ); */
    if (
      this.state.displayMinutes === "00" &&
      this.state.displaySeconds === "00"
    ) {
      clearInterval(this.breakCountDown);
      this.playAlarm();
      this.sessionCountDown(this.sessionIntervalCount);
    }
  };

  playAlarm = () => {
    this.alarmSound.play();
  };

  togglePause = () => {
    this.setState({
      pause: !this.state.pause
    });
  };

  resetClock = () => {
    this.setState({
      sessionSecondsRemaining: 1500,
      sessionLength: 25,
      breakSecondsRemaining: 300,
      breakLength: 5
    });
  };
    
  render() {
    return (
      <div>
        Session time raw seconds: {this.state.sessionSecondsRemaining}
        <br />
        Break time raw seconds: {this.state.breakSecondsRemaining}
        <br />
        Display time: {this.state.displayMinutes}:{this.state.displaySeconds}
        <h1>Pomodoro Clock!</h1>
        <Label
          title="Break"
          id="break-label"
          value={this.state.breakLength}
          increment={this.incrementItem}
          decrement={this.decrementItem}
          isPaused={this.state.pause}
        />
        <Label
          title="Session"
          id="session-label"
          value={this.state.sessionLength}
          increment={this.incrementItem}
          decrement={this.decrementItem}
          isPaused={this.state.pause}
        />
        <Timer
          minutes={this.state.displayMinutes}
          seconds={this.state.displaySeconds}
        />
        {/*session ints: {this.state.sessionSecondsRemaining}
        session string: {this.state.displaySeconds}
    session ints typeof:*/}
        <PlayPauseToggle status={this.togglePause} />
        <ResetButton reset={this.resetClock} />
      </div>
    );
  }
}

export default Container;
