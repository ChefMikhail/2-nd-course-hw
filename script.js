let a = 10 // Задание 1
alert(a);
a = 20;
alert(a)

let smartphone = ' The first Iphone was Released in 2007' //Задание 2
alert(smartphone)

let genius = 'Brendan Eich is the creator of JS' //Задание 3
alert(genius)

let x = 10 // Задание 4
let y = 2 
alert(x + y)
alert(x - y)
alert(x * y) 
alert(x / y)

let c = 5 // Задание 5
let result = y**c
alert(result)

let d = 9 // Задание 6
alert(d % y)

let num = 1; // Задание 7
num +=5;
num -=3;
num *=7;
num /=3;
num ++;
num --;
alert(num); 

let age = prompt('Сколько вам лет?') // Задание 8
alert(age)

let user = {     
    name: "John",
    age: 20,
    isAdmin: true,
}
user['city of residence'] = 'Oslo'; //Задание 9.1

user.age = 21 //Задание 9.2

delete user['city of residence']//Задание 9.3

let info = prompt('Какую информацию хотите узнать о пользователе?', "name") //Задание 9.4
alert( user[info] );

let username = prompt('what is your name?') //Задание 10
alert('Привет, ИМЯ!')