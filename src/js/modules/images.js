export { images };
function imageWidth() {
  const windowWidth = document.documentElement.clientWidth;
  let styleWidth = null;
  if (windowWidth <= 768) {
    styleWidth = "55%";
  } else styleWidth = "30%";
  return styleWidth;
}

const images = () => {
  const imgSelector = document.querySelector(".works"),
    divElemImg = document.createElement("div"),
    elemImg = document.createElement("img");
  divElemImg.style.justifyContent = "center";
  divElemImg.style.alignItems = "center";
  divElemImg.style.display = "none";

  imgSelector.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target && target.classList.contains("preview")) {
      divElemImg.style.display = "flex";
      divElemImg.classList.add("popup", "popup-img");
      imgSelector.appendChild(divElemImg);
      divElemImg.appendChild(elemImg);
      elemImg.style.width = imageWidth();
      const path = target.parentNode.getAttribute("href");
      elemImg.setAttribute("src", path);
      document.body.style.overflow = "hidden";
    }

    if (target.matches("div.popup")) {
      divElemImg.style.display = "none";
      document.body.style.overflow = "";
      divElemImg.remove();
    }
  });
};
