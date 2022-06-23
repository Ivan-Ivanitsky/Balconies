import "./slider.js";
import { modals } from "./modules/modals";
import { tabs } from "./modules/tabs";
import { form } from "./modules/forms";
import { changeModalState } from "./modules/changeModalState";
import { timer } from "./modules/timer";
import { images } from "./modules/images";
// import "animate.css";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = {};
  let modalsOff = false;
  let dataTime = "2022-07-25";
  changeModalState(modalState);
  images();
  modals(modalsOff);
  tabs(".glazing_block  ", ".glazing_content", "active");
  tabs(
    ".no_click",
    ".decoration_content >div >div",
    "after_click",
    "block",
    true
  );
  tabs(".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
  form(modalState);
  timer(".timer1", dataTime);
});
