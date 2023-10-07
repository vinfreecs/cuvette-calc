function manageButtons(e) {
  if (e.target.textContent === "del") {
    displayContent = displayContent.slice(0, displayContent.length - 1);
    display.textContent = displayContent;
  } else if (e.target.textContent === "reset") {
    displayContent = "";
    display.textContent = displayContent;
  } else if (e.target.textContent === "=") {
    if (
      displayContent[displayContent.length - 1] < "0" ||
      displayContent[displayContent.length - 1] > "9"
    ) {
      alert("last should number");
    }
    let ans = Function("return " + displayContent)();
    display.textContent = Math.round(ans * 1000) / 1000;
  } else {
    if (
      displayContent === "" &&
      (e.target.textContent < "0" || e.target.textContent > "9")
    ) {
      alert("enter number first");
      displayContent = "";
    } else if (
      (displayContent[displayContent.length - 1] < "0" ||
        displayContent[displayContent.length - 1] > "9") &&
      (e.target.textContent < "0" || e.target.textContent > "9")
    ) {
      alert("enter a number");
    } else if (e.target.textContent == ".") {
      if (decimal < 1) {
        decimal++;
        displayContent += e.target.textContent;
        display.textContent = displayContent;
      }
    } else {
      if (
        (e.target.textContent < "0" || e.target.textContent > "9") &&
        e.target.textContent !== "."
      ) {
        decimal = 0;
        afterDecimal = 0;
      }
      if (e.target.textContent < "0" || e.target.textContent > "9") {
        displayContent += e.target.textContent;
        display.textContent = displayContent;
      }
      if (
        decimal <= 1 &&
        afterDecimal < 3 &&
        e.target.textContent >= "0" &&
        e.target.textContent <= "9"
      ) {
        displayContent += e.target.textContent;
        display.textContent = displayContent;
        if (decimal == 1) afterDecimal++;
      }
    }
  }
}
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let decimal = 0;
let afterDecimal = 0;
let displayContent = "";
console.log(buttons);
buttons.forEach((item) => {
  item.addEventListener("click", manageButtons);
});
