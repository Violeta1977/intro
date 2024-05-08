// Kintamųjų inicijavimas

/*
Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/


const number1 = 1;
console.log(number1);

const number2 = 3;
console.log(number2);

const number3 = 5;
console.log(number3);

/*
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const word1 = "Saule";
console.log(word1);

const word2 = "sviecia";
console.log(word2);

const word3 = "skaisciai";
console.log(word3);

/*
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const numbers1 = [1, 3, 5, 7, 9];
console.log(numbers1);

const numbers2 = [2, 4, 6, 8, 10];
console.log(numbers2);

const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3);

/*
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const words1 = ['Labas', 'rytas', 'linkiu', 'geros', 'dienos']
console.log(words1);

const words2 = ['Gyvenimas', 'yra', 'kupinas', 'maloniu', 'netiketumu']
console.log(words2);

const words3 = ['laime', 'sviesa', 'dziaugsmas', 'juokas', 'laisve'];
console.log(words3);

// Veiksmai su kintamaisiais

/*
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
*/

const sum = number1 + number2 + number3
console.log(sum);

/*
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
*/

const sentence = word1 + ' ' + word2 + ' ' + word3;
console.log(sentence);

/*
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
*/

const value1 = numbers1[0] - numbers1[1] + numbers1[2] - numbers1[3] + numbers1[4];
console.log(value1);

const value2 = numbers2[0] - numbers2[1] + numbers2[2] - numbers2[3] + numbers2[4];
console.log(value2);

const value3 = numbers3[0] - numbers3[1] + numbers3[2] - numbers3[3] + numbers3[4];
console.log(value3);

/*
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

// 'Labas','rytas','linkiu','geros','dienos'
const sentence1 = words1[0] + ', ' + words1[1] + ', ' + words1[2] + ', ' + words1[3] + ', ' + words1[4];
console.log(sentence1);

// 'Gyvenimas', 'yra', 'kupinas', 'maliniu', 'netiketumu'
const sentence2 = words2[0] + ', ' + words2[1] + ', ' + words2[2] + ', ' + words2[3] + ', ' + words2[4];
console.log(sentence2);

//'laime', 'sviesa', 'dziaugsmas', 'juokas', 'laisve'
const sentence3 = words3[0] + ', ' + words3[1] + ', ' + words3[2] + ', ' + words3[3] + ', ' + words3[4];
console.log(sentence3);

console.clear();

// Kintamųjų palyginimas

/*
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
*/
// 1.
const lenght = 25;
const lenght2 = 10;

if (lenght > lenght2) {
    console.log('pomidoras');
}

if (lenght < lenght2) {
    console.log('pomidoras');
}

if (lenght === lenght2) {
    console.log('pomidoras');
}

if (lenght !== lenght2) {
    console.log('pomidoras');
}

if (lenght >= lenght2) {
    console.log('pomidoras');
}

if (lenght <= lenght2) {
    console.log('pomidoras');
}

console.clear();

/*
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
*/

// 2.
const text = 'labukas';
const tekstL = text.length;
console.log(text.length);
// 7 raides

const text1 = 'sveiki';
const tekstL1 = text1.length
console.log(text1.length);
// 6 raides

if (tekstL > tekstL1) {
    console.log('pomidoras');
}

if (tekstL < tekstL1) {
    console.log('pomidoras');
}

if (tekstL === tekstL1) {
    console.log('pomidoras');
}

if (tekstL !== tekstL1) {
    console.log('pomidoras');
}

if (tekstL >= tekstL1) {
    console.log('pomidoras');
}

if (tekstL <= tekstL1) {
    console.log('pomidoras');
}

console.clear();

/*
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus

*/

const num = [1, 3, 5, 7, 9];
console.log(num);

const num1 = num[0] + num[1] + num[2] + num[3] + num[4];
const numCount = num.length;
console.log(numCount);

const colors = ['blue', 'orange', 'brown'];
console.log(colors);

const colorsCount = colors.length;
console.log(colorsCount);

if (numCount > colorsCount) {
    console.log('pomidoras');
}

if (numCount < colorsCount) {
    console.log('pomidoras');
}
if (numCount === colorsCount) {
    console.log('pomidoras');
}

if (numCount !== colorsCount) {
    console.log('pomidoras');
}

if (numCount >= colorsCount) {
    console.log('pomidoras');
}

if (numCount <= colorsCount) {
    console.log('pomidoras');
}