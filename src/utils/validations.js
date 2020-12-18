import { NUMBER, ALERT } from "../utils/constants.js";
import { showAlertMessage } from "../utils/domUtil.js";

const isVaildCarNameLength = carNamesList => {
  return carNamesList.every(
    name => name.length <= NUMBER.MAX_CAR_NAME_LENGTH && name.length > 0
  );
};

const isUniqueCarNames = carNamesList => {
  const uniqueSet = [...new Set(carNamesList)];
  return carNamesList.length === uniqueSet.length;
};

const isMoreThanTwoCars = carNamesList => {
  return carNamesList.length > 1;
};

export const isValidCarNames = ($input, namesList) => {
  let isValid = true;

  if (!isVaildCarNameLength(namesList) || !isMoreThanTwoCars(namesList)) {
    showAlertMessage($input, ALERT.NAME_INPUT_ALERT);
    isValid = false;
  }

  if (!isUniqueCarNames(namesList)) {
    showAlertMessage($input, ALERT.DUPLICATED_NAME_ALERT);
    isValid = false;
  }

  return isValid;
};
