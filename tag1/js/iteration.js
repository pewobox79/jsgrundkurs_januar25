const arrayData = [

    { firstname: "peter", address: { street: "" }},
    { firstname: "klaus", address: { street: "" } },
    { firstname: "martin", address: { street: "strasse" } },
    { firstname: "Sepp", address: { street: "" } },
    { firstname: "heinz", address: { street: "" } },
    { firstname: "stefan", address: { street: "" } },
];

//iteration in array
//FOR LOOP
// let i ist der Hebel, auf dessen basis gestartet wird
// so lange der iWert kleiner ist als die Länge des gesamten Arrays, wird i++ (plus 1) gezählt.

for (let i = 0; i < arrayData.length; i++) {

    //ausgabe des index werte repräsentiert durch i
    //console.log("loop",i, arrayData[i])

}


// forEach
//forEach bekommt eine CallBack function die den eigentlichen Arbeitsprozess startet
//RUCKSACK für datensatz nach jeder iterierung ist die temporär variable USER in der Klammer
let loops = 0;
arrayData.forEach((user) => {

    if (user.firstname === "sepp") {
        console.log("ja, ich bin der Sepp");
    } else if (user.firstname === "stefan") {
        console.log("ja, ich bin der stefan")
    } else {
        loops = loops + 1
        console.log("nein, ich bin das nicht")
    }

})




//alternative zu if/else ist die switch

arrayData.forEach((user)=>{

    switch(user.firstname){
        case "sepp":
            console.log("ich bin der Sepp");
            break;
        case "stefan":
            console.log("ich bin der stefan");
            break;
        default: console.log("das bin ich nicht")
    }

})





//IF - ELSE Statement

//IF => falls etwas zutrifft dann führe XY aus...
//ELSE => ansonsten mach was anderen

const streetNumber = 22;

if (streetNumber == "22") {
    //falls streetnumber 22 ist, dann erfolgreiches Ziel
    console.log("du bist richtig")
} else {

    //wenn es etwas anderes ist, dann ...
    console.log("du bist falsch")
}

//switch statement

const myName = "Peter"
switch (myName) {
    case "Peter":
        console.log("ich bin der Peter");
        break;
    default: console.log("nicht der peter")

}

//wir suchen firstname werten die z.B. namem mit 5 characters sind.
//.filter method => gibt mir neues array zurück

//vergleichs operatoren
//      < => kleiner als
//      > => größer als
//      <= => kleiner oder gleich als
//      >= => größer oder gleich als
//      & => UND Operator, beide Seiten müssen TRUE sein
//      / => OR Operator , eins von beiden Seiten muss TRUE 

const array5character = arrayData.filter((user) => user.firstname.length <5 & user.firstname.toLocaleLowerCase().charAt(1).includes("e"));

console.log("array5character", array5character);

//map method

//AUFGABE: wir wollen jedem objekt ein neues Property AGE hinzufügen. Der Eintrag mit firstname 'Peter' soll das AGE: 45 bekommen.

const updatedArray = arrayData.map((user)=>{

    if(user.firstname == "peter"){
        //erstellen einer Kopie von user mit dem SPREAD Operator
        return {...user, age: "45"}
    }
    return {...user, age: ""}

})

console.log("updated", updatedArray)




