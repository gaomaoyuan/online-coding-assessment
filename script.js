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