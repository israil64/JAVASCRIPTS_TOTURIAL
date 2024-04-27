//* we create a function that generate the random color
function generateRandomColor() {
  let hexValue = "ABCDEF0123456789";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let result = hexValue[Math.floor(Math.random() * 10)];
    color += result;
  }
  return color;
}

//* background color changer function
function backgroundChanger() {
  document.body.style.backgroundColor = generateRandomColor();
}

let intervalId;
const start = document.getElementById("start").addEventListener("click", () => {
  intervalId = setInterval(() => {
    backgroundChanger();
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(intervalId);
});
