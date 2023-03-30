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
})

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
