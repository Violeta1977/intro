/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
lauztiniai skliaustai [] nurodo, kad tai masyvas 
*/

const empty = [];
console.log(empty);

// arba galima kurti daug kintamuju
/*
 silpnos vietos - vercia daryti rankiniu budu daug pkeitimu,
 jei atsiranda naujos kintamosios
 */
const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

// count - kiekis, average - vidurkis
const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count; 

console.log(average1);

// eiliskumas prasideda nuo 0
//              0  1  2  3  4
const marks = [10, 2, 8, 4, 6];
console.log(marks);

// jei kreiptis i marks, tada rodo visus narius
console.log('>>>', marks);

// kreipiesi i atskira marks
console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);

/*
automatizavimas vyksta:
- sudarome list (sarasa): const name = [a, b, c]
-kreipiames i masyvo savybes: name.length
(tam, kad paskaiciuotu masyvo
parametru kieki, t.y. kiek nariu (skaiciu, zodziu...) yra masyve)
*/
const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.clear();

// 10, 2, 8, 4, 6

let sum3 = 0;
let index = 0;
// siuo atveju index pozicijos vieta [0]

/*
sum3 = sum3 + marks[0];
sum3 = sum3 + marks[1];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];
//  ? = 30 + undefinde = NaN, nes neturi reiksmes
// sum3 = sum3 + marks[5];
*/

/*
sum3 = sum3 + marks[index];
index += 1;
sum3 = sum3 + marks[index];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];

sum3 += marks[]
*/

// index = o
sum3 += marks[index++];
// index = 10
sum3 += marks[index++];
// index = 12
sum3 += marks[index++];
// index = 20
sum3 += marks[index++];
// index = 24
sum3 += marks[index++];
// index = 30

console.log(sum3);


