import { connect } from "react-redux";
import Timeline from "./timeline";

const mapStateToProps = state => {
  return {
    lastPlays: state.game.lastPlays
  };
};

export default connect(mapStateToProps)(Timeline);
