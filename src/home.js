import omleteImage from "./omlete.png"

export const headlineDiv = document.createElement("div");
headlineDiv.id = "headline";
headlineDiv.textContent = "Welcome to the Diner"

export const image = document.createElement("img");
image.src = omleteImage;

export const descriptorDiv = document.createElement("div");
descriptorDiv.id = "pic-descriptor";
descriptorDiv.textContent = "Home to the World-Famous Omlete"

export function createHomeDiv () {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';
    contentDiv.append(headlineDiv);
    contentDiv.append(image);
    contentDiv.append(descriptorDiv);
}

