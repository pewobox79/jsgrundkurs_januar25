import { createServer } from 'node:http';
import { getUsers } from './utils/apiHelper.js';

//bauen von server
const server = createServer((req, res) => {



    if (req.url === "/") {
        res.write("hallo klaus");
        res.end();
        
    } else if (req.url === "/aboutus") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>hier ist einiges über uns als team</h1>")
        res.end()

    } else if (req.url === '/api/users') {

        const params = req.url;
        console.log("param", params)

        getUsers().then(data => {

            const singleUser = data.find((item) => item.id === 1)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify(singleUser))
            res.end()

        });



        /*   const users =[
              {
                  username: "klausen345",
                  password: "kjhfou98aszefh"
              },
              {
                  username: "heinzen8979879",
                  password: "password"
              },
              {
                  username: "muellermike",
                  password: "jlkajf893"
              }
          ];
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.write(JSON.stringify(users))
          res.end()
   */

    } else {
        res.write("seite nicht bekannt")
        res.end()
    }


})

//port server
server.listen(8080, () => console.log("server läuft auf PORT 8080"))