import React from "react";

import { FiArrowUp } from "react-icons/fi";

function IncrementButton(props) {
  return (
    <div>
      <button class="common-color arrows" disabled={props.disabled} onClick={() => props.increment(props.title)}>
        <FiArrowUp />
      </button>
    </div>
  );
}

export default IncrementButton;