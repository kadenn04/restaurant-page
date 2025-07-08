import "./styles.css";
import "./home.js";
import "./menu.js";
import { createMenuDiv } from "./menu.js";
import { createHomeDiv } from "./home.js";

const contentDiv = document.querySelector("#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    createHomeDiv();
})

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    createMenuDiv();
})