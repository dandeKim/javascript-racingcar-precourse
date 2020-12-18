import { NUMBER } from "./constants.js";

export const getCarNamesList = carNamesString => {
  return carNamesString.split(",").map(name => name.trim());
};

export const getRandomNumber = () => {
  return (
    Math.floor(Math.random() * NUMBER.MAX_RANDOM_NUMBER) +
    NUMBER.MIN_RANDOM_NUMBER
  );
};
