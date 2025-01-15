//ASYNC Programming

//element
const feedback = document.getElementById("feedback");
const output = document.getElementById("output")

async function getUsers() {
    feedback.innerText = "loading..."
    try {
        //try wird immer versucht
        setTimeout(async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log("user", data)
            output.innerText = JSON.stringify(data) //schnell ausgabe von daten sätzen im frontend
        }, 3000)

    } catch (error) {
        //catch erst bei auftretendem fehler
        console.log("fehler", error)

    } finally {
        console.log("finally")
        feedback.innerText = "success"
        //wird immer ausgeführt => egal of erfolgreich oder nicht

    }


}

getUsers()


