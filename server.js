const express = require('express')
const app = express()



app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/greet/:id?', function (req, res) {

  var Greetnings = ["Hey there, pirate", "Good morning, professor",
  "Bonjour monsieur", "Yo brother from another mother"];
  var randomGreet = Greetnings[Math.floor(Math.random()*4)];
  var id = req.params.id;
  if(!id){
    res.send(randomGreet)
  }

      else {
        res.send(randomGreet + " "+ id);
}
})


app.listen(3000 || process.env.PORT, function () {
  console.log('Example app listening on port 8080!')
})

app.use(express.static('public'))

app.use('/static', express.static('public'))


console.log('greet');
