/*
STRING - tekstas, tekstiniu simboliu granndinele

iniciavimas: ' (vienguba), " (dvyguba), ` (backtick)

*/

const name = 'Jonas';
console.log(name);

const name2 = 'Maryte';
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);

// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);

const personName = 'Chuk';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabutes.
const kabute12 = "Vienguba (') ir" + 'dviguba (") kabutes.';
console.log(kabute12);

// Vienguba (') ir dviguba (") kabutes.
const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_3 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_4 = 'Vienguba (\') ir dviguba (") kabutes.';

console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

// ND_04_29
/*
 Pinignes turinys: 0;
 Pinigine papildyta: 10;
 Pinignes turinys: 10;
 Pinigine papildyta: 90;
 Pinignes turinys: 100;
 */

// Variant Nr1 (kai nurodomas tik pinigines turinys)

const pt = 'Pinigines turinys: ';
let sk = 0;
console.log(pt + sk);

sk += 10;
console.log(pt + sk);

sk += 90;
console.log(pt + sk);

console.clear();

// Variant Nr2 (kai kiekvienas sakinys atskira operacija)

const pt1 = 'Pinigines turinys:';
let sk1 = 0;
console.log(pt1, sk1);

const pp = 'Pinigine papildyta:';
const sk2 = 10;
console.log(pp, sk2);

sk1 += 10;
console.log(pt1, sk1);

const sk3 = 90;
console.log(pp, sk3);

sk1 += 90;
console.log(pt1, sk1);

console.clear();

// Variant Nr3 (blokais: kai ivyksta papildymas)

const pt1_1 = 'Pinigines turinys: ';
const pp2_2 = 'Pinigine papildyta: ';
let sk1_1 = 0;

console.log(pt1_1 + sk1_1);

sk1_1 += 10;
let sk2_2 = 10;

console.log(pp2_2 + sk2_2);
console.log(pt1_1 + sk1_1);

sk2_2 = 90;
sk1_1 += 90;

console.log(pp2_2 + sk2_2);
console.log(pt1_1 + sk1_1);

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

console.clear();
// \r - return
// \n - new line
// \t - tab
const HTML =
  '\
<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';

console.log(HTML);

const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const backtick1 = `Backtikine (\`) kabute.`;
const backtick2 = 'Backtikine (`) kabute.';
const backtick3 = 'Backtikine (`) kabute.';

const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;
console.log(HTML2);

console.clear();
const a = 7;
const b = 5;
const c = a + b;

// 7 + 5 = 12
const ats1 = a + ' + ' + b + ' = ' + c;
console.log(ats1);

const ats2 = a + ' + ' + b + ' = ' + c;
console.log(ats2);

const ats3 = `${a} + ${b} = ${c}`;
console.log(ats3);

const start = 0;
const finish = 11;
const step = 3;
const answer = 4;

const mini1 =
  'Skaičių intervale tarp ' +
  start +
  ' ir ' +
  finish +
  ', besidalijančių be liekanos iš ' +
  step +
  ' yra ' +
  answer +
  ' vienetai.';

console.log(mini1);

const mini2 = `Skaičių intervale tarp ${start} ir ${finish}, besidalijančių be liekanos iš ${step} yra ${answer} vienetai.`;
console.log(mini2);

const gg = 'Good game!';
const number = 'Number: ' + answer;

console.log(mini1.length);
console.log(mini1[0]);

console.log('' + true);
console.log(true.toString());
