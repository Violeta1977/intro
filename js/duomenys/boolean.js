/*
Boolean - logine reiksme

-true: pozityvi reiksme, taip 
-falce: negatyvi reiksme, ne

Kintamasis turi buti klausymo forma
const isSunShining
Has
Does ir t.t
Vien is kintamojo pavadinimo tu gali suprasti, kan tai boolean.
Nenaudoti su aritmetiniais zenklais

Operatoriai (zenklai)
Boolean logikos operatoriai:
- && (and) ampersandai
- || (or) pipe, pipline
- ! (not) kai sprendziant uzdavini, nori apversti salyga
!! grazinti pirmine reiksme
tarp sauktuko ir reiksmes neturi buti tarpo

Butinai turi buti du zenklai

Kai yra and && vienintelis true resultatas bus tik su visom true
Jet aplink && and bus falce, tai visa salyga bus falce

Kaip interpertuojami kiti duomenu tipai 
ir ju reiksmes, jei jos yra naudojamos 
lyg boolean'ai?

String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei NaN - false
- jei nulis - false
- jei ne nulis - true
- jei Infinity - true
- jei -Infinity - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefined - false
null - false

*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', true + true);
console.log('KAIP NENAUDOTI:', true * false);

console.log('--------------');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Mergina
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautifull = true;
const isYoung = true;
const isRich = true;

const willGoTo = isBeautifull && isYoung && isRich;

console.log(willGoTo);

console.log('______________');

// VAIKINAS
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautifull1 = false;
const isYoung1 = true;
const isRich1 = true;

const willGoTo1 = isBeautifull || isYoung || isRich;

console.log(willGoTo);

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('----------------');

console.clear();

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------------');

console.log(true && true && true);
console.log(true && true && false);
console.log(true && false && false);
console.log(false && false && false);
console.log(false && false && true);
console.log(false && true && true);
console.log(false && true && false);
console.log(true && false && true);

console.log('-----------------------');

console.log(true || true || true);
console.log(true || true || false);
console.log(true || false || false);
console.log(false || false || false);
console.log(false || false || true);
console.log(false || true || true);
console.log(false || true || false);
console.log(true || false || true);

console.clear();

console.log(true || true || (true && true));
console.log((true && true) || true || false);
console.log(true || (true && false) || true);
console.log((true && false && false) || false);

//

console.log(false || (false && true) || true);
console.log(false || (true && false) || true);
console.log((false && false && true) || true);

/* prioritetas &&: pirma paskaiciuoja &&, 
paskui is eiles ||, is desines i kaire
*/

console.log((false && false && true) || false);
console.log(false || (false && true && true));
console.log(false || (true && false && true));

console.log((false && false && true && false) || true);

console.log(false || (true && true) || (true && true) || true);

console.clear();

console.log(!true);

// ne tiesa

console.log(!false);

// ne netiesa :))

console.log(!!true);
console.log(!!false);

/*
kiekvienas sekantis sauktukas panaikina (apsuka) pries 
tai esancia boolean reiksme

*/

console.log(isRich);
console.log(!isRich);
console.log(!!isRich);

// daugiau kaip du sauktukai nerasomi

console.log(false || (false && true) || true);
console.log(false || (true && false) || true);
console.log((false && false && true) || true);
console.log((true && false && true) || true);
console.log((true && false && false) || true);
console.log((false && false && false) || true);
console.log((false && false) || false || true);

console.log(!true);
console.log(!false);
console.log(!!false);
// daugiau nei 2 sauktukai - nerasyti, please... 👀
console.log(!!!false);
console.log(!!!!false);
console.log(!!!!!false);
console.log(!!!!!!false);

console.clear();

const bbb = 4 + 2;

if (bbb) {
  console.log(true);
} else {
  console.log(false);
}

const n1 = 4;
const n2 = '4';

if (n1 === n2) {
  console.log('Taip', n1 + n2);
} else {
  console.log('Ne');
}
