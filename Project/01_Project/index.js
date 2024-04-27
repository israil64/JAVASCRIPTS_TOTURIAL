// console.log("hello");
const rangeDisplay = document.getElementById("rangeDisplay");
const slider = document.getElementById("slider");

// set defaul value
rangeDisplay.textContent = slider.value;

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value;
  console.log(sliderValue);
  rangeDisplay.textContent = sliderValue;

  //* condition slider value 15 over hai color red
  if (sliderValue > 15) {
    rangeDisplay.style.color = "red";
  } else {
    rangeDisplay.style.color = "white";
  }
});
