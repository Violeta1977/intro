/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

< - maziau;
> - daugiau;
<= - daugiau arba lygu
>= - maziau arba lygu
== - lygu
!= - nelygu
=== - lygu
!== - nelygu

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

if else daliu gali buti neribotas kiekis

*/

const age = 99;
const ageLimit = 18;

if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas');
}

if (age > ageLimit) {
    console.log('Sorry, bet esi per jaunas');
}

if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas');
} else {
    console.log('Ok, uzeik ir pasismagink!');
}

if (age > ageLimit) {
    console.log('Sorry, bet esi per jaunas');
} else {
    console.log('Ok, uzeik ir pasismagink!');
}

console.clear();

// 2 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> Nezinau tokios spalvos
const color1 = 'white';
const color2 = 'black';
const color3 = 'red';
const color4 = 'orange';
const color5 = 'blue';
const color6 = 'violet';
const color7 = 'green';
const color8 = 'yellow';
let translation = '';

if (color3 === 'red') {
    console.log('Raudona');
} else {
    console.log('Nezinau tokios spalvos');
}

if (color5 === 'blue') {
    console.log('Melyna');
} else {

}

if (color7 === 'green') {
    console.log('Zalia');
}

console.clear();

if (color3 === 'red') {
    console.log('Raudona');
} else if (color5 === 'blue') {
    console.log('Melyna');
} else if (color7 === "green"){
    console.log('Zalia');
} else {
    console.log('Nezinau tokios spalvos');
}
 
console.clear();

if (color3 === 'red') {
    translation = 'Raudona';
} else if (color5 === 'blue') {
    translation = 'Melyna';
} else if (color7 === "green"){
   translation = 'Zalia';
} else {
    translation = 'Nezinau tokios spalvos';
}

console.log(translation);

function colorTranslation(color) {
    let translation = '';

    if (color === 'red') {
        translation = 'Raudona';
    } else if (color === 'blue') {
        translation = 'Melyna';
    } else if (color === "green"){
       translation = 'Zalia';
    } else {
        translation = '...';
    }
    return translation + '->' + color
}

console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('yellow'));
