'use strict';
/**
 * Advanced Lesson 03 adv task
 */

const russianWeekArray = [
    'Понедельник', 
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];

const englishWeekArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const russianWeek = 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье';
const englishWeek = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';


const selectWeek = {
    ru: russianWeek,
    en: englishWeek
}
// console.log('selectWeek: ', selectWeek);



// for (let key in selectWeek) {
//     // console.log(key);
//     console.log(selectWeek[key]);
// }


// const englishWeekStr =
// `Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday`;

// console.log(russianWeek);
// console.log(englishWeek);

// let result = '';
// for (let value of russianWeek) {
//     // result += value + '\n';
//     result += value + ' ';
//     console.log(value);
// }
// console.log('result:\n' + result);


const html = document.querySelector('html');
const lang = html.lang;
const htmlLang = document.querySelector('html').lang;



//  console.log('html: ', html);
//  console.log('lang: ', lang);
 console.log('htmlLang: ', htmlLang);


// выбираем язык подключения сайта
if (htmlLang == 'ru') {
    console.log('Русский язык сайта');
} else if (htmlLang == 'en') {
    console.log('English site language');
} else {
    console.log('Другой язык');
}


switch (lang) {
    case 'ru':
        console.log('Русский язык сайта');
        break;
    case 'en':
        console.log('English site language');
        break;
    default:
        console.log('Другой язык');
}


console.log(lang);
console.log(selectWeek[lang]);




