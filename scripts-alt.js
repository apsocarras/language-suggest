// This is an alternative .js file that works with the site and provides the same functionality as scripts.js.
// Instead of branching, it nests a second for-loop within the first that iterates over an object called "suggestionKey", 
// which replaces the individual variables "python", "r", and "assembly".
// Does one if statement without an else count as branching? I wasn't sure.
// Normally I would submit this alternative in its own branch, but I know that for grading purposes only `main` is checked on this assignment. 
// So I saved it here to keep record of the work I've put into it.

function clearPreviousResult () {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("r").setAttribute("class", "hidden");
  document.getElementById("assembly").setAttribute("class", "hidden");
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
      if (answers[i].className === key) {
        suggestionKey[key] = value + 1; 
      }
    }
  }
  
  const tallies = Object.values(suggestionKey);
  const index = tallies.indexOf(Math.max(...tallies));
  const langSuggestion = Object.keys(suggestionKey)[index];

  return langSuggestion;

}

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearPreviousResult();
    document.getElementById(suggestLang()).removeAttribute("class");
  });
});