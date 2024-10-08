/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log("esercizio1", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("esercizio2", pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("esercizo 3", pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstElement = pets.shift();
pets.push(firstElement);
console.log("esercizio 4", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];
const licensePlates = ["GO329HR", "EF456SH", "FJ789KL", "ML987LF", "DI624DN"];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlates[i];
}
console.log("esercizio 5", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newcar = {
  brand: "Audi",
  model: "A1",
  color: "withe",
  trims: ["business", "style", "r-line"],
  licensePlates: licensePlates[4]
};
cars.push(newcar);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("esercizio 6", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.shift());
}
console.log("Esercizo 7", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const newCharArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      newCharArray.push(1);
      break;
    case "b":
      newCharArray.push(2);
      break;
    case "c":
      newCharArray.push(3);
      break;
    case "d":
      newCharArray.push(4);
      break;
    case "e":
      newCharArray.push(5);
      break;
    case "f":
      newCharArray.push(6);
      break;
    case "g":
      newCharArray.push(7);
      break;
    case "h":
      newCharArray.push(8);
      break;
    case "i":
      newCharArray.push(9);
      break;
    case "l":
      newCharArray.push(10);
      break;
    case "m":
      newCharArray.push(11);
      break;
    case "n":
      newCharArray.push(12);
      break;
    case "o":
      newCharArray.push(13);
      break;
    case "p":
      newCharArray.push(14);
      break;
    case "q":
      newCharArray.push(15);
      break;
    case "r":
      newCharArray.push(16);
      break;
    case "s":
      newCharArray.push(17);
      break;
    case "t":
      newCharArray.push(18);
      break;
    case "u":
      newCharArray.push(19);
      break;
    case "v":
      newCharArray.push(20);
      break;
    case "z":
      newCharArray.push(21);
      break;
  }
}
