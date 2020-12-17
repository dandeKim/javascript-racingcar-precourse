export const showContainer = $container => {
  $container.classList.add("active");
};

export const hideContainer = $container => {
  $container.classList.remove("active");
};

export const showAlertMessage = ($input, message) => {
  alert(message);
  $input.value = "";
  $input.focus();
};
