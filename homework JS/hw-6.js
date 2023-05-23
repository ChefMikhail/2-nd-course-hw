//Задание 1
const numbs = [1, 5, 4, 10, 0, 3]

for (let a = 0; a < numbs.length; a++){
    if (numbs[a] === 0) break;
    console.log(numbs[a]);
}

//Задание 2
const digits = [1, 5, 4, 10, 0, 3]
console.log(numbs[2]);

//Задание 3
let puta = [1, 3, 5, 10, 20]

puta = puta.join()
console.log(puta);

//Задание 4
let one = []

for (let i = 0; i < 3; i++) {
 one[i]=[]
for (let j = 0; j < 3; j++) {
 one[i][j] = 1
    }  
}
console.log(one);

//Задание 5
let Numbers = [1, 1, 1]

Numbers.push(2,2,2)
console.log(Numbers);

//Задание 6
let cloud = [9, 8, 7, 'a', 6, 5]

cloud.sort()
cloud.pop()
console.log(cloud);

//Задание 7
let ask = Number(prompt('Введите число от 1 до 10'));

const answer = [9, 8, 7, 6, 5];

let isPresent = answer.includes(ask);

console.log(isPresent);

//Задание 8
let strings = 'abcdef';
let stringsReverse = strings.split('').reverse().join('')

console.log(stringsReverse);

//Задание 9
let arr = [[1, 2, 3,],[4, 5, 6]]
let arrNew = arr.flat()

console.log(arrNew);
    
//Задание 10
let array = [9, 8, 7, 6, 5, 3]

for (let i = 0; i < array.length; i++) {
    let sum = array.reduce((first,last) => first+last)
    console.log(sum);   
}

//Задание 11
const virus = [6 , 24, 56]
let contamination = virus.map(el=>(el**2))
 console.log(contamination);

//Задание 12

getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
let str = []
function getLengthWords(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i].length);  
    }
    
}
//Задание 13
function filterPositive(arrayNum) {
    return arrayNum.filter((el) => el < 0)
   
}
console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]);
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]);

//Задание 14
let arrayRound1 = [];
for (let i = 0; i < 10; i++) {
    arrayRound1.push(Math.round(Math.random() * 10));
};
console.log(arrayRound1);

function getEvenNumber() {
    return arrayRound1.filter((el) => el % 2 == 0);
};
console.log(getEvenNumber());

//Задание 15
let arrayRound2 = [];
for (let i = 0; i < 6; i++) {
    arrayRound2.push(Math.round(Math.random() * 10));
};
console.log(arrayRound2);


const arithmeticMean = (arrayRound2.reduce((a, b) => (a + b))) / (arrayRound2.length);
console.log (arithmeticMean);


