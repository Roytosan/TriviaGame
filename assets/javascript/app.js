

var questions = [
    { q: "All squares are rectangles.", a: {t:"True", f: "False"}, c: "True"},   
    { q: "Shakespear wrote Romeo and Juliet.", a: {t:"True", f:"False"}, c: "True"},
    { q: "A tomato is a vegetable.", a: {t:"True", f:"False"}, c: "False"},
    { q: "The earth orbits around the sun.", a: {t:"True", f:"False"}, c: "True"},
    { q: "A rattle snake is poisonous.", a: {t:"True", f:"False"}, c: "False"}
  ];

  var score = 0;
  var questionIndex = 0;

  function renderQuestion() {
    if (questionIndex <= (questions.length - 1)) {
      document.querySelector("#question").innerHTML = questions[questionIndex].q;
      document.querySelector('#true').innerHTML = questions[questionIndex].a.t;
      document.querySelector('#false').innerHTML = questions[questionIndex].a.f;
    }
    else {
      document.querySelector("#question").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    }
  }

  function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }


  // MAIN PROCESS
  // ==============================================================================

  // Calling functions to start the game.
  renderQuestion();
  updateScore();
  
  
    // This function runs for each question rendered
    function answerQuestion(userInput) {

    // // If there are no more questions, stop the function.
    if (questionIndex === questions.length) {
      return;
    }

      // If they guess the correct answer, increase and update score, alert them they got it right.
      if (userInput === questions[questionIndex].c) {
        alert("Correct!");
        score++;
        updateScore();
      }
      // If wrong, alert them they are wrong.
      else {
        alert("Wrong!");
      }

      // Increment the questionIndex variable and call the renderQuestion function.
      questionIndex++;
      renderQuestion();
      
    };


    document.getElementById("true").onclick = function()
    {   answerQuestion("True");
        }
    
    document.getElementById("false").onclick = function(){
        answerQuestion("False");
    }


  
