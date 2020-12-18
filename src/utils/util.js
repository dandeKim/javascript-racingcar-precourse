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

export const getMaxStep = cars => {
  const allSteps = cars.map(car => car.getStep());

  return Math.max.apply(null, allSteps);
};
