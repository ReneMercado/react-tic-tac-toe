import React, { Component } from "react";
import PropTypes from "prop-types";
import "./options.scss";
import RockImg from "../../assets/images/rock.png";
import PaperImg from "../../assets/images/paper.png";
import ScissorsImg from "../../assets/images/scissors.png";
import { OPTION_ROCK, OPTION_PAPER, OPTION_SCISSORS } from "../../constants";

export class Options extends Component {
  onClickOption = playerMove => {
    if (!this.props.loading) {
      this.props.generateMatch(playerMove);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="options">
          <img
            onClick={() => this.onClickOption(OPTION_ROCK)}
            className="options__rock"
            src={RockImg}
          />
          <img
            onClick={() => this.onClickOption(OPTION_PAPER)}
            className="options__paper"
            src={PaperImg}
          />
          <img
            onClick={() => this.onClickOption(OPTION_SCISSORS)}
            className="options__scissors"
            src={ScissorsImg}
          />
        </div>
        {this.props.lastCPUMove ? (
          <span className="cpu-reason">{this.props.lastCPUMove.reason}</span>
        ) : null}
      </React.Fragment>
    );
  }
}

Options.propTypes = {
  loading: PropTypes.bool.isRequired,
  generateMatch: PropTypes.func.isRequired,
  lastCPUMove: PropTypes.shape({
    reason: PropTypes.string
  })
};

export default Options;
