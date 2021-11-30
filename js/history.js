
var piano_player = function() {
  var piano = document.getElementById("piano");
  piano.play();
};

var flute_player = function() {
  var flute = document.getElementById("flute");
  flute.play();
};

var trumpet_player = function() {
  var trumpet = document.getElementById("trumpet");
  trumpet.play();
};

var submitAnswer_Q1 = function() {
    var radios = document.getElementsByName('question1');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value;
           break;
         }
      }
    
      if (val == "George" ) {
        document.getElementById("QUESTION-VALIDATE-WRONG-Q1").innerHTML = "";
        document.getElementById("QUESTION-NONE-Q1").innerHTML = "";
        document.getElementById("QUESTION-VALIDATE-Q1").innerHTML = "Correct! Awesome job!";
        var audio = document.getElementById("audio_correct");
        audio.play();
  
        } 
      else if (val == "") {
        document.getElementById("QUESTION-VALIDATE-Q1").innerHTML = "";
        document.getElementById("QUESTION-VALIDATE-WRONG-Q1").innerHTML = ""
        document.getElementById("QUESTION-NONE-Q1").innerHTML = "Oops! Please choose an answer!";
        var audio = document.getElementById("audio_none");
        audio.play();
          }
        
      else {
        document.getElementById("QUESTION-VALIDATE-Q2").innerHTML = ""
        document.getElementById("QUESTION-NONE-Q2").innerHTML = "";
        document.getElementById("QUESTION-VALIDATE-WRONG-Q2").innerHTML = "Incorrect! Try again!";
        var audio = document.getElementById("audio_incorrect");
        audio.play();
          }
      
    

};

var submitAnswer_Q2 = function() {
  var radios = document.getElementsByName('question2');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value;
         break;
       }
    }
  
    if (val == "Egyptians" ) {
      document.getElementById("QUESTION-VALIDATE-WRONG-Q2").innerHTML = "";
      document.getElementById("QUESTION-NONE-Q2").innerHTML = "";
      document.getElementById("QUESTION-VALIDATE-Q2").innerHTML = "Correct! Awesome job!";
      var audio = document.getElementById("audio_correct");
      audio.play();

      } 
    else if (val == "") {
      document.getElementById("QUESTION-VALIDATE-Q2").innerHTML = "";
      document.getElementById("QUESTION-VALIDATE-WRONG-Q2").innerHTML = "";
      document.getElementById("QUESTION-NONE-Q2").innerHTML = "Oops! Please choose an answer!";
      var audio = document.getElementById("audio_none");
      audio.play();
        } 
    else {
      document.getElementById("QUESTION-VALIDATE-Q2").innerHTML = ""
      document.getElementById("QUESTION-NONE-Q2").innerHTML = "";
      document.getElementById("QUESTION-VALIDATE-WRONG-Q2").innerHTML = "Incorrect! Try again!";
      var audio = document.getElementById("audio_incorrect");
      audio.play();
        }

};

var submitAnswer_Q3 = function() {
  var radios = document.getElementsByName('question3');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value;
         break;
       }
    }
  
    if (val == "Piano" ) {
      document.getElementById("QUESTION-VALIDATE-WRONG-Q3").innerHTML = "";
      document.getElementById("QUESTION-NONE-Q3").innerHTML = "";
      document.getElementById("QUESTION-VALIDATE-Q3").innerHTML = "Correct! Awesome job!";
      var audio = document.getElementById("audio_correct");
      audio.play();

      } 
    else if (val == "") {
      document.getElementById("QUESTION-VALIDATE-Q3").innerHTML = "";
      document.getElementById("QUESTION-VALIDATE-WRONG-Q3").innerHTML = "";
      document.getElementById("QUESTION-NONE-Q3").innerHTML = "Oops! Please choose an answer!";
      var audio = document.getElementById("audio_none");
      audio.play();
        } 
    else {
      document.getElementById("QUESTION-VALIDATE-Q3").innerHTML = ""
      document.getElementById("QUESTION-NONE-Q3").innerHTML = "";
      document.getElementById("QUESTION-VALIDATE-WRONG-Q3").innerHTML = "Incorrect! Try again!";
      var audio = document.getElementById("audio_incorrect");
      audio.play();
        }

};
