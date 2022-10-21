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

  let answers = [answer1,answer2,answer3,answer4,answer5,answer6,answer7];

  let suggestionKey = {
    python: 0,
    r: 0,
    assembly: 0
  }

  for (i = 0; i < answers.length; i++) {
    for (let [key,value] of Object.entries(suggestionKey)) {
      if (answers[i].className.toLowerCase() === key) {
        // parseInt(`${suggestionKey[property]}`) += 1;
        value = value + 1; 
      }
    }
  }

  const index = sugg.indexOf(Math.max(...tally));


  
  // let python = 0;
  // let r = 0;
  // let assembly = 0;

  // for (i = 0; i < answers.length; i++) {
  //   if (answers[i].className === "Python") {
  //     python += 1;
  //   } else if (answers[i].className === "R") {
  //     r += 1;
  //   } else if (answers[i].className === "Assembly") {
  //     assembly += 1;
  //   }
  // }

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