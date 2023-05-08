//Задание 1
let i = 0;
while (i<2) {console.log('hei!');
    i++;
}
//Задание 2
let a = 1
while (a<=5) {console.log(a);
    a++;
    
}
for (a = 1; a<=5 ; a++) {
    console.log(a);
}

//Задание 3
let b = 7;
while (b<= 22) {console.log(b);
    b++;
    
}
for (b = 7; b <= 22;b++) {
    console.log(b);
    
}
//Задание 4
const employee = {
    Kolya:'200',
    Vasya: '300',
    Petya: '400'
}
for(key in employee){console.log(`${key} salary is ${employee[key]}`)};

//Задание 5
let n=1000;               //с помощью цикла for подсмотрел у Дианы)))
let num = 0;
for (n, num; n >= 50; num ++){
    n = n/2;
    console.log (n);
}
console.log("Количество итераций = " + num);

let g  = 1000;            // с помощью цикла do.. while уже сам)))
let result = 0
do {
  g = g/2;
  result++;
  console.log(g);
} while (g >= 50);
console.log('Количество итерации = ' + result);

//Задание 6
let friday = Number(prompt('enter day')) 
    for(let day = friday; day <= 31; day += 7){
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
  
