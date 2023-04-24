function calculator(expression) {
  let result;
  try {
    let calculation = expression
      .replace("÷", "/")
      .replace("% ×", "*0.01*")
      .replace("×", "*")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("ln", "Math.log")
      .replace("log", "Math.log10")
      .replace("e", "Math.E")
      .replace("tan", "Math.tan")
      .replace("π", "Math.PI")
      .replace("√", "Math.sqrt");
    result = eval(calculation);
    console.log(result);
  } catch (error) {
    result = "ERROR";
  }
  return result.toString();
}

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("calc-display");
  const history = document.getElementById("calc-history");
  //console.log(display);
  const keys = document.getElementsByClassName("btn");
  //console.log(keys);

  const mobileVersion = document.getElementById("mobile-version");
  console.log(mobileVersion);

  const fx = document.getElementsByClassName("fx");
  const fx_div = document.getElementById("inverse-div");
  // console.log(fx_div);
  // console.log(fx[0]);
  fx[0].addEventListener("click", function onClick(event) {
    event.target.style.color = "white";
    regular[0].style.color = "black";
    regular_div.style.backgroundColor = "white";
    fx_div.style.backgroundColor = "#0d6efd";
    document.getElementById("regular-functions").style.display = "none";
    document.getElementById("inverse-functions").style.display = "flex";
  });

  const regular = document.getElementsByClassName("regular");
  const regular_div = document.getElementById("regular-div");
  // console.log(regular_div);
  // console.log(regular[0]);

  regular[0].addEventListener("click", function onClick(event) {
    event.target.style.color = "white";
    fx[0].style.color = "black";
    regular_div.style.backgroundColor = "#0d6efd";
    fx_div.style.backgroundColor = "white";
    document.getElementById("regular-functions").style.display = "block";
    document.getElementById("inverse-functions").style.display = "none";
  });

  let currentValue = "";

  for (let index = 0; index < keys.length; index++) {
    const button = keys[index];
    //console.log(button);
    button.addEventListener("click", function () {
      let value = button.innerHTML;
      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
        history.innerHTML = currentValue;
      } else if (value == "=") {
        history.innerHTML = currentValue + " =";
        currentValue = calculator(currentValue);
        display.value = currentValue;
      } else {
        if (value == "%") value = "% ×";
        currentValue += value;
        display.value = currentValue;
      }
    });
  }
});
