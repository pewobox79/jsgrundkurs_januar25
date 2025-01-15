//get elements

const button = document.getElementById("userButton");
const list = document.getElementById("usersList");

const createElement = (name, username, email) => {

    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const usernameP = document.createElement("p");
    const emailP = document.createElement("p");


    //content
    usernameP.innerText = username;
    h3.innerText = name;
    emailP.innerText = email;

    //styling
    div.style = "border: 1px solid lightgrey; border-radius: 10px; padding: 20px; margin: 5px 0"

    //merge
    div.append(h3, usernameP, emailP);
    list.appendChild(div)

}

function getUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {

            data.forEach((user) => {
                createElement(user.name, user.username, user.email)
            })
        })


}

function generateUserList() {

    list.innerHTML = "";
    getUsers()
}

button.addEventListener("click", generateUserList)