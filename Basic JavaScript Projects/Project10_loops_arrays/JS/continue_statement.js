let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue_statement").innerHTML = text;

//A loop which will skip the step where i = 3 but will continue.
