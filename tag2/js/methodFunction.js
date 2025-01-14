// Funktion als Methode

const person ={
    firstname: "Peter",
    lastname: "Wolf",
    greet(){
        return `ich bin der ${this.firstname} ${this.lastname}`
    }
}

//im kontekt des Objects ist die function eine methode!!
console.log(person.greet())