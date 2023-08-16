// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let s1 = 'hello', s2= 'owu', s3 = 'com', num1 = 1, num2 = 10, num3 = -999, num4 = 123;
const PI= 3.14;
let double1 = 2.7;
let num5 =  16;
let bool1 = true;
let bool2 = false;

//     Вивести кожну змінну за допомогою: console.log
console.log(s1, s2, s3, num1, num2, num3, num4,PI, double1, num5, bool1, bool2)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Oleksii', middleName = 'Volodymirovich', lastName = 'Derenko';
let result = `${firstName} ${middleName} ${lastName}`;
console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let personName = prompt("Please enter your name", `${firstName}`);
let personMiddleName = prompt("Please enter your middle name", `${middleName}`);
let age = 30;
let personAge = +prompt("Please enter your last name", `${age}`);
console.log(personName);
console.log(personMiddleName);
console.log(personAge);
