const form = document.querySelector("main form");
const submitDiv = document.querySelector(".submit");
const input = document.querySelector('.submit input[type="text"]');

form.onsubmit = () => {
  if (input.value == "") {
    if (submitDiv.classList.contains("error-validation")) {
      submitDiv.classList.remove("error-validation");
      submitDiv.classList.add("error-empty");
    } else {
      submitDiv.classList.add("error-empty");
    }
    return false;
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.value
    )
  ) {
    if (submitDiv.classList.contains("error-empty")) {
      submitDiv.classList.remove("error-empty");
      submitDiv.classList.add("error-validation");
    } else {
      submitDiv.classList.add("error-validation");
    }
    return false;
  } else {
    return true;
  }
};
