// [1, 2, 3] -> [2, 4, 6]

function double(list) {
  const result = [];

  for (const item of list) {
    result.push(item * 2);
  }

  return result;
}

function triple(list) {
  const result = [];

  for (const item of list) {
    result.push(item * 3);
  }

  return result;
}

const a1 = [1, 2, 3];
const a2 = [10, 2, 8, 4, 6];

console.log(a1, double(a1));
console.log(a2, double(a2));

console.log(a1, triple(a1));
console.log(a2, triple(a2));

function map(list, transformFunc) {
  const result = [];

  for (const item of list) {
    result.push(transformFunc(item));
  }

  return result;
}

console.log(map(a1, (n) => n * 2));
console.log(map(a2, (n) => n * 3));

console.log(map(a1, (n) => 1));
console.log(map(a2, (n) => 0));

console.log(map(a2, (n) => n + 1));
console.log(map(a2, (n) => (2 * n + 1) % 10));

console.log('--------------------');
console.log(a1);
console.log(a1.map((n) => n * 2));

console.log(a2);
console.log(a2.map((n) => n * 3));

console.log(['Labas', 'rytas', 'Lietuva'].map((s) => s.length));
console.log(['Labas', 'rytas', 'Lietuva'].map((s) => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map((s) => s.charAt(s.length - 1)));

const firstSymbol = (s) => s[0];
const lastSymbol = (s) => s[s.length - 1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));

const marks = [10, 2, 8, 4, 6];

const updatedMarks = marks.map((n) => (n + 1 > 10 ? 10 : n + 1));
console.log(updatedMarks);

function increaseMarks(mark) {
  if (mark === 10) {
    return 10;
  }

  return mark + 1;
}

const updatedMarks2 = marks.map(increaseMarks);
console.log(updatedMarks2);

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.727];

const positiveNumbers = randomNumbers.filter((n) => n >= 0);
console.log(positiveNumbers);

const negativeNumbers = randomNumbers.filter((n) => n < 0);
console.log(negativeNumbers);

const integerNumbers = randomNumbers.filter((n) => n % 1 === 0);
console.log(integerNumbers);

const decimalNumbers = randomNumbers.filter((n) => n % 1 !== 0);
console.log(decimalNumbers);

const randomData = [
  0,
  10,
  NaN,
  Infinity,
  -3,
  'labas',
  3.14,
  true,
  5,
  [],
  777,
  -13,
  {},
  undefined,
  -2.727,
];

// teigiami sveikieji skaiciai (visi iskyrus 0)
// ne neigiami sveikieji skaiciai (itraukia 0 prie teigiamu)
// ne teigiami
// (n % 1 === 0: palieka skaicius, kurie neturi liekanos)
// (n % 1 !== 0: palieka skaicius, kurie turi liekana)
// n => true (palik visas reiksmes), nes skaitys, kad kiekviena reiksme yra true
// .filter galima prideti kiek nori, bet bus brangiau

const tss = randomData //15
  .filter((n) => Number.isInteger(n)) //6 masyve palieka tik sveikuosius skaicius
  // ismeta visas reiksmes, isskyrus skaicius
  .filter((n) => n >= 0);

console.log(tss);

const tss2 = randomData //15
  .filter((n) => typeof n === 'number') //15
  .filter((n) => isFinite(n)) //10 ismeta ir infinity ir NaN
  // !isNaN(n) arba !Number.isNaN(n)
  .filter((n) => n >= 0) //6
  .filter((n) => n % 1 === 0); //5

console.log(tss2);

const tss3 = randomData //15
  .filter((n) => Number.isInteger(n) && n >= 0); //15

console.log(tss3);

// SORT
/*
issortiruoja, transformuoja(pakeicia) stringus abc tvarka;
Numbers (1, 10, 100, 1000, 101, 102, 11, 117, 12) abc tvarka kur 1 -> a ir t.t
*/

const dictionary = ['labas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);

dictionary.sort();
console.log(dictionary);

const jonasMarks = [
  10, 2, 8, 11, 143, 123, 120, 12, 117, 102, 4, 1, 100, 100000, 6,
];
console.log(jonasMarks);

// Number issortiruoti reikalinga funkcija
// .sort((a,b) => a - b) - sortiruoja nuo maziausio
// .sort((a,b) => b - a) - sortiruoja nuo didziausio
// naudojama tik Numbers
// jeigu grazina -1 -> a eina i prieki
// jeigu grazina 0 -> a ir b lieka vietoje
// jeigu grazina 1 -> a eina i gala
// neigiamas skaicius -> a eina i prieki
//                  0 -> a ir b lieka savo vietose
// teigiamas skaicius -> a eina i gala

// (5, 7) => neigiamas
// (7, 5) => teigiamas
// (7, 7) => 0
// (a, b) => a-b >>> ???

jonasMarks.sort((a, b) => a - b);
console.log(jonasMarks);

jonasMarks.sort((a, b) => b - a);
console.log(jonasMarks);

const du = [7, 5];
const duSorted = du[0] < du[1] ? [...du] : [du[1], du[0]];
console.log(duSorted);

const students = [
  { name: 'Maryte', marks: 10 },
  { name: 'Jonas', marks: 7 },
  { name: 'Petras', marks: 4 },
  { name: 'Ona', marks: 2 },
];

students.sort((a, b) => a.marks - b.marks);
console.log(students);

console.log('Maziausias vidurkis:', students[0].marks);
console.log('Maziausio autorius:', students[0].name);

console.log('Didziausias vidurkis:', students.at(-1).marks); // .at(-1) grazins paskutinio obj, param
console.log('Didziausio autorius:', students.at(-1).name);

function varduPalyginimas(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name === b.name) {
    return 0;
  } else {
    return 1;
  }
}

students.sort(varduPalyginimas);
console.log(students);

const money = [
  { name: 'Davidas', euro: 100 },
  { name: 'Sofija', euro: 250 },
  { name: 'Aleksas', euro: 50 },
  { name: 'Katerina', euro: 400 },
];
// for Numbers naudojama arrow funkcija ( yra objektas)
money.sort((a, b) => a.euro - b.euro);
console.log(money);

// for Strings naudojama klasikine funkcija ( yra objektas)
function varduPalyginimas1(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name === b.name) {
    return 0;
  } else {
    return 1;
  }
}

money.sort(varduPalyginimas1);
console.log(money);

// console.log('Maziausias vidurkis:', students[0].marks);
// console.log('Maziausio autorius:', students[0].name);

// console.log('Didziausias vidurkis:', students.at(-1).marks); // .at(-1) grazins paskutinio obj, param
// console.log('Didziausio autorius:', students.at(-1).name);
