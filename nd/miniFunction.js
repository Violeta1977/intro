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

console.log(daugyba(2, 'labas'));
console.log(daugyba(2, 'labas'.length));

function daugyba(n1, n2) {
  const skaicius = n1 * n2;
  return skaicius;
}

console.clear();

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

console.clear();

// pabandyti du variantus
// su typeof
// tekstine israiska (formatu) .lenght

// function skaitmenuKiekisSkaiciuje(k) {
//   if (k === true) {
//     return "Pateikta netinkamo tipo reikšmė.";
//   } else if (typeof k === "string") {
//     return "Pateikta netinkamo tipo reikšmė.";
//   } else if (typeof k === Number) {
//     return k.length;
//   }
// }

// function skaitmenuKiekisSkaiciuje(kiekis) {
//   let stringNumber = Number(kiekis).toString();
//   if (typeof kiekis === Number) {
//     return "Pateikta netinkamo tipo reikšmė.";
//   }
//   return stringNumber.length;
// }

function skaitmenuKiekisSkaiciuje(kiekis) {
  let textKiekis = kiekis.toString();
  if (typeof kiekis === 'string') {
    return 'Pateikta netinkamo tipo reikšmė.';
  } else if (kiekis === true) {
    return 'Pateikta netinkamo tipo reikšmė.';
  } else if (typeof kiekis === NaN) {
    return 'Pateikta netinkamo tipo reikšmė.';
  }

  return textKiekis.length;
}

function skaitmenuKiekisSkaiciuje(kiekis) {
  let textKiekis = kiekis.toString();
  if (typeof kiekis !== Number(kiekis)) {
    return textKiekis.length;
  } else {
    return 'Pateikta netinkamo tipo reikšmė.';
  }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(typeof 5);

console.clear();

/*
Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
- jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
- jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
- priešingu atveju, funkcija tęsia darbą
- pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
- gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

// function didziausiasSkaiciusSarase(skaicius) {
//   if (skaicius === Number) {
//     return "Pateikta netinkamo tipo reikšmė.";
//   } else if (skaicius === "string") {
//     return "Pateiktas sąrašas negali būti tuščias.";
//   }

//   return skaicius;
// }

// function didziausiasSkaiciusSarase(number) {
//   if (!Array.isArray(number)) {
//     return "Pateikta netinkamo tipo reikšmė.";
//   } else if (number.lenght === 0) {
//     return "Pateiktas sąrašas negali būti tuščias.";
//   } else {
//     let didziausias = number[0];
//     for (let i = 0; i < number.length; i++) {
//       if (number[i] > didziausias) {
//         didziausias = number[i];
//       }
//     }
//     return didziausias;
//   }
// }

// console.log(didziausiasSkaiciusSarase([1]));
// console.log(didziausiasSkaiciusSarase([]));
// console.log(didziausiasSkaiciusSarase(["pomidoras"]));
// console.log(didziausiasSkaiciusSarase([1, 2, 3]));
// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));

console.clear();

function numberSize(n) {
  const nAsText = '' + n;
  return nAsText.length;
}

console.log(numberSize(8789));

function dalyba(sk1, sk2) {
  const sk3 = sk1 / sk2;
  if (typeof sk1 !== 'number' || typeof sk2 !== 'number') {
    return 'Netinkama reiksme';
  }
  return sk3;
}

console.log(dalyba(10, 5));
console.log(dalyba(10, 'hi'));
console.log(dalyba(10, true));
console.log(dalyba(NaN, true));
console.log(dalyba(NaN, true));
console.log(dalyba(30, 15));
