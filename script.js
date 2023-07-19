var nav = document.getElementById("nav-container")
var nav_btn = document.getElementById("nav-btn")
var num_btn = document.getElementById("random-num")
var counter_btn = document.getElementById("counter")
function randomNum(){var num = Math.round(Math.floor(Math.random()*101)); alert("Your Random Number Is: "+num)}
var cnum = 0
function upnum(){cnum = cnum + 1}
function setnum(){counter_btn.innerText = cnum; setTimeout(setnum,0)}
function toggleNav(){if(nav.style.display == "none"){nav.style.display = "block"}else nav.style.display = "none"}
nav_btn.onclick = toggleNav
num_btn.onclick = randomNum
counter_btn.onclick = upnum
setnum()