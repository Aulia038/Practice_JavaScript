const countdownDiv = document.getElementById("countdown");

for (let i = 25; i >= 0; i -= 5) {
  const paragraph = document.createElement("p");
  paragraph.textContent = i;
  countdownDiv.appendChild(paragraph);
}
