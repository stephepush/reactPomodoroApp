import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

class ResetButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.reset}>
          <FiRefreshCcw />
        </button>
      </div>
    );
  }
}

export default ResetButton;