// 1. Kintamųjų inicijavimas

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

const words1 = ["Labas", "rytas", "linkiu", "geros", "dienos"];
console.log(words1);

const words2 = ["Gyvenimas", "yra", "kupinas", "maloniu", "netiketumu"];
console.log(words2);

const words3 = ["laime", "sviesa", "dziaugsmas", "juokas", "laisve"];
console.log(words3);

// 2. Veiksmai su kintamaisiais

/*
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
*/

// const sum = number1 + number2 + number3;
// console.log(sum);

/*
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
*/

// const sentence = word1 + " " + word2 + " " + word3;
// console.log(sentence);

/*
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
*/

const value1 =
  numbers1[0] - numbers1[1] + numbers1[2] - numbers1[3] + numbers1[4];
console.log(value1);

const value2 =
  numbers2[0] - numbers2[1] + numbers2[2] - numbers2[3] + numbers2[4];
console.log(value2);

const value3 =
  numbers3[0] - numbers3[1] + numbers3[2] - numbers3[3] + numbers3[4];
console.log(value3);

/*
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

// 'Labas','rytas','linkiu','geros','dienos'
const sentence1 =
  words1[0] +
  ", " +
  words1[1] +
  ", " +
  words1[2] +
  ", " +
  words1[3] +
  ", " +
  words1[4];
console.log(sentence1);

// 'Gyvenimas', 'yra', 'kupinas', 'maliniu', 'netiketumu'
const sentence2 =
  words2[0] +
  ", " +
  words2[1] +
  ", " +
  words2[2] +
  ", " +
  words2[3] +
  ", " +
  words2[4];
console.log(sentence2);

//'laime', 'sviesa', 'dziaugsmas', 'juokas', 'laisve'
const sentence3 =
  words3[0] +
  ", " +
  words3[1] +
  ", " +
  words3[2] +
  ", " +
  words3[3] +
  ", " +
  words3[4];
console.log(sentence3);

console.log("-------------------------------------------------------");

// 3. Kintamųjų palyginimas

/*
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, 
o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

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
  console.log("yes");
} else if (lenght < lenght2) {
  console.log("no");
}

if (lenght === lenght2) {
  console.log("taip");
} else if (lenght !== lenght2) {
  console.log("ne");
}

if (lenght >= lenght2) {
  console.log("yesss");
} else if (lenght <= lenght2) {
  console.log("nope");
}

console.log("+++++++++++++");

if (lenght > lenght2) {
  console.log("pomidoras");
}

if (lenght < lenght2) {
  console.log("pomidoras");
}

if (lenght === lenght2) {
  console.log("pomidoras");
}

if (lenght !== lenght2) {
  console.log("pomidoras");
}

if (lenght >= lenght2) {
  console.log("pomidoras");
}

if (lenght <= lenght2) {
  console.log("pomidoras");
}

console.log("---------------------------------------------------------");

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
const text = "labukas";
const tekstL = text.length;
console.log(text.length);
// 7 raides

const text1 = "sveiki";
const tekstL1 = text1.length;
console.log(text1.length);
// 6 raides

if (tekstL > tekstL1) {
  console.log("aga");
} else if (tekstL > tekstL1) {
  console.log("nea");
}

if (tekstL === tekstL1) {
  console.log("nene");
} else if (tekstL !== tekstL1) {
  console.log("ugu");
}

if (tekstL >= tekstL1) {
  console.log("jo");
} else if (tekstL <= tekstL1) {
  console.log("ne uz ka");
}

console.log(
  "-----------------------------------------------------------------"
);

/*
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
- kuris didesnis
- kuris mažesnis

- ar jie lygūs
- ar jie nelygūs

- kuris didesnis arba lygus
- kuris mažesnis arba lygus

*/

const num = [1, 3, 5, 7, 9];
console.log(num);

const num1 = num[0] + num[1] + num[2] + num[3] + num[4];
const numCount = num.length;
console.log(numCount);

const colors = ["blue", "orange", "brown"];
console.log(colors);

const colorsCount = colors.length;
console.log(colorsCount);

/*
 I. CIKLO FOR PANAUDOJIMAS
1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    - 0 … 0
    - 0 … 4
    - 0 … 100
    - 574 … 815
    - -50 … 50
    - -70 … 30
*/

/*
function intevalSum(start, finish) {
  let answer = 0;

  for (let i = start; i <= finish; i++) {
    answer += i;
  }

  return answer;
}

console.log(intevalSum(0, 0));
console.log(intevalSum(0, 4));
console.log(intevalSum(13, 21));
console.log(intevalSum(0, 100));
console.log(intevalSum(574, 815));
console.log(intevalSum(-50, 50));
console.log(intevalSum(-70, 30));
*/

/*
2.panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/

/*
function reverseString(text) {
  let answer = "";

  // for (let i = 0; i < text.length; i++) {
  //     answer += text[text.length - 1 - i];
  // }

  for (let i = 0; i < text.length; i++) {
    answer = text[i] + answer;
  }

  // for (let i = text.length - 1; i >= 0; i--) {
  //     answer += text[i];
  // }

  // for (let i = text.length - 1; i >= 0; i--) {
  //     answer = text[text.length - 1 - i] + answer;
  // }

  return answer;
}

console.log(reverseString("abcdef"), "-->", "fedcbsa");
console.log(reverseString("alus"), "-->", "sula");
console.log(reverseString("sedek uzu kedes"), "-->", "sedek uzu kedes");
*/

