# project related to DOM.

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-fnbj8hey?file=index.html)

## project 1 - Color changer..

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 BMI calculator.

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result..
    results.innerHTML = `<span>${bmi}</span>`;
    const category = document.querySelector("#category");
    if (bmi < 18.6) {
      category.innerHTML = "You are under weight.";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category.innerHTML = "You are healthy.";
    } else if (bmi > 24.9) {
      category.innerHTML = "You are overweight.";
    }
  }
});
```

## Project 3 : Digital clock.

```javascript
const clock = document.querySelector("#clock");
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 : Number guessing Game.

```javascript
const min = 1;
const max = 100;

let randomNum = parseInt(Math.random() * 100 + 1);
const submitButton = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const Low_or_High = document.querySelector(".lowOrHi");
let StartOver = document.querySelector(".resultParas");

const p = document.createElement("button");

let prevGuess = [];
let attemps = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (attemps > 10) {
      displayGuess(guess);
      displayMsg(`Game over. Random Number was : ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`Congrats you guessed the number right.`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`Your guess is less than the Random number.`);
  } else if (guess > randomNum) {
    displayMsg(`Your number is too high.`);
  }
}
function displayGuess(guess) {
  UserInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  remaining.innerHTML = `${10 - attemps}`;
  attemps++;
}
function displayMsg(message) {
  Low_or_High.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<span>New Game</span>`;
  StartOver.appendChild(p);

  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector(".button");
  newGameButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    attemps = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - attemps}`;
    UserInput.removeAttribute("disabled");
    if (StartOver.contains(p)) {
      StartOver.removeChild(p);
    }

    playGame = true;
  });
}
```

# Project 6 : Unlimited colours..

```javascript
//generate a random colour..
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let change;
const startChangecolor = function () {
  change = setInterval(changeBGcolor, 1000);
  function changeBGcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangecolor = function () {
  clearInterval(change);
};

document.getElementById("start").addEventListener("click", startChangecolor);

document.getElementById("stop").addEventListener("click", stopChangecolor);
```
