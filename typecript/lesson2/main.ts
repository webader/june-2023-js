// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let cars: string[] = ['audi', 'bmv', 'mers', 'zaz', 'vw', 'kraz', 'nissan', 'toyota', 'mazda', 'acura'];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let booksTutorial: { title: string, pageCount: number, genre: string } = {
    title: 'start js',
    pageCount: 500,
    genre: 'tutorial'
}
let booksRomans : { title: string, pageCount: number, genre: string } = {
    title: 'Love is love',
    pageCount: 5,
    genre: 'tutorial'
}
let booksSongs : { title: string, pageCount: number, genre: string }= {
    title: 'start song',
    pageCount: 50,
    genre: 'tutorial'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
interface IAuthor {
    name: string,
    age: number,
}

let booksTutorials2 : { title: string, pageCount: number, genre: string, authors:IAuthor[] } = {
    title: 'start js',
    pageCount: 500,
    genre: 'tutorial',
    authors: [
        {
            name: 'Steve Note',
            age: 31,
        }
    ]
};

let booksRomans2 = {
    title: 'Love is love',
    pageCount: 5,
    genre: 'tutorial',
    authors: ['Steve Rush', 32]
}
let booksSongs2 = {
    title: 'start song',
    pageCount: 50,
    genre: 'tutorial',
    authors: ['Steve Song', 33]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {id: 0, name: 'sergii', userName: 'one', password: '123a'},
    {id: 0, name: 'andrii', userName: 'two', password: '123b'},
    {id: 0, name: 'kosty', userName: 'three', password: '123c'},
    {id: 0, name: 'olha', userName: 'four', password: '123d'},
    {id: 0, name: 'marichka', userName: 'five', password: '123e'},
    {id: 0, name: 'taras', userName: 'six', password: '123f'},
    {id: 0, name: 'oleksa', userName: 'seven', password: '123g'},
    {id: 0, name: 'tetyana', userName: 'eight', password: '123h'},
    {id: 0, name: 'pavlo', userName: 'nine', password: '123i'},
    {id: 0, name: 'sofya', userName: 'ten', password: '123j'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x :number = 1;
if (x !== 0) {
    console.log('Вірно');
} else if (x === 0) {
    console.log('Невірно');
}

let x2 = 0;
if (x2 !== 0) {
    console.log('Вірно');
} else if (x2 === 0) {
    console.log('Невірно');
}

let x3 = -3;
if (x3 !== 0) {
    console.log('Вірно');
} else if (x3 === 0) {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 0;
if (time <= 15) {
    console.log('I')
} else if ((time <= 30) && (time > 15)) {
    console.log('II')
} else if ((time <= 45) && (time > 30)) {
    console.log('III')
} else {
    console.log('IV')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20;
if (day <= 10) {
    console.log('I')
} else if ((day <= 20) && (day > 10)) {
    console.log('II')
} else if ((day <= 31) && (day > 20)) {
    console.log('III')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekOfTheDay = +prompt('Put your number week');
switch (weekOfTheDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Put in correct number day of the week');
}
;

//     - Користувач вводить або має два числа.
let oneNumber = 1, twoNumber = 2;

//         Потрібно знайти та вивести максимальне число з тих двох .
if (oneNumber > twoNumber) {
    console.log('oneNumber bigger then twoNumber', oneNumber);
} else if (oneNumber < twoNumber) {
    console.log('oneNumber less then twoNumber', twoNumber);
} else if (oneNumber === twoNumber) {
    //         Також потрібно врахувати коли введені рівні числа.
    console.log('oneNumber equally then twoNumber');
}
;

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x;
// if (x === false || x === undefined || x === '' || x === null || x === 0) {
//     console.log(x = 'default');
// } else {
//     console.log('x is not falsy');
// }

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}