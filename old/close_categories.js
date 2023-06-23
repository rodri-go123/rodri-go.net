var misc = document.getElementById("misc");
var vid = document.getElementById("video");
var print = document.getElementById("print");
var web = document.getElementById("websites");
var coding = document.getElementById("coding");

var clickedButton = document.getElementById("clicked");
var clickedShort = document.getElementById("clickedShort");

function closeMisc() {
  misc.style.display = "none";

  smile.style.display = "inline";
  x.style.display = "none";
  clickedButton.classList.remove("red");
  clickedShort.classList.remove("red");
}

function closeVid() {
  vid.style.display = "none";

  smile.style.display = "inline";
  x.style.display = "none";
  clickedButton.classList.remove("red");
  clickedShort.classList.remove("red");
}

function closePrint() {
  print.style.display = "none";

  smile.style.display = "inline";
  x.style.display = "none";
  clickedButton.classList.remove("red");
}

function closeWeb() {
  web.style.display = "none";

  smile.style.display = "inline";
  x.style.display = "none";
  clickedButton.classList.remove("red");
}

function closeCoding() {
  coding.style.display = "none";

  smile.style.display = "inline";
  x.style.display = "none";
  clickedButton.classList.remove("red");
  clickedShort.classList.remove("red");
}
