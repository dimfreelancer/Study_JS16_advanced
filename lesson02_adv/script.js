'use strict';
/**
 * Lesson 02 Advanced task
 */

 
let num = 266219;
console.log('num: ', num, 'typeof num:', typeof num);


// let numStr = num.toString();
let numStr = '' + num;
console.log('numStr: ', numStr, 'typeof numStr: ',typeof numStr);


//разбиваем строку по символам на массив
let arr = numStr.split('');
console.log('arr: ', arr, 'typeof arr: ',typeof arr);

//сумма элементов массива
// let sum = 0;
// for (let i in arr) {
//     sum += +i;
//     console.log(i, arr[i], sum);
// }

//произведение элементов массива
let product = 1;
for (let i in arr) {
    product *= +arr[i];
    console.log(i, arr[i], product);
}


//возводим результат в степень 3
product = product ** 3;
console.log('product to 3 power:', product);


//выводим в консоль первые 2 цифры 
console.log(product.toString().substring(0, 2));
