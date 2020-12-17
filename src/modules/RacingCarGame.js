import CarNameForm from "./CarNameForm.js";
import RacingCountForm from "./RacingCountForm.js";
import GameResultContainer from "./GameResultContainer.js";
import { ID } from "../utils/constants.js";
import { hideContainer, showContainer } from "../utils/domUtil.js";

export default class RacingCarGame {
  constructor() {
    this.render();
  }

  getDOMElements = () => {
    this.$racingCountContainer = document.querySelector(
      `#${ID.RACING_COUNT_CONTAINER}`
    );
    this.$gameResultContainer = document.querySelector(
      `#${ID.GAME_RESULT_CONTAINER}`
    );
  };

  resetDOMElements = () => {
    hideContainer(this.$racingCountContainer);
    hideContainer(this.$gameResultContainer);
  };

  createNewComponent = () => {
    this.carNameForm = new CarNameForm();
    this.racingCountForm = new RacingCountForm();
    this.gameResultContainer = new GameResultContainer();
  };

  resetGameStatus = () => {
    this.gameStatus = { count: 0, players: [] };
  };

  render = () => {
    this.getDOMElements();
    this.resetDOMElements();
    this.resetGameStatus();
    this.createNewComponent();
  };
}
