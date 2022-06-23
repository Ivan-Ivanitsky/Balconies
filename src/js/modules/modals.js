export { modals };
import { btnDisabled } from "./btnDisabledEnabled";

const modals = (modalsOff) => {
  function modal(
    triggerModalOpen,
    triggerModal,
    triggerModalClose,
    closeOverlay = "true"
  ) {
    const open = document.querySelectorAll(triggerModalOpen),
      modal = document.querySelector(triggerModal),
      close = document.querySelector(triggerModalClose),
      window = document.querySelectorAll("[data-modal]");
    const input = document.querySelectorAll("input");
    //   scroll = scrollHide();

    function clearInput() {
      input.forEach((inp) => {
        inp.value = "";
        inp.checked = "";
      });
    }

    open.forEach((item, i) => {
      // open Modal - btn
      item.addEventListener("click", (e) => {
        btnDisabled();
        if (e.target) {
          window.forEach((item) => {
            // close all modal
            item.style.display = "none";
          });
          modalsOff = true;
          modal.style.display = "flex";
          modal.classList.add("animate__animated", "animated", "jackInTheBox");
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${scroll}px`;
        }
      });

      close.addEventListener("click", () => {
        //  this functinon close modal  after click btn_close
        window.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        modal.classList.remove("animate__animated", "animated", "jackInTheBox");
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        clearInput();
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeOverlay == "true") {
        window.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function timeModal(selector, time) {
    setTimeout(() => {
      const popupClass = document.querySelector(selector);
      const imgContent = document.querySelector(".popup-img");
      if (!modalsOff && imgContent == null) {
        popupClass.style.display = "flex";
        popupClass.classList.add("animate__animated", "animated", "fadeInDown");
      } else {
        clearTimeout(timeModal);
        return;
      }
    }, time);
  }

  function scrollHide() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scroll = div.offsetWidth - div.clientWidth;
    div.remove();
    return scroll;
  }

  modal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  modal(".phone_link", ".popup", ".popup .popup_close");
  modal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  modal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    "false"
  );
  modal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    "false"
  );
  timeModal(".popup", 6000);
};
