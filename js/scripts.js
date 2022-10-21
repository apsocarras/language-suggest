// UI Logic 

// Business Logic

// if-else branch to tally up results from form input

function tallyInputs() {
  const answer1 = document.querySelector("input[name='question1']:checked");
  const answer2 = document.querySelector("input[name='question2']:checked");
  const answer3 = document.querySelector("input[name='question3']:checked");
  const answer4 = document.querySelector("input[name='question4']:checked");
  const answer5 = document.querySelector("input[name='question5']:checked");
  const answer6 = document.querySelector("input[name='question6']:checked");

  let python;
  let r;
  let assembly;

  answers = [answer1,answer2,answer3,answer4,answer5,answer6];

  for (i = 0; i < answers.length; i++) {
    console.log(answers[i].className);
  }




}