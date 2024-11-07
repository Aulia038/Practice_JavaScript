const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
const namesDiv = document.getElementById("names");

for (let i = 0; i < people.length; i++) {
  const upperCaseName = people[i].toUpperCase();

  const paragraph = document.createElement("p");
  paragraph.textContent = upperCaseName;

  namesDiv.appendChild(paragraph);
}
