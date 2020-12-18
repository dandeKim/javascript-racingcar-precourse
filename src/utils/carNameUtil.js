export const getCarNamesList = carNamesString => {
  return carNamesString.split(",").map(name => name.trim());
};
