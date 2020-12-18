import { ID } from "../utils/constants.js";
import { playerHTML } from "../utils/templates.js";

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
}
