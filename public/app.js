const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const main = document.getElementById("main");

const questionOne = document.getElementById("question1");
const answerOne = document.getElementById("answer1");
const arrowOne = document.getElementById("arrow1");

const questionTwo = document.getElementById("question2");
const answerTwo = document.getElementById("answer2");
const arrowTwo = document.getElementById("arrow2");

const questionThree = document.getElementById("question3");
const answerThree = document.getElementById("answer3");
const arrowThree = document.getElementById("arrow3");

const questionFour = document.getElementById("question4");
const answerFour = document.getElementById("answer4");
const arrowFour = document.getElementById("arrow4");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
questionOne.addEventListener("click", () => {
  answerOne.classList.toggle("active");
  arrowOne.classList.toggle("active");
});

questionTwo.addEventListener("click", () => {
  answerTwo.classList.toggle("active");
  arrowTwo.classList.toggle("active");
});

questionThree.addEventListener("click", () => {
  answerThree.classList.toggle("active");
  arrowThree.classList.toggle("active");
});

questionFour.addEventListener("click", () => {
  answerFour.classList.toggle("active");
  arrowFour.classList.toggle("active");
});
