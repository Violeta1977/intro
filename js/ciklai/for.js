/*
FOR - pagrindinis ciklas (loop)

let i (iteration) = ... : kelinta iteracija (proceso kartojimas)
kintamasis nesikeicia                            1        1
tam, kad jis keistusi reikalingas i++ (i = i + ..., i += ...)
i < ....(10), stop, kai 10 reiksme 
( ima 10 reiksmiu, 0 iki 9, jei i = 0)
jeigu i = 3, tai prades nuo 3
mazejimo tvarka (let i = 20; i > 10; i--)
paprasciau sakant i = 0: nuo kurios pozicijos pradeda
i <: kiek kartu
i++, i += 2, i--, i -= 2:  kas kelinta pozicija

masyvas ir loop eina kartu (daznai)
*/

console.log("START");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// mazejimo tvarka, baigia darba ties 1
for (let i = 5; i > 0; i--) {
  console.log(i);
}

for (let i = 20; i > 10; i -= 2.3) {
  console.log(i);
}

// suapvaliname skaicius is ....tainiu i sveikus
// konsoleje i / 10
for (let i = 200; i > 100; i -= 23) {
  console.log(i / 10);
}

console.log("FINISH");

console.clear();

const colors = ["white", "black", "red", "green", "blue", "violet", "yellow"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

console.log("-------------");

// masyvo automatizavimas, iraso kintamosios pozicija
for (i = 0; i < 6; i++) {
  console.log(i, colors[i]);
}

console.clear();

// nera irasyto skaiciaus
// automatiskai pasiima masyvo duomenis (name.length)
for (i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
}

console.log("---------------");

// masyvo rasymas atgaline eiga (nuo galo iki pirmos reiksmes)
//                             i > -1 ; i = i - 1
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(i, colors[colors.length - 1 - i]);
}

console.clear();

//

const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

console.log(sum / marks.length);

console.clear();

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function marksAverage(marks) {
  if (marks.length === 0) {
    return "Nera pazymiu.";
  }

  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return sum / marks.length;
}

console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));

const text = "Labas";

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
