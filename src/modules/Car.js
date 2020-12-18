import { NUMBER } from "../utils/constants.js";
import { getRandomNumber } from "../utils/util.js";

export default class Car {
  constructor(name) {
    this._name = name;
    this._step = 0;
  }

  move = () => {
    if (getRandomNumber() >= NUMBER.ADD_STEP_STANDARD) {
      this._step++;
    }
  };

  getName = () => {
    return this._name;
  };

  getStep = () => {
    return this._step;
  };
}
