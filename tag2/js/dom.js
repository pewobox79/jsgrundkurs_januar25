//definieren von elementen
const text = document.getElementById("text");
const anker = document.getElementById("anker");

//kreieren Elemente
const h3 = document.createElement("h3");
const p = document.createElement("p")

//inhalte füllen
text.innerText = "<h2>Ich bin der Peter</h2>";
text.innerHTML = "<h2>Ich bin der Klaus</h2>";
h3.innerHTML = "ich bin ein h3 element";
p.innerText = "ich bin der paragraph"

//element zusammenfügen
anker.appendChild(h3);
anker.appendChild(p)