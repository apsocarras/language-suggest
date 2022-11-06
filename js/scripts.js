/////////////////////////////////////////////////////////////////////////////
// Business Logic 

function suggestLang(input_array) {

  let python = 0;
  let r = 0;
  let assembly = 0;

  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] === "python") {
      python += 1;
    } else if (input_array[i] === "r") {
      r += 1;
    } else if (input_array[i] === "assembly") {
      assembly += 1;
    }
  }

  const langNames = ["python","r","assembly"];
  const tally = [python,r,assembly]; 
  const index = tally.indexOf(Math.max(...tally));
  const langSuggestion = langNames[index];
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

