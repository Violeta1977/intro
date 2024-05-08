/*
FOR - pagrindinis ciklas (loop)
let i (iteration) = ... : kelinta iteracija (proceso kartojimas)
kintamasis nesikeicia                            1        1
tam, kad jis keistusi reikalingas i++ (i = i + ..., i += ...)
i < ....(10), stop, kai 10 reiksme 
( ima 10 reiksmiu, 0 iki 9, jei i = 0)
jeigu i = 3, tai prades nuo 3
mazejimo tvarka (let i = 20; i > 10; i--)
*/

console.log('START');

for (let i = 0; i < 10 ; i++) {
    console.log(i);
}

// mazejimo tvarka, baigia darba ties 1
for (let i = 5; i > 0 ; i--) {
    console.log(i);
}

for (let i = 20; i > 10 ; i -= 2.3) {
    console.log(i);
}

// suapvaliname skaicius is ....tainiu i sveikus
// konsoleje i / 10
for (let i = 200; i > 100 ; i -= 23) {
    console.log(i / 10);
}

console.log('FINISH');