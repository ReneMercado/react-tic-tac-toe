import PropTypes from "prop-types";
import React from "react";
import "./results.scss";

export const Results = ({ playerWins, cpuWins }) => {
  return (
    <div className="results">
      <div className="results__marker">
        <div className="results__marker__player-name">Me</div>
        <div className="results__marker__player-score">{playerWins}</div>
      </div>
      <span>-</span>
      <div className="results__marker">
        <div className="results__marker__player-name">CPU</div>
        <div className="results__marker__player-score">{cpuWins}</div>
      </div>
    </div>
  );
};

Results.propTypes = {
  playerWins: PropTypes.number.isRequired,
  cpuWins: PropTypes.number.isRequired
};

export default Results;
