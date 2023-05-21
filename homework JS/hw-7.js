//Задание 1 Преобразуйте строку js в верхний регистр JS.
let str = 'js'
console.log(str.toUpperCase());

//Задание 2
const searchStart = (array, value) =>{
    return array.filter(el => el.toLowerCase().startsWith(value.toLowerCase()))
           
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//Задание 4
console.log(Math.max( 52, 53, 49, 77, 21, 32));
console.log(Math.min( 52, 53, 49, 77, 21, 32));

//Задание 5
const getRandomInt = (minValue,maxValue)=>{
    return Math.round(Math.random()*(maxValue -minValue)) + minValue
}
console.log(getRandomInt(1,10));

//Задание 6
const getRandomArrNumbers = (num) =>{
    const array = []
    let arrayLength = Math.round(num / 2)
    
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.round(Math.random() * num));   
    }
    return array
}
console.log(getRandomArrNumbers(13));
console.log(getRandomArrNumbers(52));
console.log(getRandomArrNumbers(22));
//Задание 7
console.log(getRandomInt(12,65));

//Задание 8
const currentDate = new Date()
console.log(currentDate);

//Задание 9
let myDate = new Date()
myDate.setDate(myDate.getDate()+73)
console.log(myDate);

//Задание 10
const getRussianDate = () =>{
    const EngDate = new Date()
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let RussianDate = "Дата: " + EngDate.getDate()+ " " + months[EngDate.getMonth()] + 
"-это" + " " + days[EngDate.getDay()]+ " " + "Время: " +EngDate.getHours()+ ":" + EngDate.getMinutes()+":"+ EngDate.getSeconds()
return RussianDate
}
console.log(getRussianDate());