/*
3.Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    -0 - 11
    -8 - 31
    - -18 - 18
    -rezultatą pateikti tokiu formatu:
        -Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        -Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        -Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

/*
function numberCount(start, finish, step) {
  let answer = 0;

  for (let i = start; i <= finish; i++) {
    // jeigu, skaiciu dalinant is step liekana yra nulis, tai answer dydiname vienu vienetu
    if (i % step === 0) {
      answer++;
    }
  }

  return (
    "Skaičių intervale tarp " +
    start +
    " ir " +
    finish +
    ", besidalijančių be liekanos iš " +
    step +
    " yra " +
    answer +
    " vienetai."
  );
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));
*/

/* FUNKCIJOS

Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

Funkcija pavadinimu “tusciaFunkcija”:
    - nepriima jokių kintamųjų
    - neatlieka jokios vidinės logikos
    - gražina boolean tipo reikšmę “false”
    - TESTAS:
        - console.log( tusciaFunkcija() );
        - rezultatas: false
*/

function tusciaFunkcija() {
  return false;
}

console.log(tusciaFunkcija());

/*
FUNKCIJA PAVADINIMU "DAUGYBA"
    - priima du skaičiaus tipo kintamuosius
    - atskirame kintamajame įsimena sandaugos reikšmę
    - gražina saudaugos rezultatą
    - TESTAI:
        - console.log( daugyba( skaicius1, skaicius2 ) );
        - console.log( daugyba( skaicius3, skaicius2 ) );
        - console.log( daugyba( skaicius1, skaicius3 ) );
        - rezultatas: teisingos reikšmės;
*/

// n1
function daugyba(n1, n2) {
  const skaicius = n1 * n2;
  return skaicius;
}

console.log(daugyba(2, 3));
console.log(daugyba(4, 3));
console.log(daugyba(2, 3));

console.log(daugyba(2, "labas"));
console.log(daugyba(2, "labas".length));

function daugyba(n1, n2) {
  const skaicius = n1 * n2;
  return skaicius;
}

/*
FUNKCIJA PAVADINIMU “skaitmenuKiekisSkaiciuje”:
- priima vieną kintamąjį
- jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
- į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

// pabandyti du variantus
// su typeof
// tekstine israiska (formatu) .lenght

// 1 etapas
const n1 = 7;
const n2 = 5;
const n3 = 2;

const str1 = "Labas";
const str2 = "rytas";
const str3 = "Lietuva";

const marks1 = [10, 2, 8, 4, 6];
const marks2 = [9, 8, 7];

const class1 = ["Jonas", "Maryte", "Petras", "Ona"];
const class2 = ["Chuck", "Norris", "Jan", "Clod", "Van", "Damas"];

// 2 etapas
const sum = n1 + n2 + n3;
console.log(sum);

const sentence = str1 + " " + str2 + " " + str3;
console.log(sentence);

const marksSum1 = marks1[0] - marks1[1] + marks1[2] - marks1[3] + marks1[4];
console.log(marksSum1);

const marksSum2 = marks2[0] - marks2[1] + marks2[2];
console.log(marksSum2);

const class1Total =
  class1[3] + ", " + class1[2] + ", " + class1[1] + ", " + class1[0];
console.log(class1Total);

const class2Total =
  class2[5] +
  ", " +
  class2[4] +
  ", " +
  class2[3] +
  ", " +
  class2[2] +
  ", " +
  class2[1] +
  ", " +
  class2[0];
console.log(class2Total);

console.log("-------------");

console.log(str1, str1.length);
console.log(str2, str2.length);
console.log(str3, str3.length);
console.log("                       ".length);

if (str1.length === str3.length) {
  console.log("taip");
} else {
  console.log("ne");
}

if (class1.length === class2.length) {
  console.log("taip");
} else {
  console.log("ne");
}

console.clear();

function intevalSum(start, finish) {
  let answer = 0;

  for (let i = start; i <= finish; i++) {
    answer += i;
  }

  return answer;
}

console.log(intevalSum(0, 0));
console.log(intevalSum(0, 4));
console.log(intevalSum(13, 21));
console.log(intevalSum(0, 100));
console.log(intevalSum(574, 815));
console.log(intevalSum(-50, 50));
console.log(intevalSum(-70, 30));

// 0..0
let answer1 = 0;
for (let i = 0; i <= 0; i++) {
  answer1 += i;
}
console.log(answer1);

// 0..4
let answer2 = 0;
for (let i = 0; i <= 4; i++) {
  answer2 += i;
}
console.log(answer2);

// 0..100
let answer3 = 0;
for (let i = 0; i <= 100; i++) {
  answer3 += i;
}
console.log(answer3);

console.clear();

function reverseString(text) {
  let answer = "";

  // for (let i = 0; i < text.length; i++) {
  //     answer += text[text.length - 1 - i];
  // }

  for (let i = 0; i < text.length; i++) {
    answer = text[i] + answer;
  }

  // for (let i = text.length - 1; i >= 0; i--) {
  //     answer += text[i];
  // }

  // for (let i = text.length - 1; i >= 0; i--) {
  //     answer = text[text.length - 1 - i] + answer;
  // }

  return answer;
}

console.log(reverseString("labukas"), "-->", "sakubal");
console.log(reverseString("alus"), "-->", "sula");
console.log(reverseString("sedek uzu kedes"), "-->", "sedek uzu kedes");

console.clear();

function numberCount(start, finish, step) {
  let answer = 0;

  for (let i = start; i <= finish; i++) {
    // jeigu, skaiciu dalinant is step liekana yra nulis, tai answer dydiname vienu vienetu
    if (i % step === 0) {
      answer++;
    }
  }

  return (
    "Skaičių intervale tarp " +
    start +
    " ir " +
    finish +
    ", besidalijančių be liekanos iš " +
    step +
    " yra " +
    answer +
    " vienetai."
  );
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));

console.clear();

function tusciaFunkcija() {
  return false;
}

console.log(tusciaFunkcija());
