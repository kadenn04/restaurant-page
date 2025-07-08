

const eggsName = document.createElement("div");
eggsName.textContent = "Eggs, Any Style!";
const eggsPrice = document.createElement("div");
eggsPrice.textContent = "5.99";

const eggsDiv = document.createElement("div");
eggsDiv.append(eggsName);
eggsDiv.append(eggsPrice);

const chickenFriedSteakName = document.createElement("div");
chickenFriedSteakName.textContent = "Chicken Fried Steak, cooked how you like";
const chickenFriedSteakPrice = document.createElement("div");
chickenFriedSteakPrice.textContent = "15.99";

const chickenFriedSteakDiv = document.createElement("div");
chickenFriedSteakDiv.append(chickenFriedSteakName);
chickenFriedSteakDiv.append(chickenFriedSteakPrice);

export function createMenuDiv() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';
    contentDiv.append(chickenFriedSteakDiv);
    contentDiv.append(eggsDiv);
}