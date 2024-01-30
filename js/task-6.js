function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");
    createBox.style.backgroundColor = getRandomHexColor();
    createBox.style.width = 30 + (10 * i) + "px";
    createBox.style.height = 30 + (10 * i) + "px";
    createBox.style.marginRight = "16px";
    divBoxes.appendChild(createBox);
  }
};

 buttonCreate.addEventListener("click", () => {
      const amount = userInput.value;
      if (amount >= 1 && amount <= 100) {
        destroyBoxes();
        createBoxes(amount);
        userInput.value = "";
      }
    });

function destroyBoxes() {
      divBoxes.innerHTML = "";
}
    
buttonDestroy.addEventListener("click", destroyBoxes);