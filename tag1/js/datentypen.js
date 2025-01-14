//dieser teil ist javascript

//PRIMITIVE / NON-PRIMITIVE Date Type

//PRIMITIVES

const numberType10 = 10; //Konstante hat fixen Wert
//console.log(numberType10);

const stringType = 'hallo'; //Ausführung Konstante nach Initialisierung möglich => nicht vorher
//console.log(stringType);

const booleanType = true // kann nur true / false sein
//console.log(booleanType);

const floatType = 33.3; // ungerade Zahlen;
const floatType2 = 33.3;

const integerNumber = 20 // gerade zahl klein
const bigInteger = 234232332423 //gerade zahl groß

const numberAsString = "22";
const number = 22;
const addTwoNumbers = numberAsString + ' ' + number;

const undefinedType = undefined;
const nullType = null;

// wenn number und string mit +-zeichen verbunden werden, dann kein mathematische operator sondern erstellt neuen string
//console.log("ergebnis", addTwoNumbers)

//console.log("number as string", numberAsString === number)

//Vergleichen von datentypen

const compare = floatType == floatType2 //  rückgabewert RETURN befehl
//console.log("vergleich floatType: ", compare)
/*
vergleich mit == gibt den Wert aus
vergleich mit === gibt den wert aus und vergleicht daten typ
*/


//NON-PRIMITIVES

const objectPerson = {
    firstname: "Peter",
    lastname: "Wolf",
};


const objectPerson2 = {
    firstname: "Peter",
    lastname: "Wolf",
};

//console.log("vergleich object", objectPerson == objectPerson2)

const fullname = objectPerson.firstname + ' ' + objectPerson.lastname;
// console.log("person", fullname);

const arrayData = [

    {
        firstname: "peter",
        address: {
            street: ""
        }
    },
    { firstname: "klaus", address: { street: "" } },
    { firstname: "peter", address: { street: "strasse" } },
    { firstname: "klaus", address: { street: "" } },
    { firstname: "peter", address: { street: "" } },
    { firstname: "klaus", address: { street: "" } },
];
arrayData[0].firstname
//variable

let name = "peter"; // variable hat initial den wert "peter"

name = "Martin"














