export const playerHTML = (name, step) => {
  return `<p>${name}: ${"-".repeat(step)}</p>`;
};

export const winnerHTML = winners => {
  return `<p>최종 우승자: ${winners.join(", ")}</p>`;
};
