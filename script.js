let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";
let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generatecomputerchoice = () => {
  const option = ["rock", "paper", "sizzer"];
  const randomindex = Math.floor(Math.random() * 3);
  return option[randomindex];
};

const drawGame = () => {
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = generatecomputerchoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "sizzer" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// mode.addEventListener("click", () => {
//   if (currentMode === "light") {
//     currentMode = "dark";
//     body.classList.add("bg-yellow-500");
//     body.classList.remove("bg-white");
//   } else {
//     currentMode = "light";
//     body.classList.add("bg-white");
//     body.classList.remove("bg-yellow-500");
//   }
//   console.log(currentMode);
// });
