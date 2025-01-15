const button = document.getElementById("button");
const input = document.getElementById("input");

button.innerText = "Submit";

let data = ""; // hier wird der value des inputfeldes gespeichert => global scope!

function handleClick(){

    console.log("data to submit", data)
}

function handleChange(event){
    data = event.target.value

}


input.addEventListener("change", handleChange)
button.addEventListener("click", handleClick)