/* const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) */

/* const http =  require ('http')
const fs = require('fs')
const port = 9000

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if (error){
            res.writeHead(404)
            res.write('Error:File not found')
        } else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('server is listening on port' + port)
    }
})
 */

fetch("beers.json")
    .then(response => response.json())
    .then(data => {   
        for (const beer of data.cards) {
            document.getElementById('container').insertAdjacentHTML("beforeend",  `
                    <div class="cards">
                        <h2>${beer.title}</h2><br>
                        <p>${beer.sub}</p><br>
                        <p> ${beer.text}</p><br>
                    </div>
                    `            
            )}
       
        })

    

/* // express változóban meghívjuk kívülről az express-t
const express = require('express');
// app változó = expressz() -> ez hozza létre az express servert
const app = express();

// http, fs változókban meghívjuk kívülről az http, ft-t
const http = require('http');
const fs = require('fs');
// a szerver a 9000-es porton fog futni
const port = 9000;

// ha "get" kérést kap a szerver a localhost:9000-re ('/'), akkor futtassa a funkciót
app.get('/', (request, response) => {
    // megpróbálja ez a kódot teljesíteni
    try {
        // a result változó kulcs-értéke a name: "HelloWorld!", és az age: 30
        const result = { name: "HelloWorld!", age: 30}
        // válaszként (response) a result változó tartalma lesz visszaküldve(.send())
        response.send(result)
      // ha nem sikerül, abban az esetben (error esetén)  
    } catch (error) {
        // válaszként magát az errort írja ki
        response.send(error)
    }
})

// elindítja a szervert a megadott porton(port változóra hivatkozunk), és várakozik a kérésekre (listen)
app.listen(port, () => {
    console.log(`Server runs on port ${port}`)
}) */
        
    