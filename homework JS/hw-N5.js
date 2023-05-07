const showLowestnumber = (a, b) => { //Задание 1
    if (a < b) {
        return (a);
        
    } else if (a===b) {
        return (b);
        
    } else{
        return (b);
    }
}
console.log(showLowestnumber(20,5));


const number = (digit) => { // Задание 2
    if (digit % 2 ==0) {
        return('even number')
        
    } else {
       return('odd number') 
    }
}
let digit = prompt('enter number')

console.log(number(digit));

let c = prompt('enter number')


function square(c) { //Задание 3.1
    alert(c**2);
}
console.log(square(c)); 


function square(c) { //Задание 3.2
   return c**2
}
console.log(square(c)); 


const askUser = ( userInfo) => { //Задание 4
    
    if (userInfo < 0) {
        
        alert('Вы ввели неправильное значение')
    } 
    else if (userInfo >= 0 && userInfo <= 12) {
       
        alert('Привет, друг!')
    }
    else if(userInfo > 12){
        
        alert('Добро пожаловать!')
    }
}
let userInfo = +prompt('How old are you?') 
askUser(userInfo)

const id = (x,y) => { //Задание 5

    if (isNaN(x)|| isNaN(y)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(x*y)
}
}
id(6,'r')
id(7, 8)
id('e', 2)

let n = prompt('enter number') //Задание 6
const check = (n) =>{
    
    if (isNaN(n)) {
        return('Переданный параметр не является числом');  
    } 
    else {
        result = n*n*n
        return(`n в кубе равняется ${result}`);
    }
}
console.log(check(n));


function getCircleArea() {              //Задание 7
    return this.radius**2 * 3.14
}
   
function getCirclePerimeter() {
    return this.radius * 3.14
    
}
let circle1 = {
    radius: 10,
    
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter 
}
let circle2 = {
    radius: 5,
    
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter 
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());