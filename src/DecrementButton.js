import React from "react";

import { FiArrowDown } from "react-icons/fi";

function DecrementButton(props) {
  return (
    <div>
      <button disabled={props.disabled} onClick={() => props.decrement(props.title)}>
        <FiArrowDown />
      </button>
    </div>
  );
}

export default DecrementButton;
