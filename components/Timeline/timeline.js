import PropTypes from "prop-types";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./timeline.scss";
import { mapImages } from "../../constants";

export const Timeline = ({ lastPlays }) => {
  return (
    <div className="timeline">
      {lastPlays
        .slice(-3)
        .reverse()
        .map((play, idx) => {
          return (
            <div key={idx} className="timeline__event">
              <div className="timeline__event__player">
                <img src={mapImages[play.playerMove]} />
              </div>
              <hr />
              <div className="timeline__event__player">
                <img src={mapImages[play.cpuMove]} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

Timeline.propTypes = {
  lastPlays: PropTypes.array.isRequired
};

export default Timeline;
