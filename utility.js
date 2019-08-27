import {
  PLAYER_WINS,
  CPU_WINS,
  TIE_MATCH,
  OPTION_ROCK,
  OPTION_PAPER,
  OPTION_SCISSORS
} from "./constants";

//Returns true in case CPU is the winner
export const getMatchWinner = (cpuMove, playerMove) => {
  if (cpuMove.nextBestMove === playerMove) return TIE_MATCH;

  switch (cpuMove.nextBestMove) {
    case OPTION_ROCK:
      if (playerMove === OPTION_PAPER) {
        return PLAYER_WINS;
      }
      break;
    case OPTION_PAPER:
      if (playerMove === OPTION_SCISSORS) {
        return PLAYER_WINS;
      }
      break;
    case OPTION_SCISSORS:
      if (playerMove === OPTION_ROCK) {
        return PLAYER_WINS;
      }
      break;
    default:
      return TIE_MATCH;
  }

  return CPU_WINS;
};
