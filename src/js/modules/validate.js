const inputString = sortStringInput();
let error = null;

function sortStringInput() {
  const input = document.querySelectorAll("input");
  return Object.values(input).filter((el, i) => {
    if (el.name === "user_name") {
      return el;
    }
  });
}

function createError(i) {
  if (!error) {
    const err = document.createElement("span");
    err.classList.add("error");
    err.textContent = "Введите ваше имя ";
    err.style.color = "red";
    inputString[i].insertAdjacentElement("beforebegin", err);
  }
}

function clearError() {
  if (error) {
    const errors = document.querySelector(".error");
    errors.remove();
    error = null;
  } else {
    return;
  }
}

function validString(i) {
  let regString = /\d/g;
  let valid = true;
  if (inputString[i].value.match(regString)) {
    createError(i);
    valid = false;
    error = true;
  } else {
    valid = true;
    clearError();
  }
  return valid;
}

export { validString };
