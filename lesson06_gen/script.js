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

//функция проверки на введенное число
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

//функция генерирует случайное целое число от MIN до MAX
const randomInteger = () => {
    const MIN = 1;
    const MAX = 100;
    let result = Math.floor((MAX * Math.random()) + MIN);
    return result;
};


const main = () => {

    const seed = randomInteger(); //генерим загаданое число - это сохранится в замыкании функции

    const next = () => {
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
            consoleAlert('Загаданное число БОЛЬШЕ >> ' + ans);
        } else if (seed === ans ) {
            consoleAlert('Поздравляю, Вы угадали УРААААА!!!!\nЗагаданное число ' + ans);
            return;//выход из функции конец игры
        };
        next(); //следующий запуск итеррации рекурсии
    };

    return next; //возвращаем ссылку на функцию в замыкании
};


const play = main(); //генерация замыкания в функции
play(); //по сути наша функция next()

