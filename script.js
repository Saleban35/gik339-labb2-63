// ==============================
// Uppgift 4 – Variabler
// ==============================

const checkboxDivStyle = document.getElementById("divStyle");
const textFields = document.getElementsByClassName("textfield");
const actionButton = document.getElementById("actionButton");
const outputDiv = document.getElementById("outputDiv");


// ==============================
// Uppgift 5 – Fördefinierad funktion
// ==============================

function handleTextInput(e) {
  console.log("Event target:", e.target);

  const fieldName = e.target.name;
  console.log("Name-attribut:", fieldName);

  if (fieldName === "content") {
    outputDiv.innerHTML = e.target.value;
  }
}


// ==============================
// Uppgift 6 – Eventlyssnare
// ==============================

// TEXTFÄLTEN
for (let i = 0; i < textFields.length; i++) {
  textFields[i].addEventListener("input", handleTextInput);
}


// CHECKBOXEN – ändrar färg på rutan
checkboxDivStyle.addEventListener("change", function () {

  let colorInput = null;

  for (let i = 0; i < textFields.length; i++) {
    if (textFields[i].name === "color") {
      colorInput = textFields[i];
      break;
    }
  }

  if (colorInput) {
    outputDiv.style.backgroundColor = colorInput.value;
  }
});


// KNAPPEN – återställer rutan (INTE remove)
actionButton.addEventListener("click", function () {
  outputDiv.innerHTML = "Div som egentligen ska vara tom";
  outputDiv.style.backgroundColor = "white";
});
