import * as actionTypes from "./actionTypes";
import { getMatchWinner } from "../../utility";
import { PLAYER_WINS, CPU_WINS, TIE_MATCH } from "../../constants";
import Axios from "axios";

export const initLoading = () => {
  return {
    type: actionTypes.INIT_LOADING
  };
};

export const finishLoading = () => {
  return {
    type: actionTypes.FINISH_LOADING
  };
};

export const setLastMoves = (cpuMove, playerMove) => {
  return {
    type: actionTypes.SET_LAST_MOVES,
    payload: { cpuMove: cpuMove, playerMove: playerMove }
  };
};

export const increaseCPUWins = () => {
  return {
    type: actionTypes.INCREASE_CPU_WINS
  };
};

export const increasePlayerWins = () => {
  return {
    type: actionTypes.INCREASE_PLAYER_WINS
  };
};

export const generateMatch = playerMove => {
  return (dispatch, getState) => {
    dispatch(initLoading());
    let prevPlayerMoves = getState().game.playerMoves.join("");

    return Axios.get(`https://smartplay.afiniti.com/v1/play/${prevPlayerMoves}`)
      .then(res => {
        dispatch(setLastMoves(res.data, playerMove));
        let winner = getMatchWinner(res.data, playerMove);
        if (winner === CPU_WINS) {
          dispatch(increaseCPUWins());
        } else if (winner === PLAYER_WINS) {
          dispatch(increasePlayerWins());
        }
        dispatch(finishLoading());
      })
      .catch(err => {});
  };
};
