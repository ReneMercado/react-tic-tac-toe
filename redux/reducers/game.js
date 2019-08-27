import * as actions from "../actions/actionTypes";

const initialState = {
  playerWins: 0,
  cpuWins: 0,
  lastPlays: [],
  playerMoves: [],
  lastCPUMove: {},
  loading: false
};

const reducerGame = (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_LOADING:
      return { ...state, loading: true };
    case actions.FINISH_LOADING:
      return { ...state, loading: false };
    case actions.SET_LAST_MOVES:
      return {
        ...state,
        lastCPUMove: action.payload.cpuMove,
        playerMoves: [...state.playerMoves, action.payload.playerMove],
        lastPlays: [
          ...state.lastPlays,
          {
            cpuMove: action.payload.cpuMove.nextBestMove,
            playerMove: action.payload.playerMove
          }
        ]
      };
    case actions.INCREASE_CPU_WINS:
      return {
        ...state,
        cpuWins: state.cpuWins + 1
      };
    case actions.INCREASE_PLAYER_WINS:
      return {
        ...state,
        playerWins: state.playerWins + 1
      };
    default:
      return state;
  }
};

export default reducerGame;
