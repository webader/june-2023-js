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
// let courses = [
//     'JavaScript Complex',
//     true,
//     12
// ];
//
// function getArray(arr){
//     document.write(`<ul>`)
//         for (let i of arr) {
//         document.write(`<li>${i}</li>`)
//     }
//     document.write(`</ul>`)
// }
// getArray(courses);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: 0},
//     {name: 'petya', age: 30, id: 1},
//     {name: 'kolya', age: 29, id: 2},
//     {name: 'olya', age: 28, id: 3},
//     {name: 'max', age: 30, id: 4},
//     {name: 'anya', age: 31, id: 5},
//     {name: 'oleg', age: 28, id: 6},
//     {name: 'andrey', age: 29, id: 7},
//     {name: 'masha', age: 30, id: 8},
//     {name: 'olya', age: 31, id: 9},
//     {name: 'max', age: 31, id: 10}
// ];
//
// function getElementFromArray(arr){
//     for (let user of arr) {
//         console.log(user)
//         document.write(`<ul>`);
//         document.write(`<li>${user.name}</li>`)
//         document.write(`<li>${user.age}</li>`)
//         document.write(`<li>${user.id}</li>`)
//         document.write(`</ul>`)
//     }
// }
//
// getElementFromArray(users);
// - створити функцію яка повертає найменьше число з масиву
// let arrNumbers = [11,22,33,44,5,2,1,-10];
// function smallestNumber(arr){
//     let firstNumberOfArr = arr[0];
//     let smallestNumber;
//     for (let num of arr) {
//         if (num < firstNumberOfArr) {
//             smallestNumber = num;
//         }
//     }
//     console.log(smallestNumber)
// }
//
// smallestNumber(arrNumbers);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arrNumbers = [11,22,33,44,5,2,1,-10,10,-18,0];
// function sum(arr){
//     //let firstNumberOfArr = arr[0];
//     let result =0;
//     for (let num of arr) {
//         result = result + num
//     }
//     console.log(result)
// }
//
// sum(arrNumbers);

// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// let arrNumbers = [11,22,33,44,5,2,1,-10,10,-18,0];
// function swap(arr,index1,index2) {
//     let first = arr[index1];
//     arr.splice(index1, 1)
//     arr.splice(index2, 0, first)
//     console.log(arr);
// }
//
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// swap(arrNumbers,1,2)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     if (exchangeCurrency === 'USD') {
//         let result = sumUAH / +(currencyValues['0']['value'])
//         return console.log(result + ` ${exchangeCurrency}`)
//     } else {
//         let result = sumUAH / +(currencyValues['1']['value'])
//         return console.log(result + ` ${exchangeCurrency}`)
//     }
// }
//
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')

