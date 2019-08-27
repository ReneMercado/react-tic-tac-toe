import reducer from "../game";
import * as actionTypes from "../../actions/actionTypes";

describe("Game Reducer", () => {
  let initialState = {
    playerWins: 0,
    cpuWins: 0,
    lastPlays: [],
    playerMoves: [],
    lastCPUMove: {},
    loading: false
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      playerWins: 0,
      cpuWins: 0,
      lastPlays: [],
      playerMoves: [],
      lastCPUMove: {},
      loading: false
    });
  });

  it("should init loading", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.INIT_LOADING
      })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });

  it("should finish loading", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FINISH_LOADING
      })
    ).toEqual({
      ...initialState,
      loading: false
    });
  });

  it("should set last moves", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_LAST_MOVES,
        payload: {
          cpuMove: { nextBestMove: "P", reason: "Test Reason" },
          playerMove: "R"
        }
      })
    ).toEqual({
      ...initialState,
      lastCPUMove: { nextBestMove: "P", reason: "Test Reason" },
      playerMoves: ["R"],
      lastPlays: [
        ...initialState.lastPlays,
        {
          cpuMove: "P",
          playerMove: "R"
        }
      ]
    });
  });

  it("should increase cpu wins by 1", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.INCREASE_CPU_WINS
      })
    ).toEqual({
      ...initialState,
      cpuWins: initialState.cpuWins + 1
    });
  });

  it("should increase player wins by 1", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.INCREASE_PLAYER_WINS
      })
    ).toEqual({
      ...initialState,
      playerWins: initialState.playerWins + 1
    });
  });
});
