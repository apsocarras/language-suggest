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
  const answer7 = document.querySelector("input[name='question7']:checked");

  let python = 0;
  let r = 0;
  let assembly = 0;

  answers = [answer1,answer2,answer3,answer4,answer5,answer6, answer7];

  for (i = 0; i < answers.length; i++) {
    if (answers[i].className === "Python") {
      python += 1;
    } else if (answers[i].className === "R") {
      r += 1;
    } else if (answers[i].className === "Assembly") {
      assembly += 1;
    }
  }

  langNames = ["Python","R","Assembly"];
  
  const suggestion = Math.max(python,r,assembly);


  Object.keys({suggestion})[0]; // https://stackoverflow.com/questions/4602141/variable-name-as-a-string-in-javascript

}

const myFirstName = 'John'
Object.keys({myFirstName})[0]