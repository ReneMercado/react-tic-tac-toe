import { connect } from "react-redux";
import Results from "./results";

const mapStateToProps = state => {
  return {
    playerWins: state.game.playerWins,
    cpuWins: state.game.cpuWins,
    lastCPUMove: state.game.lastCPUMove
  };
};

export default connect(mapStateToProps)(Results);
