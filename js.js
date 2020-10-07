const wrapper = document.getElementById("container");
const btn = document.getElementById("change");

const text = "My life is going to be good :)";


let idx = 0;
let mode = "dark";


btn.addEventListener("click", () => {
  changeDay();
  console.log(mode);
});

function changeDay() {
  if (mode === "light") {
    mode = "dark";

    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (mode === "dark") {
    mode = "light";
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

function writeText() {
  wrapper.innerText = text.slice(0, idx);

  idx++;

  if (idx === text.length) {
    idx = 0;
  }
}

setInterval(writeText, 120);
