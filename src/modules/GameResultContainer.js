import { playerHTML, winnerHTML } from "../utils/templates.js";

export default class GameResultContainer {
  constructor(getPlayers, getWinners) {
    this.getPlayers = getPlayers;
    this.getWinners = getWinners;
  }

  createResultHTML = () => {
    const players = this.getPlayers();
    const result = players
      .map(player => {
        return playerHTML(player.getName(), player.getStep());
      })
      .join("");

    return `<div>${result}</div>`;
  };

  createWinnerHTML = () => {
    const winners = this.getWinners().map(winner => winner.getName());

    return winnerHTML(winners);
  };
}
