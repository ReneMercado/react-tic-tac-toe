import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import Options from "./options";

const mapStateToProps = state => {
  return {
    lastCPUMove: state.game.lastCPUMove,
    loading: state.game.loading,
    lastCPUMove: state.game.lastCPUMove
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generateMatch: playerMove => dispatch(actions.generateMatch(playerMove))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
