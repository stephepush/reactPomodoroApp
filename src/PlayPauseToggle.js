import React from "react";
import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";

class PlayPauseToggle extends React.Component {
  render() {
    return (
      <section className="boxes four">
        <button className="common-color play-pause" onClick={this.props.status}>
          <FiPlay size={70}/>
          <FiPause size={70}/>
        </button>
      </section>
    );
  }
}

export default PlayPauseToggle;