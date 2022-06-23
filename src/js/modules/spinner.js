function spinner() {
  const img = document.createElement("img");
  const path = "../dist/assets/slick/ajax-loader.gif";
  img.classList.add("spinner");
  img.setAttribute("src", path);
  return img;
}

export { spinner };
