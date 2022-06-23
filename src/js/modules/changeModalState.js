export { changeModalState };
import { checkNum } from "./checkNumInput";
import { btnDisabled, btnEnabled } from "./btnDisabledEnabled";

const changeModalState = (state) => {
  const windowsForm = document.querySelectorAll(".balcon_icons_img "),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowViewType = document.querySelectorAll("#view_type"),
    windowLabelAll = document.querySelectorAll(".checkbox");

  checkNum("#width");
  checkNum("#height");

  function bindActionToElem(event, elem, prop) {
    let checkbox = "";
    const width = document.getElementById("width"),
      heigth = document.getElementById("height");

    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        if ((width.value !== "" && heigth.value !== "") || checkbox !== "") {
          console.log("true");
          btnEnabled();
        } else {
          btnDisabled();
        }
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                if (i === j) {
                  box.checked = true;
                  checkbox = "Холодное";
                } else {
                  box.checked = false;
                  checkbox = "Теплое";
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }
  bindActionToElem("click", windowsForm, "form");
  bindActionToElem("input", windowWidth, "height");
  bindActionToElem("input", windowHeight, "weight");
  bindActionToElem("change", windowViewType, "profile");
  bindActionToElem("change", windowLabelAll, "type");
};
