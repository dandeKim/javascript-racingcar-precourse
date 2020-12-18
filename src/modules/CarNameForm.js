import { ID } from "../utils/constants.js";
import { getCarNamesList } from "../utils/util.js";
import { isValidCarNames } from "../utils/validations.js";

export default class CarNameForm {
  constructor(setPlayers) {
    this.setPlayers = setPlayers;

    this.render();
  }

  handleCarNamesButton = () => {
    const $carNamesInput = document.querySelector(`#${ID.CAR_NAMES_INPUT}`);
    const carNamesList = getCarNamesList($carNamesInput.value);

    if (!isValidCarNames($carNamesInput, carNamesList)) {
      return;
    }

    this.setPlayers(carNamesList);
  };

  render = () => {
    const $carNamesButton = document.querySelector(`#${ID.CAR_NAMES_BUTTON}`);
    $carNamesButton.addEventListener("click", this.handleCarNamesButton);
  };
}
