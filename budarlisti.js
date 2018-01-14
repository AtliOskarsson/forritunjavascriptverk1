document.getElementById("demo").innerHTML = "Halló heimur!";
document.getElementById("demo").style.color = "red";

var vorur = ["Coke", "Dreki", "Mjólk", "Ostur", "Vatn"];

for (i = 0; i < vorur.length; i++) {
	document.getElementById("vorur").innerHTML += vorur[i] + "<br>";
}