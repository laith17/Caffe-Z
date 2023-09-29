const userName = prompt("Enter your name:");
const gender = prompt("Enter your gender: Male / Female");

if (gender === "Male" || gender === "male") {
  alert(`Mr.${userName}, Welcome to our caffe! 🥰`);
} else if (gender === "Female" || gender === "female") {
  alert(`Ms.${userName}, Welcome to our caffe! 🥰`);
} else {
  alert(`${userName}, Welcome to our caffe! 🥰`);
}

const drink = prompt("Do you want a Hot Or Cold drink?");
const drinkName = prompt("Enter the name of the drink:");

alert("Your Drink Is Being Prepared! 😀");
console.log(`${userName} ordered ${drinkName}`);
