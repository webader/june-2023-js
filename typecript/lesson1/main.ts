// Переводимо jscript на typescript
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let s1: string = 'hello', s2: string = 'owu', s3: string = 'com', num1: number = 1, num2: number = 10,
    num3: number = -999, num4: number = 123;
const PI: number = 3.14;
let double1: number = 2.7;
let num5: number = 16;
let bool1: boolean = true;
let bool2: boolean = false;

//     Вивести кожну змінну за допомогою: console.log
console.log(s1, s2, s3, num1, num2, num3, num4, PI, double1, num5, bool1, bool2)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName: string = 'Oleksii', middleName: string = 'Volodymirovich', lastName: string = 'Derenko';
let result: string = `${firstName} ${middleName} ${lastName}`;
console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let personName: string = prompt("Please enter your name", `${firstName}`);
let personMiddleName: string = prompt("Please enter your middle name", `${middleName}`);
let age: number = 30;
let personAge: number = +prompt("Please enter your age", `${age}`);
console.log(personName);
console.log(personMiddleName);
console.log(personAge);
