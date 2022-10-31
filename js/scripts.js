/////////////////////////////////////////////////////////////////////////////

// UI Logic

function getInputArray() {

  const answer1 = document.querySelector("input[name='question1']:checked");
  const answer2 = document.querySelector("input[name='question2']:checked");
  const answer3 = document.querySelector("input[name='question3']:checked");
  const answer4 = document.querySelector("input[name='question4']:checked");
  const answer5 = document.querySelector("input[name='question5']:checked");
  const answer6 = document.querySelector("input[name='question6']:checked");
  const answer7 = document.querySelector("input[name='question7']:checked");

  let answers = [answer1,answer2,answer3,answer4,answer5,answer6,answer7];

}

function updateDisplay() {
  // Hide previously revealed div in the HTML
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("r").setAttribute("class", "hidden");
  document.getElementById("assembly").setAttribute("class", "hidden");
  // Reveal new div based on business logic result: "langSuggestion"
  document.getElementById(langSuggestion).removeAttribute("class");
  // Swap banner picture to reflect language
  document.getElementById("banner-pic").setAttribute("src","img/" + langSuggestion + ".jpg")
  // Swap banner title to reflect language
  document.getElementById("banner-title").innerText = "Welcome to " + langSuggestion.toUpperCase() + "!";
}

// Event Listening
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let langSuggestion = "";
  let answers = [];

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    getInputArray();
    suggestLang();
    updateDisplay();
  });
});

/////////////////////////////////////////////////////////////////////////////
// Place above UI
// Business Logic 

function suggestLang() {

  let python = 0;
  let r = 0;
  let assembly = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].className === "python") {
      python += 1;
    } else if (answers[i].className === "r") {
      r += 1;
    } else if (answers[i].className === "assembly") {
      assembly += 1;
    }
  }

  let langNames = ["python","r","assembly"];
  let tally = [python,r,assembly]; 
  const index = tally.indexOf(Math.max(...tally));
  langSuggestion = langNames[index];

}
