const hunger = document.querySelector(".pizza-img");
let hungerBar = document.getElementById("hunger").value;

const thirst = document.querySelector(".drink-img");
let thirstBar = document.getElementById("thirst").value;

const bath = document.querySelector(".bath-img");
let bathBar = document.getElementById("bath").value;

const affection = document.querySelector(".heart-img");
let affectionBar = document.getElementById("affection").value;

const fun = document.querySelector(".game-img");
let funBar = document.getElementById("fun").value;

const study = document.querySelector(".books-img");
let studyBar = document.getElementById("study").value;

hunger.addEventListener("click", feed);
thirst.addEventListener("click", drink);
bath.addEventListener("click", bathe);
affection.addEventListener("click", petHim);
fun.addEventListener("click", haveFun);
study.addEventListener("click", learn);

function soundEffects() {
  const audio = document.querySelector("#bubble");
  audio.play();
}

function feed() {
  hungerBar += 2;
  if (hungerBar >= 100) {
    hungerBar = 100;
    document.getElementById("hunger").value = hungerBar;
    document.getElementById("hunger").dataset.percentage = `${hungerBar}%`;
  } else {
    increaseBar(hungerBar, "hunger");
  }
}

function drink() {
  thirstBar += 2;
  if (thirstBar >= 100) {
    thirstBar = 100;
    document.getElementById("thirst").value = thirstBar;
    document.getElementById("thirst").dataset.percentage = `${thirstBar}%`;
  } else {
    increaseBar(thirstBar, "thirst");
  }
}

function bathe() {
  bathBar += 2;
  if (bathBar >= 100) {
    bathBar = 100;
    document.getElementById("bath").value = bathBar;
    document.getElementById("bath").dataset.percentage = `${bathBar}%`;
  } else {
    increaseBar(bathBar, "bath");
  }
}

function petHim() {
  affectionBar += 2;
  if (affectionBar >= 100) {
    affectionBar = 100;
    document.getElementById("affection").value = affectionBar;
    document.getElementById(
      "affection",
    ).dataset.percentage = `${affectionBar}%`;
  } else {
    increaseBar(affectionBar, "affection");
  }
}

function haveFun() {
  funBar += 2;
  if (funBar >= 100) {
    funBar = 100;
    document.getElementById("fun").value = funBar;
    document.getElementById("fun").dataset.percentage = `${funBar}%`;
  } else {
    increaseBar(funBar, "fun");
  }
}

function learn() {
  studyBar += 2;
  if (studyBar >= 100) {
    studyBar = 100;
    document.getElementById("study").value = studyBar;
    document.getElementById("study").dataset.percentage = `${studyBar}%`;
  } else {
    increaseBar(studyBar, "study");
  }
}

function increaseBar(nameId, varName) {
  soundEffects();
  document.getElementById(varName).value = `${nameId}`;
  document.getElementById(varName).dataset.percentage = `${nameId}%`;
}

function decrementBar(nameId, varName) {
  document.getElementById(varName).value = `${nameId}`;
  document.getElementById(varName).dataset.percentage = `${nameId}%`;

  creature(nameId, varName);
}

function stopAllProgressBar() {
  clearInterval(hungerBarInterval);
  clearInterval(thirstBarInterval);
  clearInterval(bathBarInterval);
  clearInterval(affectionBarInterval);
  clearInterval(funBarInterval);
  clearInterval(studyBarInterval);
}

function creature(nameId, varName) {
  const creatureImg = document.querySelector(".pet img");
  if (nameId <= 0) {
    document.getElementById(varName).dataset.percentage = `0%`;
    creatureImg.src = "/images/grave.png";
    stopAllProgressBar();
    playAgain();
  } else if (nameId <= 15) {
    creatureImg.src = "/images/creature7.gif";
  } else if (nameId <= 40) {
    creatureImg.src = "/images/creature3.gif";
  } else if (nameId <= 60) {
    creatureImg.src = "/images/creature1.gif";
  }
}

let hungerBarInterval = setInterval(() => {
  hungerBar--;
  decrementBar(hungerBar, "hunger");
}, 1200);

let thirstBarInterval = setInterval(() => {
  thirstBar--;
  decrementBar(thirstBar, "thirst");
}, 1200);

let bathBarInterval = setInterval(() => {
  bathBar--;
  decrementBar(bathBar, "bath");
}, 1200);

let affectionBarInterval = setInterval(() => {
  affectionBar--;
  decrementBar(affectionBar, "affection");
}, 1200);

let funBarInterval = setInterval(() => {
  funBar--;
  decrementBar(funBar, "fun");
}, 1200);

let studyBarInterval = setInterval(() => {
  studyBar--;
  decrementBar(studyBar, "study");
}, 1200);

function playAgain() {
  const progressBar = document.querySelector(".progress-bar");
  const progressBarBtn = document.querySelector(".container button");

  progressBar.classList.add("active");
  progressBarBtn.classList.add("active");

  progressBarBtn.addEventListener("click", (e) => {
    if (e.target) {
      progressBarBtn.classList.remove("active");
      progressBar.classList.remove("active");

      location.reload();
    }
  });
}
