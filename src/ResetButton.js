import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

class ResetButton extends React.Component {
  render() {
    return (
      <section class="boxes four">
        <button class="common-color" onClick={this.props.reset}>
          <FiRefreshCcw />
        </button>
      </section>
    );
  }
}

export default ResetButton;