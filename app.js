const cols = document.querySelectorAll(".col");
function genRandomForColors() {
  // RGB for colors
  // hex_color
  // 16
  // From 0 to F
  // getting random colors in hex format
  const hex_color = "0123456789ABCDEF";
  let color = "";
  const length = 6;
  for (let i = 0; i < length; i++) {
    color = color + hex_color[Math.floor(Math.random() * hex_color.length)];
  }
  return "#" + color;
}
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setRandomForColors();
  }
});

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);
}

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];

    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  } else if (type === "copy") {
    copyToClickboard(event.target.textContent);
  }
});

function genRandColor() {}

function setRandomForColors() {
  cols.forEach((col) => {
    const isLocked = col.querySelector("i").classList.contains("fa-lock");
    const color = genRandomForColors();
    const header = col.querySelector("h3");
    const button = col.querySelector("button");
    if (isLocked) {
      return;
    }
    header.textContent = color;
    col.style.background = color;
    setTintText(header, color);
    setTintText(button, color);
    //adding tints
    //chroma js lib
    //chrome in console
  });
}
function setTintText(text, color) {
  const lum = chroma(color).luminance();
  text.style.color = lum > 0.5 ? "black" : "white";
}
genRandomForColors();
setRandomForColors();
