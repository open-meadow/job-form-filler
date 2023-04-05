const optionsButton = document.querySelector("#options-button");

optionsButton.addEventListener('click', () => {
  console.log("meeeeee");
  browser.runtime.openOptionsPage();
})