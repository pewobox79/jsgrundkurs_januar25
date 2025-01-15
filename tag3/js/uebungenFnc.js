//ÜBUNGSFUNKTIONEN
//Rückgabe eine fullname (beispiel "Mein Name ist John Doe");
//Filterung der Kontakte nach alter Kleiner oder gleich 30;
//Berechnung des Altersdurchschnitts aller Kontakte;

const contacts = [
    {
        firstname: "John",
        lastname: "Doe",
        address: {
            city: "New York",
            street: "5th Avenue",
            zipcode: "10001"
        },
        age: "30"
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        address: {
            city: "Los Angeles",
            street: "Sunset Boulevard",
            zipcode: "90028"
        },
        age: "25"
    },
    {
        firstname: "Mike",
        lastname: "Johnson",
        address: {
            city: "Chicago",
            street: "Michigan Avenue",
            zipcode: "60601"
        },
        age: "35"
    },
    {
        firstname: "Emily",
        lastname: "Davis",
        address: {
            city: "Houston",
            street: "Main Street",
            zipcode: "77002"
        },
        age: "55"
    }
];

//hier der code

//funktion 1

const getFullname = (firstname, lastname) => {

    return `Mein Name ist ${firstname} ${lastname}`

}

contacts.forEach(item => {

    const fullname = getFullname(item.firstname, item.lastname)
    console.log( fullname);
})

//alternative nur einen ausgewählten kontakt
const fullname = getFullname(contacts[0].firstname, contacts[0].lastname)
console.log("contact index 0", fullname)





//funktion 2

const getContactsByAge30 = (data) => {
    //data-property steht für contacts array
    return data.filter(item => item.age <= 30)
}

const newList = getContactsByAge30(contacts);
console.log("list younger than 30", newList);








//funktion 3

const calculateAvg = (data) => {
    let totalAge = 0; //final ist totalAge 145;
    data.forEach((contact) => {
        totalAge = totalAge + Number(contact.age);
    })

    return totalAge / data.length


}

const total = calculateAvg(contacts)
console.log("avg", total)


