

//Задание 1
let password = 'qwerty';
let dude = prompt('Введите пароль');
dude === password ? alert('Пароль введен верно') : alert('Пароль введен неправильно')


//Задание 2
let c = Number(prompt('guess number'));
(c >=0 && c <=10 ) ? console.log('correct'): console.log('incorrect');

//Задание 3
let d = Number(prompt('enter number'));
let e = Number(prompt('enter number'));
(d > 100|| e > 100) ? console.log('correct'): console.log('incorrect');

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b))

//Задание 5
let monthNumber = Number(prompt('enter number of month'))
switch (monthNumber) {
    case 12:
        console.log('winter');
        break;                 
    case 1:
        console.log('winter');
        break;
    case 2:
        console.log('winter');
        break;
    case 3 :
        console.log('spring');
        break;
    case 4 :
        console.log('spring');
        break;
    case 5 :
        console.log('spring');
        break;
    case 6 :
        console.log('summer');
        break;
    case 7 :
        console.log('summer');
        break;        
    case 8 :
        console.log('summer');
        break;
    case 9 :
        console.log('autumn');
        break;        
    case 10 :
        console.log('autumn');
        break;        
    case 11 :
        console.log('autumn');
        break;        
                                                           
    default :
        console.log('you entered some bullshit');
        break;
}




//Задание 7
let z = Number(prompt('Enter any number'))
console.log(typeof z )
if (z/2) {alert('even number')
    
}
if(z%2) {alert('odd number')}
