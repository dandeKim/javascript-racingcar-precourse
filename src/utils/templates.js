export const playerHTML = (name, step) => {
  return `<p>${name}: ${"-".repeat(step)}</p>`;
};

export const winnerHTML = winners =>
  `<p>최종 우승자: ${winners.join(", ")}</p>`;
