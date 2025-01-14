//FETCH METHODE - HTTP PROMISE

//dom elemente erhalten
const todos = document.getElementById("todos")


const getToDos = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {

            data.forEach((todo)=>{
                //kreieren der nötigen Elemente
                const div = document.createElement("div");
                const h4 = document.createElement("h4");
                const p = document.createElement("p");

                //füllen der tags
                h4.innerText = todo.title;
                p.innerText = `Status: ${todo.completed ? "erledigt": "offen"}`

                //styling
                div.style.border = "1px solid red";
                div.style.margin = "2px 0";
                div.style.padding = "0 20px";
                div.style.backgroundColor = `${todo.completed ?"green": "white"}`

                //elemente zusammefügen
                div.append(h4,p);
                todos.appendChild(div);







            })


            

        })

}

//aufruf der funktion
getToDos();

const getItemByUserId=(id, data)=>{

    const filteredData = data.filter(toDo=>toDo.userId === id)



}


