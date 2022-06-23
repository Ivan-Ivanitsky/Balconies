const btnAll = document.querySelectorAll("button");
const btnCalc = Object.values(btnAll).filter((btn) => {
  if (
    btn.classList.contains("popup_calc_button") ||
    btn.classList.contains("popup_calc_profile_button")
  ) {
    return btn;
  }
});

function btnDisabled() {
  console.log("tru");
  btnCalc.forEach((btn) => {
    btn.setAttribute("disabled", true);
    btn.style.cssText = `background: #bbbbbb;
    color: #5b5050;
    box-shadow: none;
    border: none;
    transition:0.5s
    `;
  });
}

function btnEnabled() {
  btnCalc.forEach((btn) => {
    btn.removeAttribute("disabled");
    btn.style.cssText = `
    transition:0.5s
        `;
  });
}

export { btnDisabled, btnEnabled };
