const showSeasons = () => {
    
    let month = +prompt('Please enter number of the month')
   
    if (month === 12||month === 1 || month === 2){
        alert ('Welcome to the Winter')

    } 
    else if (month === 3 || month === 4 || month === 5){
        alert('Welcome to the Spring')
    }
    else if (month === 6 || month === 7 || month === 8){
        alert('Welcome to the Summer')
    }
    else if (month === 9 || month === 10 || month === 11){
        alert('Welcome to the Autumn')
    }
    else if (isNaN(month)|| month > 12) {
        console.log('Season does not exist')
    }
    
}
const memorizeWord = () =>{
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
    list = list.sort(() => Math.random() - 0.5);
    alert(list)
    let askUser = prompt('Чему равнялся первый элемент массива?')
    let askUser2 = prompt('Чему равнялся последний элемент массива?')

alert(askUser.toLowerCase() === list[0].toLowerCase() && askUser2.toLowerCase() === list[6].toLowerCase()?'Congrats!':
(askUser.toLowerCase() === list[0].toLowerCase()||askUser2.toLowerCase() === list[6].toLowerCase())?'«Вы были близки к победе!»':'Try again'
)
}





