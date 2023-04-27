function calculator(expression) {
  let result;
  try {
    if (expression == "% ×") return "%";
    let calculation = expression
      .replace("÷", "/")
      .replace("% ×", "*0.01*")
      .replace("×", "*")
      .replace("log", "Math.log10")
      .replace("e", "Math.E")
      .replace("π", "Math.PI")
      .replace("√", "Math.sqrt")
      .replace("e", "Math.E")
      .replace("ln", "Math.log");
    //document.getElementById("test").innerHTML = calculation;
    result = eval(calculation);
    console.log("==== RESULT ====", result);
  } catch (error) {
    //document.getElementById("test").innerHTML = error;

    result = "ERROR";
  }
  return result.toString();
}

function getFactorial(n) {
  console.log(n);
  console.log(typeof n);
  if (n < 0) {
    return "ERROR";
  }
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}
function factorial(expression) {
  let calc = expression.replace("!", "");
  console.log(calc);
  return getFactorial(calc);
}

function exponent(expression) {
  expression = expression.replaceAll("^", "**");
  return eval(expression);
}

function radiansToDegrees(radians) {
  let degrees = (Math.PI / 180) * radians;
  return degrees;
}
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementsByClassName("calc-display");
  const history = document.getElementsByClassName("calc-history");
  const keys = document.getElementsByClassName("btn");

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

  let ivn_buttons = document.getElementsByClassName("ivn-button");
  console.log(ivn_buttons);

  var count = 0;

  for (let index = 0; index < ivn_buttons.length; index++) {
    const ivn_button = ivn_buttons[index];
    ivn_button.addEventListener("click", () => {
      console.log(count);
      if (count == 0) {
        count = 1;
        document.getElementById("sin").innerHTML = "sin" + "-1".sup();
        document.getElementById("cos").innerHTML = "cos" + "-1".sup();
        document.getElementById("tan").innerHTML = "tan" + "-1".sup();
        document.getElementById("root").innerHTML = "x" + "2".sup();
        document.getElementById("Ans").innerHTML = "Rnd";
        document.getElementById("log").innerHTML = "10" + "x".sup();
        document.getElementById("ln").innerHTML = "e" + "x".sup();
        document.getElementById("expo").innerHTML = "√x" + "y".sup();
        document.getElementById("sin-mobile").innerHTML = "sin" + "-1".sup();
        document.getElementById("cos-mobile").innerHTML = "cos" + "-1".sup();
        document.getElementById("tan-mobile").innerHTML = "tan" + "-1".sup();
        document.getElementById("root-mobile").innerHTML = "x" + "2".sup();
        document.getElementById("Ans-mobile").innerHTML = "Rnd";
        document.getElementById("log-mobile").innerHTML = "10" + "x".sup();
        document.getElementById("ln-mobile").innerHTML = "e" + "x".sup();
        document.getElementById("expo-mobile").innerHTML = "√x" + "y".sup();
      } else if (count == 1) {
        count = 0;
        document.getElementById("sin").innerHTML = "sin";
        document.getElementById("cos").innerHTML = "cos";
        document.getElementById("tan").innerHTML = "tan";
        document.getElementById("root").innerHTML = "√";
        document.getElementById("Ans").innerHTML = "Ans";
        document.getElementById("log").innerHTML = "log";
        document.getElementById("ln").innerHTML = "ln";
        document.getElementById("expo").innerHTML = "x^y";
        document.getElementById("sin-mobile").innerHTML = "sin";
        document.getElementById("cos-mobile").innerHTML = "cos";
        document.getElementById("tan-mobile").innerHTML = "tan";
        document.getElementById("root-mobile").innerHTML = "√";
        document.getElementById("Ans-mobile").innerHTML = "Ans";
        document.getElementById("log-mobile").innerHTML = "log";
        document.getElementById("ln-mobile").innerHTML = "ln";
        document.getElementById("expo-mobile").innerHTML = "x^y";
      }
    });
  }

  //radians and degree switch in desktop mode
  const radiansBtn = document.getElementById("rad");
  const degreesBtn = document.getElementById("deg");
  let mode = "radians";

  radiansBtn.addEventListener("click", () => {
    if (mode !== "radians") {
      mode = "radians";
      radiansBtn.style.color = "black";
      degreesBtn.style.color = "#70757a";
    }
  });

  degreesBtn.addEventListener("click", () => {
    if (mode !== "degrees") {
      mode = "degrees";
      degreesBtn.style.color = "black";
      radiansBtn.style.color = "#70757a";
    }
  });

  //radians and degree switch in mobile mode
  const radiansBtnMobile = document.getElementById("radMobile");
  const degreesBtnMobile = document.getElementById("degMobile");
  let modeMobile = "radians";

  radiansBtnMobile.addEventListener("click", () => {
    if (modeMobile !== "radians") {
      modeMobile = "radians";
      radiansBtnMobile.style.color = "black";
      degreesBtnMobile.style.color = "#70757a";
    }
  });

  degreesBtnMobile.addEventListener("click", () => {
    if (modeMobile !== "degrees") {
      modeMobile = "degrees";
      degreesBtnMobile.style.color = "black";
      radiansBtnMobile.style.color = "#70757a";
    }
  });

  for (let index = 0; index < keys.length; index++) {
    const button = keys[index];
    button.addEventListener("click", function () {
      let value = button.innerHTML;
      if (value == "AC" || value == "CE") {
        currentValue = "";
        display[0].value = currentValue;
        display[1].value = currentValue;

        history[0].innerHTML = "Ans = 0";
        history[1].innerHTML = "Ans = 0";
      } else if (value == "=") {
        history[0].innerHTML = currentValue + " =";
        history[1].innerHTML = currentValue + " =";

        if (currentValue.includes("!")) {
          currentValue = factorial(currentValue);
        } else if (currentValue.includes("e^")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          currentValue = Math.exp(par) ? Math.exp(par) : "ERROR";
        } else if (currentValue.includes("^") && !currentValue.includes("e")) {
          currentValue = exponent(currentValue);
        } else if (currentValue.includes("arcsin")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          let parameter = mode == "radians" ? par : radiansToDegrees(par);
          currentValue = Math.asin(parameter) ? Math.asin(parameter) : "ERROR";
        } else if (currentValue.includes("arccos")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          let parameter = mode == "radians" ? par : radiansToDegrees(par);
          currentValue = Math.acos(parameter) ? Math.acos(parameter) : "ERROR";
        } else if (currentValue.includes("arctan")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          let parameter = mode == "radians" ? par : radiansToDegrees(par);
          currentValue = Math.atan(parameter) ? Math.atan(parameter) : "ERROR";
        } else if (currentValue.includes("sin")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          let parameter = mode == "radians" ? par : radiansToDegrees(par);
          currentValue = Math.sin(parameter) ? Math.sin(parameter) : "ERROR";
        } else if (currentValue.includes("cos")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          let parameter = mode == "radians" ? par : radiansToDegrees(par);
          currentValue = Math.cos(parameter) ? Math.cos(parameter) : "ERROR";
        } else if (currentValue.includes("tan")) {
          let curr = currentValue;
          let par = curr.replace(/[^0-9]/g, "");
          let parameter = mode == "radians" ? par : radiansToDegrees(par);
          currentValue = Math.tan(parameter) ? Math.tan(parameter) : "ERROR";
        } else {
          currentValue = calculator(currentValue);
        }
        display[0].value = currentValue;
        display[1].value = currentValue;
      } else {
        if (value == "%") value = "% ×";
        if (value == "x!") value = "!";
        if (
          value.includes("x<sup>y</sup>") &&
          !value.includes("√x<sup>y</sup>")
        )
          value = "^";
        if (value.includes("sin<sup>-1</sup>")) value = "arcsin";
        if (value.includes("cos<sup>-1</sup>")) value = "arccos";
        if (value.includes("tan<sup>-1</sup>")) value = "arctan";
        if (value.includes("x<sup>2</sup>")) value = "^2";
        if (value.includes("10<sup>x</sup>")) value = "10^";
        if (value.includes("e<sup>x</sup>")) value = "e^";
        if (value.includes("√x<sup>y</sup>")) value = "^1/";

        currentValue += value;
        display[0].value = currentValue;
        display[1].value = currentValue;
      }
    });
  }
});
