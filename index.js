let flex_c = document.getElementsByClassName("j-c-c");
let flex_s = document.getElementsByClassName("j-c-s");
let space = document.getElementsByClassName("space");
let nav = document.getElementsByClassName("nav");
let navarray = Array.from(nav);
let spacesarray = Array.from(space);
let flexsarray = Array.from(flex_s);
let flexcarray = Array.from(flex_c);

resizing();

function resizing() {
  let width = window.innerWidth;
  if (width <= 800) {
    flexsarray.forEach(element => {
      element.classList.add("wrap");
    });
    spacesarray.forEach(element => {
      element.className = "no_space";
    });
  }

  if (width <= 600) {
    flexcarray.forEach(element => {
      element.classList.add("wrap");
    });
    navarray.forEach(element => {
      element.classList.add("navdown");
    });
  }

  if (width > 600) {
    flexcarray.forEach(element => {
      if (element.classList.contains("wrap")) {
        element.classList.remove("wrap");
      }
    });
    navarray.forEach(element => {
      if (element.classList.contains("navdown")) {
        element.classList.remove("navdown");
      }
    });
  }

  if (width > 800) {
    flexsarray.forEach(element => {
      if (element.classList.contains("wrap")) {
        element.classList.remove("wrap");
      }
    });
    spacesarray.forEach(element => {
      element.className = "space";
    });
  }
}

window.addEventListener("resize", () => {
  resizing();
});