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

  render = () => {
    this.getDOMElements();
    this.resetDOMElements();
  };
}
