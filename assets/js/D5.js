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


// const pets = ['dog', 'cat', 'hamster', 'redfish']
// for (i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


// pets.sort();
// console.log(pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/


// pets.reverse();
// for (i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


// let firstPet = pets.shift();
// pets.push(firstPet);
// console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// function addLicensePlate() {
//   for (i = 0; i < cars.length; i++) {
//     randomNumber = Math.floor((Math.random() * 899) + 101);
//     cars[i].license = 'ABC ' + randomNumber;
//   } return cars;
// }

// console.log(addLicensePlate());


/* ESERCIZIO 6 
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// let newItem = {
//   brand: 'Audi',
//   model: 'R8',
//   color: 'Pink',
//   trims: ['life', 'GT', 'race']
// };

// function addItem() {
//   cars.push(newItem);
//   return cars;
// }

// console.log(addItem());

// function removeElement() {
//   for (i = 0; i < cars.length; i++) {
//     delete cars[i].trims.pop();
//   }
//   return cars;
// }

// console.log(removeElement());

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

// const justTrims = []

// function firstElement() {
//   for (i = 0; i < cars.length; i++) {
//     justTrims.push(cars[i].trims[0]);
//   } return justTrims;
// }

// console.log(firstElement());


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

// function colorStamp () {
//   for (i = 0; i < cars.length; i++) {
//     if (cars[i].color[0] === 'b') {
//       console.log('Valore Fizz')
//     } else {
//       console.log('Valore Buzz');
//     }
//   } return cars;
// }

// console.log(colorStamp());

// for (i = 0; i < cars.length; i++) {
//   if (cars[i].color[0] === 'b') {
//     console.log('Valore Fizz')
//   } else {
//     console.log('Valore Buzz')
//   };
// }

// function colorStamp() {
//   for (i = 0; i < cars.length; i++) {
//     if (cars[i].color.charAt(0) === 'b') {
//       console.log('Il valore è Fizz');
//     } else {
//       console.log('Il valore è Buzz');
//     }
//   } return cars;
// } 

// console.log(colorStamp());

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/


const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,];

  
let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

console.log(numericArray[i]);



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


const charactersArray = ['g', 'n', 'u', 'z', 'd'];

let positions = [];
let numberPosition;

for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      positions.push(1);
      break;
    case 'b':
      positions.push(2);
      break;
    case 'c':
      positions.push(3);
      break;
    case 'd':
      positions.push(4);
      break;
    case 'e':
      positions.push(5);
      break;
    case 'f':
      positions.push(6);
      break;
    case 'g':
      positions.push(7);
      break;
    case 'h':
      positions.push(8);
      break;
    case 'i':
      positions.push(9);
      break;
    case 'l':
      positions.push(10);
      break;
    case 'm':
      positions.push(11);
      break;
    case 'n':
      positions.push(12);
      break;
    case 'o':
      positions.push(13);
      break;
    case 'p':
      positions.push(14);
      break;
    case 'q':
      positions.push(15);
      break;
    case 'r':
      positions.push(16);
      break;
    case 's':
      positions.push(17);
      break;
    case 't':
      positions.push(18);
      break;
    case 'u':
      positions.push(19);
      break;
    case 'v':
      positions.push(20);
      break;
    case 'z':
      positions.push(21);
      break;
    case 'j':
      positions.push(22);
      break;
    case 'k':
      positions.push(23);
      break;
    case 'w':
      positions.push(24);
      break;
    case 'x':
      positions.push(25);
      break;
    case 'y':
      positions.push(26);
      break;
    default:

  }

}

console.log(positions);



