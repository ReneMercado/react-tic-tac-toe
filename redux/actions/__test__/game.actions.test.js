import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../game";
import * as actionTypes from "../../actions/actionTypes";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Game Actions", () => {
  let initialState = {
    playerWins: 0,
    cpuWins: 0,
    lastPlays: [],
    playerMoves: [],
    lastCPUMove: {},
    loading: false
  };

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should return initLoading action", () => {
    let expectedAction = {
      type: actionTypes.INIT_LOADING
    };
    expect(expectedAction).toEqual(actions.initLoading());
  });

  it("should return finishLoading action", () => {
    let expectedAction = {
      type: actionTypes.FINISH_LOADING
    };
    expect(expectedAction).toEqual(actions.finishLoading());
  });

  it("should return setLastMoves action", () => {
    let cpuMove = {
      nextBestMove: "P",
      reason: "Test Reason"
    };
    let playerMove = "R";
    let expectedAction = {
      type: actionTypes.SET_LAST_MOVES,
      payload: { cpuMove, playerMove }
    };

    expect(expectedAction).toEqual(actions.setLastMoves(cpuMove, playerMove));
  });

  it("should return increaseCPUWins action", () => {
    let expectedAction = {
      type: actionTypes.INCREASE_CPU_WINS
    };
    expect(expectedAction).toEqual(actions.increaseCPUWins());
  });

  it("should return increasePlayerWins action", () => {
    let expectedAction = {
      type: actionTypes.INCREASE_PLAYER_WINS
    };
    expect(expectedAction).toEqual(actions.increasePlayerWins());
  });

  it("should generate match actions where CPU WIN", () => {
    moxios.stubRequest("https://smartplay.afiniti.com/v1/play/", {
      status: 200,
      response: {
        nextBestMove: "P",
        reason: "Test Reason"
      }
    });

    let cpuMove = {
      nextBestMove: "P",
      reason: "Test Reason"
    };
    let playerMove = "R";

    const expectedActions = [
      { type: actionTypes.INIT_LOADING },
      { type: actionTypes.SET_LAST_MOVES, payload: { cpuMove, playerMove } },
      { type: actionTypes.INCREASE_CPU_WINS },
      { type: actionTypes.FINISH_LOADING }
    ];

    const store = mockStore({
      game: {
        playerWins: 0,
        cpuWins: 0,
        lastPlays: [],
        playerMoves: [],
        lastCPUMove: {},
        loading: false
      }
    });

    return store.dispatch(actions.generateMatch(playerMove)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should generate match actions where Player WIN", () => {
    moxios.stubRequest("https://smartplay.afiniti.com/v1/play/", {
      status: 200,
      response: {
        nextBestMove: "P",
        reason: "Test Reason"
      }
    });

    let cpuMove = {
      nextBestMove: "P",
      reason: "Test Reason"
    };

    let playerMove = "S";

    const expectedActions = [
      { type: actionTypes.INIT_LOADING },
      { type: actionTypes.SET_LAST_MOVES, payload: { cpuMove, playerMove } },
      { type: actionTypes.INCREASE_PLAYER_WINS },
      { type: actionTypes.FINISH_LOADING }
    ];

    const store = mockStore({
      game: {
        playerWins: 0,
        cpuWins: 0,
        lastPlays: [],
        playerMoves: [],
        lastCPUMove: {},
        loading: false
      }
    });

    return store.dispatch(actions.generateMatch(playerMove)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
