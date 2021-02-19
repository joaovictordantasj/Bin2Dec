const inputLabel = document.querySelector('.form-control');
const resultDiv = document.querySelector('.result');
const warningDiv = document.querySelector('.warning');

function convert(value) {
  let convertedValue = parseInt(value, 2);
  let lastValue = parseInt(value.charAt(value.length - 1));

  if (value.length == 0) {
    resultDiv.innerHTML = `<h5 style="color:#50fa7b">Result: </h5>`;
    warningDiv.innerHTML = ``;
  } else if (lastValue === 1 || lastValue === 0) {
    resultDiv.innerHTML = `<h5 style="color:#50fa7b">Result: ${convertedValue}</h5>`;
    warningDiv.innerHTML = ``;
  } else {
    warningDiv.innerHTML = `<h5 style="color:red">Enter only binary numbers!!</h5>`;
    inputLabel.value = value.slice(0, -1);
  }
}