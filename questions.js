
var basic = require("./BasicCard");
var inquirer = require("inquirer");
var cloze = require("./clozeCard");
var x = 0;
var questions = [];

inquirer.prompt([
  {
    name: "choice",
    message: "Do you want to use BasicCard game or Cloze clozeCard game?"
    }


]).then(function(answer) {
	if (answer.choice === "basiccard") {
questions.push (new basic(`On post, where is building number 1 located?`, `At the base of the flag pole`)),
questions.push (new basic(`What is self-Aid?`, `Emergency treatment one applies to oneself`)),
questions.push (new basic(`What is the FM concerning the M16/A2 Rifle?`, `FM 3-22.9`)),
questions.push (new basic(`What army field manual covers the M136 AT4?`, `FM 3-23.25 Chapter 2`)),
questions.push (new basic(`What army field manual is called “training The Force`, `FM 7-0`))
run();
	} else if (answer.choice === "clozecard") {
questions.push (new cloze(` The ... weapon is used by the IDF`, `M16`)),
questions.push (new cloze(`...is the Israli Defensive Force`, `IDF`)),
questions.push (new cloze(`At ...you inroll into the IDF`, `18`)),
questions.push (new cloze(`Training at the IDF you learn to shoot a ...`, `gun`)),
questions.push (new cloze(`The IDF will train you to use a ...`, `gas mask`))
run();
	}});
function run() {
  inquirer.prompt([
  {
    name: "questions",
    message: questions[x].Question
    }
  ]).then(function(answers) {
      if (answers.questions === questions[x].Answer) {
        console.log("correct");
          x++
          if (x < 5) {
            run();
          }
          else if (x = 5) {
            console.log("game over!");
          }
      }
      else {
        console.log("too bad!");

        x++
        run();
      }

  });

};
