/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let randomNumber = Math.random() * 10;
  console.log(generateExcuse);

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console! " + randomNumber);
};

function generateExcuse() {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bite my"];
  let possetion = ["homework", "hand", "toe", "car", "shoe"];
  let where = ["on the street", "at the shop", "in my drive way"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex] +
    " "
  );
}
