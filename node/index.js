import {createServer} from 'node:http'

//bauen von server
const server = createServer((req, res)=>{

    console.log(req)

    if(req.url === "/"){
        res.write("hallo klaus");
        res.end();
    }else if(req.url === "/aboutus"){
        res.writeHead(200, {'Content-Type': 'text/html' })
        res.write("<h1>hier ist einiges über uns als team</h1>")
        res.end()

    }else if(req.url === '/api/users'){

        const users =[
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


    }else{
        res.write("seite nicht bekannt")
        res.end()
    }
    

})

//port server
server.listen(8080, ()=> console.log("server läuft auf PORT 8080"))