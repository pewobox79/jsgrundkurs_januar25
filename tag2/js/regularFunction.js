//Regular Function => deklarierte Funktion

console.log(getAge()); //HOISTING => funktionen können vor der definition aufgerufen werden

function getAge(age, street, city){

    return `Ich bin ${age} Jahre alt`
}

console.log(getAge(45, "lindenstrasse", "pörnbach"))


