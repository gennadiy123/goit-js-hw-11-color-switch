"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
console.log(startBtn);
startBtn.addEventListener("click", buttonStart);
stopBtn.addEventListener("click", buttonStop);

let intervalId = null;

function buttonStart(event) {
  intervalId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 1000);
  startBtn.removeEventListener("click", buttonStart);
}

function buttonStop(event) {
  startBtn.addEventListener("click", buttonStart);
  clearInterval(intervalId);
}
