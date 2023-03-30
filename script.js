"use strict";
var currentgrade;
currentgrade = 0;
var nowtimenum;
nowtimenum = 60;
var timer;

document.querySelector("#title").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    document.getElementById("highscorepage").style.display = "block";
});

document.querySelector("#btnstart").addEventListener("click", function () {
    currentgrade = 0;
    nowtimenum = 60;
});

timer = setInterval(function () {
    nowtimenum--;
    if (nowtimenum <= 0) {
      document.getElementById("nowtime").innerHTML = 0;
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("four").style.display = "none";
      document.getElementById("five").style.display = "none";
      document.getElementById("gradepage").style.display = "block";
      document.getElementById("highscorepage").style.display = "none";
      document.getElementById("scorenum").innerHTML = currentgrade;
    } else {
      document.getElementById("nowtime").innerHTML = nowtimenum;
    }
}, 1000);

  var elements = document.getElementsByClassName("choice");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#8a2be2";
}

  document.getElementById("title").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("one").style.display = "block";

  function clickchoicebtn(
    backgroundcolor,
    answertype,
    spechoice,
    answerArea,
    currentpage,
    nextpage
    ) {
    document.getElementById(spechoice).style.backgroundColor = backgroundcolor;
    document.getElementById(answerArea).innerHTML = answertype;
    setTimeout(function () {
      document.getElementById(currentpage).style.display = "none";
      document.getElementById(nextpage).style.display = "block";
    }, 1000);
    if (answertype == "Wrong") {
      nowtimenum -= 8;
    } else {
      currentgrade += 20;
    }
}

// Question 1
  document.querySelector("#onea").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "onea", "answer1", "one", "two");
});

document.querySelector("#oneb").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "oneb", "answer1", "one", "two");
});

document.querySelector("#onec").addEventListener("click", function () {
    clickchoicebtn("green", "Correct", "onec", "answer1", "one", "two");
});

document.querySelector("#oned").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "oned", "answer1", "one", "two");
});

// Question 2
document.querySelector("#twoa").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "twoa", "answer2", "two", "three");
});
  
document.querySelector("#twob").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "twob", "answer2", "two", "three");
});
  
document.querySelector("#twoc").addEventListener("click", function () {
    clickchoicebtn("green", "Correct", "twoc", "answer2", "two", "three");
});
 
document.querySelector("#twod").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "twod", "answer2", "two", "three");
});

//Question 3
document.querySelector("#threea").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "threea", "answer3", "three", "four");
});

document.querySelector("#threeb").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "threeb", "answer3", "three", "four");
});

document.querySelector("#threec").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "threec", "answer3", "three", "four");
});

document.querySelector("#threed").addEventListener("click", function () {
    clickchoicebtn("green", "Correct", "threed", "answer3", "three", "four");
});

//Question 4
document.querySelector("#foura").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "foura", "answer4", "four", "five");
});
  
document.querySelector("#fourb").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "fourb", "answer4", "four", "five");
});

document.querySelector("#fourc").addEventListener("click", function () {
    clickchoicebtn("green", "Correct", "fourc", "answer4", "four", "five");
});

document.querySelector("#fourd").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "fourd", "answer4", "four", "five");
});

//Question 5
document.querySelector("#fivea").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "fivea", "answer5", "five", "gradepage");
    document.getElementById("scorenum").innerHTML = currentgrade;
    nowtimenum = 0;
    document.getElementById("nowtime").innerHTML = nowtimenum;
    clearInterval(timer);
});

document.querySelector("#fiveb").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "fiveb", "answer5", "five", "gradepage");
    document.getElementById("scorenum").innerHTML = currentgrade;
    nowtimenum = 0;
    document.getElementById("nowtime").innerHTML = nowtimenum;
    clearInterval(timer);
});

document.querySelector("#fivec").addEventListener("click", function () {
    clickchoicebtn("red", "Wrong", "fivec", "answer5", "five", "gradepage");
    document.getElementById("scorenum").innerHTML = currentgrade;
    nowtimenum = 0;
    document.getElementById("nowtime").innerHTML = nowtimenum;
    clearInterval(timer);
});

document.querySelector("#fived").addEventListener("click", function () {
    clickchoicebtn("green", "Correct", "fived", "answer5", "five", "gradepage");
    document.getElementById("scorenum").innerHTML = currentgrade;
    nowtimenum = 0;
    document.getElementById("nowtime").innerHTML = nowtimenum;
    clearInterval(timer);
});

//Final grade 
document.querySelector("#sub").addEventListener("click", function () {
    clearInterval(timer);
    document.getElementById("gradepage").style.display = "none";
    document.getElementById("highscorepage").style.display = "block";
    document.getElementById("res").innerHTML +=
      document.getElementById("name").value + " - " + currentgrade + "<br/>";
});

//High score page
document.querySelector("#goback").addEventListener("click", function () {
    document.getElementById("title").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("highscorepage").style.display = "none";
});
