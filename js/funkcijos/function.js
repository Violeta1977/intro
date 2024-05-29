/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

/* 
tuscias funkcijos  "kunas"
bazinis funkcijos  "kunas 
funkcijos pavadinimas rasomas is mazosios raides ir su ()
visos funkcijos grazina darbo rezultata
reikia sukurti bloka "return"

function doSomething(params) {
    // 1) Input (parametru) validavimas
    // 2) Vykdome logika
    // 3) Gauto rezultato validavimas
    // 4) Graziname rezultata
}
*/

function funkcijosPavadinimas() {}

const a = funkcijosPavadinimas();

console.log(a);

function empty() {
  return undefined;
}

console.log(empty());

function giveMeFive() {
  return 5;
}

console.log(giveMeFive());

/*
Input:
name = Jonas
surname = Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!

Laba diena, as esu Maryte Marytaite!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaityte!
*/

function intro(name, lastname) {
  return 'Laba diena, as esu ' + name + ' ' + lastname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Marytaite'));
console.log(intro('Petras', 'Petraitis'));
console.log(intro('Ona', 'Onaityte'));

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

console.log(multiply(5, 7));
console.log(multiply(20, 5));
console.log(multiply(-6, 2));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus.

function iLike(name, age, interest) {
  return (
    'Mano vardas yra ' +
    name +
    ' , man ' +
    age +
    ' metai ir as megstu ' +
    interest +
    '.'
  );
}

console.log(iLike('Jonas', 99, 'cepelinus'));
console.log(iLike('Maryte', 88, 'balionus'));

function price(value) {
  const PVM = 21;
  const priceIncrease = 1 + PVM / 100;
  const priceForSale = value * priceIncrease;

  return priceForSale;
}

console.log(price(100));
console.log(price(200));

// Dictionary: ZODIS, ZODIS, ZODIS.

function words(w1, w2, w3) {
  let sentence = 'Dictionary: ';
  sentence += w1;
  sentence += ' ';
  sentence += w2;
  sentence += ', ';
  sentence += w3;
  sentence += '.';
  return sentence;
}

console.log(words('labas', `rytas`, 'Lietuva'));
