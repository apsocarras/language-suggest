function clearPreviousResult () {
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("R").setAttribute("class", "hidden");
  document.getElementById("Assembly").setAttribute("class", "hidden");
}

function suggestLang() {
  const answer1 = document.querySelector("input[name='question1']:checked");
  const answer2 = document.querySelector("input[name='question2']:checked");
  const answer3 = document.querySelector("input[name='question3']:checked");
  const answer4 = document.querySelector("input[name='question4']:checked");
  const answer5 = document.querySelector("input[name='question5']:checked");
  const answer6 = document.querySelector("input[name='question6']:checked");
  const answer7 = document.querySelector("input[name='question7']:checked");

  // Could Probably streamline lines 17-19, 33-36 with the use of Objects

  let suggestionKey = [["Python",0], ["R",0], ["Assembly",0]];

  // let python = 0;
  // let r = 0;
  // let assembly = 0;

  let answers = [answer1,answer2,answer3,answer4,answer5,answer6,answer7];

  // for (i = 0; i < answers.length; i++) {
  //   if (answers[i].className === "Python") {
  //     python += 1;
  //   } else if (answers[i].className === "R") {
  //     r += 1;
  //   } else if (answers[i].className === "Assembly") {
  //     assembly += 1;
  //   }
  // }

  for (i = 0; i < answers.length; i++) {
    for (j = 0; j < suggestionKey.length; j++) {
      if (answers[i].className === suggestionKey[j][0]) {
        suggestionKey[j][1] += 1;
      }
    }
  }

  

  // let langNames = ["Python","R","Assembly"];
  // // let tally = [python,r,assembly]; 
  // const index = tally.indexOf(Math.max(...tally));
  // const langSuggestion = langNames[index];
  // return langSuggestion;

}

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearPreviousResult();
    document.getElementById(suggestLang()).removeAttribute("class");
  });
});