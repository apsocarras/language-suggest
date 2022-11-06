// This is an alternative .js file that works with the site and provides the same functionality as scripts.js.
// Instead of branching, it nests a second for-loop within the first that iterates over an object called "suggestionKey", 
// which replaces the individual variables "python", "r", and "assembly".
// Does one if statement without an else count as branching? I wasn't sure.
// Normally I would submit this alternative in its own branch, but I know that for grading purposes only `main` is checked on this assignment. 
// So I saved it here to keep record of the work I've put into it.

/////////////////////////////////////////////////////////////////////////////
// Business Logic 

function suggestLang(input_array) {

  let suggestionKey = {
    python: 0,
    r: 0,
    assembly: 0
  }

  for (let i = 0; i < input_array.length; i++) {
    for (let [key,value] of Object.entries(suggestionKey)) {
      if (input_array[i] === key) {
        suggestionKey[key] = value + 1; 
      }
    }
  }
  
  const tallies = Object.values(suggestionKey);
  const index = tallies.indexOf(Math.max(...tallies));
  const langSuggestion = Object.keys(suggestionKey)[index];
  return langSuggestion

}
/////////////////////////////////////////////////////////////////////////////

// UI Logic
function getAnswerArray() {

  const answer1 = document.querySelector("input[name='question1']:checked").className;
  const answer2 = document.querySelector("input[name='question2']:checked").className;
  const answer3 = document.querySelector("input[name='question3']:checked").className;
  const answer4 = document.querySelector("input[name='question4']:checked").className;
  const answer5 = document.querySelector("input[name='question5']:checked").className;
  const answer6 = document.querySelector("input[name='question6']:checked").className;
  const answer7 = document.querySelector("input[name='question7']:checked").className;

  const answer_array = [answer1,answer2,answer3,answer4,answer5,answer6,answer7];

  return answer_array
}

function updateDisplay(suggestedLang) {
  // Hide previously revealed div in the HTML
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("r").setAttribute("class", "hidden");
  document.getElementById("assembly").setAttribute("class", "hidden");
  // Reveal new div based on business logic result: "langSuggestion"
  document.getElementById(suggestedLang).removeAttribute("class");
  // Swap banner picture to reflect language
  document.getElementById("banner-pic").setAttribute("src","img/" + suggestedLang + ".jpg")
  // Swap banner title to reflect language
  document.getElementById("banner-title").innerText = "Welcome to " + suggestedLang.toUpperCase() + "!";
}

// Event Listening
window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const langSuggestion = suggestLang(getAnswerArray());
    updateDisplay(langSuggestion);
  });
});