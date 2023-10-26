var cakeScore = 0; //Store the score for cake
var pieScore = 0; //Store the score for pie
var questionsAns = 0; //Store the number of questions answered
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var tryAgain = document.getElementById("tryAgain");

// Listen for the click on answer buttons and call function if clicked
q1a1.addEventListener("click", cake);
q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", pie);
q1a2.addEventListener("click", disable1);

q2a1.addEventListener("click", pie);
q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", cake);
q2a2.addEventListener("click", disable2);

q3a1.addEventListener("click", pie);
q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", cake);
q3a2.addEventListener("click", disable3);

tryAgain.addEventListener("click", restart)

// Track cake score and check if quiz is complete
function cake() {
  cakeScore += 1;
  questionsAns += 1;

  console.log("questionsAns = "+questionsAns+" cakeScore = "+cakeScore);

  if (questionsAns == 3)  {
    console.log("The quiz is done!");
    updateResult();
  }
}

// Track pie score and check if quiz is complete
function pie() {
  pieScore += 1;
  questionsAns += 1;

  console.log("questionsAns = "+questionsAns+" pieScore = "+pieScore);

  if (questionsAns == 3)  {
    console.log("The quiz is done!");
    updateResult();
  }
}

// Disable buttons of the questions
function disable1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disable2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disable3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

// Enable all buttons
function enable() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
}

// Update the result
function updateResult() {
  if (cakeScore >= 2) {
    console.log("You are a cake person!");
    result.innerHTML = "You are a cake person!";
  } else if (pieScore >= 2) {
    console.log("You are a pie person!");
    result.innerHTML = "You are a pie person!";
  }
}

// Restart the quiz
function restart() {
  result.innerHTML = "You are a...";
  cakeScore = 0;
  pieScore = 0;
  questionsAns = 0;
  console.log("questionsAns = "+questionsAns+" cakeScore = "+cakeScore+" pieScore = "+pieScore);
  enable();
}