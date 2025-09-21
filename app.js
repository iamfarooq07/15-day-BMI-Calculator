const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");
const resultBox = document.getElementById("result");

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;

  if (!weight || !height) {
    alert("Please enter weight and height!");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obesity";

  resultBox.textContent = `Your BMI is ${bmi} (${category})`;

  weightInput.value = "";
  heightInput.value = "";
}

calcBtn.addEventListener("click", calculateBMI);

resetBtn.addEventListener("click", () => {
  weightInput.value = "";
  heightInput.value = "";
  resultBox.textContent = "";
});
