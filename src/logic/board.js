import { WINNER_COMBOS } from "../constants";

export const chekWinner = (boarToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boarToCheck[a] &&
      boarToCheck[a] === boarToCheck[b] &&
      boarToCheck[a] === boarToCheck[c]
    ) {
      return boarToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};
