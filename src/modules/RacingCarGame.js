import CarNameForm from "./CarNameForm.js";
import RacingCountForm from "./RacingCountForm.js";
import GameResultContainer from "./GameResultContainer.js";
import { ID } from "../utils/constants.js";
import { hideContainer, showContainer } from "../utils/domUtil.js";
import Car from "./Car.js";

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
    this.carNameForm = new CarNameForm(this.setPlayers);
    this.racingCountForm = new RacingCountForm(this.setCount);
    this.gameResultContainer = new GameResultContainer();
  };

  setPlayers = namesList => {
    this.gameStatus.players = namesList.map(name => new Car(name));

    showContainer(this.$racingCountContainer);
  };

  setCount = count => {
    this.gameStatus.count = count;

    showContainer(this.$gameResultContainer);
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
