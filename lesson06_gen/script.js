'use strict';

/*
Урок №6
Особенное задание урок 6
Напишем игровой бот угадай число
This is the Gaming guess the number bot
*/


//функция alert с дублированием в консоль
const consoleAlert = (str) => {
    console.log(str);
    alert(str);
}

//функция prompt с дублированием в консоль
const consolePrompt = (str) => {
    console.log(str);
    return prompt(str);
}

let isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);
//варианты функции
// var isNumber = function isNumber(value) {
//    return typeof value === 'number' && isFinite(value);
// }

const randomInteger = () => {
    const MIN = 1;
    const MAX = 100;
    let result = Math.floor((MAX * Math.random()) + MIN);
    // console.log('debug result: ', result);
    return result;
};


const main = () => {

    const seed = randomInteger(); //генерим загаданое число - это сохранится в замыкании функции

    const next = () => {
        
        // console.log('Угадайте число от 1 до 100');
        // let ans = prompt('Угадайте число от 1 до 100'); //Ответ пользователя

        let ans = consolePrompt('Угадай число от 1 до 100');

        console.log('Ответ пользователя: ', ans);

        if (ans === null) {
            consoleAlert('Вы нажали отмена\nКонец игры');
            return; //выход из функции по Escape
        };
        ans = parseInt(ans);

        if (isNaN(ans)) {
            //проверка на корректость ввода данных
            consoleAlert('Ошибка! Вы ввели строку!!! введите целое число');
        } else if (seed < ans) {
            consoleAlert('Загаданное число меньше << ' + ans);
        } else if (seed > ans) {
            // console.log('Загаданное число БОЛЬШЕ >>');
            // alert('Загаданное число БОЛЬШЕ >>');
            consoleAlert('Загаданное число БОЛЬШЕ >> ' + ans);
        } else if (seed === ans ) {
            consoleAlert('Поздравляю, Вы угадали УРААААА!!!!\nЗагаданное число ' + ans);
            return;//выход из функции
        };
        next(); //следующий запуск итеррации рекурсии
    };

    return next; //возвращаем ссылку на функцию в замыкании
};


const play = main(); //генерация замыкания в функции
play(); //по сути наша функция next()
