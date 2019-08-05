import React from "react";

import { FiRefreshCcw } from "react-icons/fi";

class ResetButton extends React.Component {
  render() {
    return (
      <section className="boxes five">
        <button className="common-color reset" onClick={this.props.reset}>
          <FiRefreshCcw size={70}/>
        </button>
      </section>
    );
  }
}

export default ResetButton;