/*
NUMBERS
-sveikieji / desimtainiai
-teigiami / nulis/neigiami
-normalus / ne normalus

"Ne normalus"
    -Infinity
    - -Infinity
    -NaN (not-a-number)

    Matematiniai operatoriai:
-aritmetiniai: +, -, /, *, **, %, ++, --
**(laipsnio rodiklis), %(liekana)
- priskyrimo: +=, -=, /=, *=, **=, %=

*/

const pirmas = 5
const antras = 7
const trecias = 79;



console.log(pirmas);
console.log(antras);

const suma = pirmas + antras;
console.log(suma);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const dalmuo1 = pirmas / antras;
console.log(dalmuo1);

const dalmuo2 = antras / pirmas;
console.log(dalmuo2);

const sandauga = pirmas * antras;
console.log(sandauga);

const laipsnis1 = pirmas ** antras;
console.log(laipsnis1);

const laipsnis2 = antras ** pirmas;
console.log(laipsnis2);

console.log(2 ** 2, 2 * 2);
console.log(2 ** 3, 2 * 2 * 2);
console.log(2 ** 4, 2 * 2 * 2 * 2);

const liekana1 = pirmas % antras;
console.log(pirmas, '%', antras, '=', liekana1);

const liekana2 = antras % pirmas;
console.log(antras, '%', pirmas, '=', liekana2);

console.clear();

let pinigine = 0;
console.log(pinigine);
console.log(pinigine);

pinigine = 10;
console.log(pinigine);
console.log(pinigine);

pinigine = 50;
console.log(pinigine);
console.log(pinigine);

console.clear();

let money = 0;          // 0
console.log(money);

money = 5;              // 5
console.log(money);

// ?? = 5+5
money = money + 5;      // 10
console.log(money);

// ?? = 10 + 5
money = money + 5;      // 15
console.log(money);

money = money + 5;
console.log(money);

console.clear();

let greitukas = 13;
console.log(greitukas);

greitukas = greitukas + 3;
console.log(greitukas);

greitukas = 2 * greitukas - 1;
console.log(greitukas);

greitukas = greitukas % 3;
console.log(greitukas);

greitukas = greitukas ** 1000000;
console.log(greitukas);

console.clear();

let x = 1;
console.log(x);

x += 1; 
console.log(x);

// x = x + 1 tas pats kas ir 112 eil
// tarpo tarp + ir = privalo nebuti
        
x *= 20; 
console.log(x);

x /= 5; 
console.log(x);

x %= 3; 
console.log(x);

x **= 10; 
console.log(x);

console.clear();

let y = 10;
console.log(y);

y += 10 + 10 + 10;
console.log(y);

y -= 5 * 4;
// 40 - 5 * 4 
console.log(y);

y -= 10 - 5 * 4;
console.log(y);

console.clear();

let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai += 1;
console.log(makaronai);

/* matematine operacija - kai prie saves prideti +
arba atimti
*/

//makaronai += 1;
makaronai++ ;
console.log(makaronai);

makaronai++ ;
makaronai++ ;
makaronai++ ;
makaronai++ ;
makaronai++ ;
makaronai++ ;
console.log(makaronai);

console.clear();

// makaronai-- ;
//console.log(makaronai);
// rodys, kad atminusavo 1

let g = 6;

console.log(g);
// pirmiau spausdina, po to padidina
console.log(g++);
console.log(g);
// pirmaiau padidina, po to spausdina
console.log(++g);
console.log(g);
