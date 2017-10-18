var Greetnings = ["Hey there, pirate!", "Good morning, professor", "Bonjour monsieur", "Yo brother from another mother!"];

var randomGreet = Greetnings[Math.floor(Math.random()*4)];

console.log(randomGreet);

modul.exports = {randomGreet:randomGreet};
