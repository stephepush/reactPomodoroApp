import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

function Label(props) {
  return (
    <div>
      <h2 class="common-color">
        <IncrementButton
          
          increment={props.increment}
          title={props.title}
          disabled={props.isPaused === true ? false : true}
        />
        {props.title + " Length"}
        <br />
        
        <DecrementButton
          decrement={props.decrement}
          title={props.title}
          disabled={props.isPaused === true ? false : true}
        />
      </h2>
      <p class="common-color">{props.value}</p>
    </div>
  );
}

export default Label;
