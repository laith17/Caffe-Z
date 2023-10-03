const userName = prompt("Enter your name:");
let gender;

function genderPrompt() {
  while (
    gender != "Male" &&
    gender != "Female" &&
    gender != "male" &&
    gender != "female"
  ) {
    gender = prompt("Enter your gender: Male / Female");
  }

  if (gender === "Male" || gender === "male") {
    alert(`Mr.${userName}, Welcome to our caffe! 🥰`);
  } else if (gender === "Female" || gender === "female") {
    alert(`Ms.${userName}, Welcome to our caffe! 🥰`);
  }
}
genderPrompt();

const drink = prompt("Do you want a Hot Or Cold drink?");
const drinkName = prompt("Enter the name of the drink:");

alert("Your Drink Is Being Prepared! 😀");
console.log(`${userName} ordered ${drinkName}`);

const userInfo = [userName, gender, drink, drinkName];
for (let i = 0; i < userInfo.length; i++) {
  console.log(userInfo[i]);
}

let division = document.createElement("div");
let paragraph = document.createElement("p");
let list = document.createElement("ul");
let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");

paragraph.innerHTML = `Order name: ${userName}`;
listItem1.innerHTML = `Gender: ${gender}`;
listItem2.innerHTML = `Drink type: ${drink}`;
listItem3.innerHTML = `Drink Name: ${drinkName}`;

division.appendChild(paragraph);
division.appendChild(list);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

document.body.appendChild(division);