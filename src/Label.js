import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

function Label(props) {
  return (
    <section className="boxes">
      <h2 className="common-color box lengthName">{props.title + " Length"}</h2>
      <div className="incDecContainer box">
        <p className="common-color arrow-ui">
          <IncrementButton
            increment={props.increment}
            title={props.title}
            disabled={props.isPaused === true ? false : true}
          />
        </p>
        <p className="common-color arrow-ui lengthValue">{props.value}</p>
        <p className="common-color arrow-ui">
          <DecrementButton
            decrement={props.decrement}
            title={props.title}
            disabled={props.isPaused === true ? false : true}
          />
        </p>
      </div>
      <br />
      
    </section>
  );
}

export default Label;
