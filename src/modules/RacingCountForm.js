import { ID } from "../utils/constants.js";
import { isValidRacingCount } from "../utils/validations.js";

export default class RacingCountForm {
  constructor(setCount) {
    this.setCount = setCount;

    this.render();
  }

  handleRacingCountButton = () => {
    const $racingCountInput = document.querySelector(
      `#${ID.RACING_COUNT_INPUT}`
    );
    const racingCount = Number($racingCountInput.value);

    if (!isValidRacingCount($racingCountInput, racingCount)) {
      return;
    }

    this.setCount(racingCount);
  };

  render = () => {
    const $racingCountButton = document.querySelector(
      `#${ID.RACING_COUNT_BUTTON}`
    );
    $racingCountButton.addEventListener("click", this.handleRacingCountButton);
  };
}
