l = new Logger();

var MESSAGES = [l.getLine(), l.getBorder(), l.getBorder(), l.getLine(),
  l.content("Hi! I'm Devin."), l.content("I'm available for hire."), l.content("Send me a message."),
  l.content("I'm into chatbots."), l.content("And javascript."), l.getBorder(),
  l.getLine() ];

window.onload = function(){



  console.log(recursiveLoop(6));
  welcomeMessage();
  createMouseOver();
}

function createMouseOver() {
  e = document.getElementsByClassName('popover-parent');

  e[0].onmouseover = function(){
    document.getElementsByClassName('popover')[0].style.display = 'flex';
  };
  e[0].onmouseout = function(){
    document.getElementsByClassName('popover')[0].style.display = 'none';
  };
}

function Logger() {

  this.line   = "------------------------------------\n";
  this.border = "---                              ---\n";

  this.content = function(msgString){
    var msg = "";
    var emptySpaces = 0;
    var extraSpace = 0;
    var MAX = 30;
    var len = msgString.length;
    var border = "---";
    emptySpaces = (MAX - len) / 2;
    msg += "" + border;
    for (var i = 0; i < emptySpaces; i++){
      msg += " ";
    }
    msg += msgString;
    if (emptySpaces % 2 == 0){
      for (var i = 0; i < emptySpaces; i++){
        msg += " ";
      }
    } else {
      for (var i = 0; i < emptySpaces - 1; i++){
        msg += " ";
      }
    }
    msg += border;
    return msg;
  }

  this.getLine = function(){
      return this.line;
  };

  this.getBorder = function(){
      return this.border;
  };
}

function welcomeMessage(){

  l = new Logger();

  var MESSAGES = [l.getLine(), l.getBorder(), l.getBorder(), l.getLine(),
    l.content("Hi! I'm Devin."), l.content("I'm available for hire."), l.content("Send me a message."),
    l.content("I'm into chatbots."), l.content("And javascript."), l.getBorder(),
    l.getLine() ];

  var messageLength = MESSAGES.length;

  // var i = 0;
  // function timingFunction(){
    // while (i < messageLength){
      // setTimeout(function(){
        // console.log("It works");
        // i++;
        // timingFunction();
      // }, 500);
    // };
//  };

  //timingFunction();

}

function recursiveLoop(number){
  if (number <= 0) {
    return true;
  } else {
    console.log(MESSAGES[number]);
    return (number * recursiveLoop(number -1))
  }
}
