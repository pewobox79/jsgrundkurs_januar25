console.log("mein blog")

// fetch von blog artikeln json placeholder /posts
// ausgabe der posts im blogpage.html
// => definition des Ankers, wo die artikel hin solle
// => nach dem daten erhalt muss eine element für die artikel gebaut werden

// am ende sollen alle artikel ausgebeben sein (title, body)
// => BONUS: stylen des einzelnen artikels


const posts = document.getElementById("articles");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {


        data.forEach((post) => {
            getUserName(post.userId)
                .then(authorData => {
                    createElement(post.title, post.body, authorData.name)
                });

        })
    })


function createElement(title, body, author) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const pAuthor = document.createElement("p")

    //inhalt
    h3.innerText = title;
    p.innerText = body.replaceAll("\n", " ");
    pAuthor.innerText = author.name;


    //style
    div.style = "border: 1px solid green; border-radius: 10px; padding: 20px; margin: 10px 0";
    h3.style = "text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;"

    //frontend
    div.append(pAuthor, h3, p);
    posts.appendChild(div);


}


function getUserName(userId) {

    const author = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    return author
}