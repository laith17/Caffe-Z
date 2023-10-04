submit.addEventListener("click", (event) => {
  event.preventDefault();
});
submit.addEventListener("click", () => {
  const userName = document.getElementById("userName").value;
  const age = document.getElementById("age").value;
  const listArray = [];
  let drink = document.querySelectorAll("input[type='checkbox']");
  drink.forEach((item) => {
    if (item.checked) {
      listArray.push(item.value);
    } else if (item.checked === false) {
      listArray[0] = item.innerHTML = "You didin't select a drink type";
    }
  });
  drink = listArray.join("/");
  const drinkName = document.getElementById("drinkName").value;

  let division = document.createElement("div");
  let paragraph = document.createElement("p");
  let list = document.createElement("ul");
  let listItem1 = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");

  paragraph.innerHTML = `Order name: ${userName}`;
  listItem1.innerHTML = `Your age is: ${age}`;
  listItem2.innerHTML = `Drink type: ${drink}`;
  listItem3.innerHTML = `Drink Name: ${drinkName}`;

  division.appendChild(paragraph);
  division.appendChild(list);
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);

  document.body.appendChild(division);
});
