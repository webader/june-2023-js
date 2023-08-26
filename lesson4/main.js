// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b) {
//     let result= a * b;
//     console.log(result)
// }
// area(2,5);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const PI = 3.14;
// function areaCircle(r) {
//     let result= PI * r;
//     console.log(result)
// }
// areaCircle(2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const PI = 3.14;
// function areaCylinder(r,h) {
//     let result= 2 * PI * r * h;
//     console.log(result)
// }
// areaCylinder(2,5);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function getArray(arr){
//     for (let user of users) {
//         console.log(user)
//     }
// }
//
// getArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textWriter(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// textWriter('Hello teacher');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function textWriter(text) {
//     document.write(`
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>`)
// }
//
// textWriter('Hello teacher');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function textWriter(text, count) {
//     document.write(`<ul>`)
//         for (let i = 0; i<count; i++){
//             document.write(`<li>${text}</li>`)
//         }
//     document.write(`</ul>`)
// }
//
// textWriter('Hello teacher', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250