import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

function Label(props) {
  return (
    <section>
      <h2 class="common-color box">{props.title + " Length"}</h2>
      <div class="incDecContainer box">
        <p class="common-color arrow-ui">
          <IncrementButton
            increment={props.increment}
            title={props.title}
            disabled={props.isPaused === true ? false : true}
          />
        </p>
        <p class="common-color arrow-ui">{props.value}</p>
        <p class="common-color arrow-ui">
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
