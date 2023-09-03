// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
const str2 = 'lorem ipsum';
const str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.replaceAll(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str) {
//     let arr = str.split(' ')
//     return console.log(arr)
// }
// stringToarray(str)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arrNumbers = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arrNumbers.map(elem => elem.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums(arr, word) {
//     if (word === 'ascending') {
//         let up = arr.sort((a, b) => {
//             return console.log(a-b)
//         })
//         console.log(up);
//     } else {
//         let down = arr.sort((a, b)=>{
//             return b - a
//         })
//         console.log(down);
//     }
// }
//
// sortNums(nums,'ascending')
// sortNums(nums,'descending') // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration
// })
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(element => element.monthDuration > 5)
// console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let map = coursesAndDurationArray.map((element, index) => {
//     return {id: index, title: element.title, monthDuration: element.monthDuration}
// })
// console.log(map);

// описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cards = [
//     {   cardSuit: 'spades',
//         value : 6,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 7,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 8,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 9,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 10,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'jack',
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'queen',
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'king',
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'ace',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 6,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 7,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 8,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 9,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 10,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'jack',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'queen',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'king',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'ace',
//         color: 'black'
//     },
//     {   cardSuit: 'diamonds',
//         value : 6,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 7,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 8,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 9,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 10,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'jack',
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'queen',
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'king',
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'ace',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 6,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 7,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 8,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 9,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 10,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'jack',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'queen',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'king',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'ace',
//         color: 'red'
//     }
// ]
// let findSomeCards = cards.forEach(value => {
//     if ((value.cardSuit == 'spades') && (value.value == 'ace') && (value.color == 'black') ) {
//         console.log(value);
//     }
//     if (value.value == 6)  {
//         console.log(value);
//     }
//     if (value.color == 'red')  {
//         console.log(value);
//     }
//     if (value.cardSuit == 'diamond')  {
//         console.log(value);
//     }
//     if ((value.cardSuit == 'clubs' && value.value >= 9) ||
//         (value.cardSuit == 'clubs' && value.value == 'jack') ||
//         (value.cardSuit == 'clubs' && value.value == 'queen') ||
//         (value.cardSuit == 'clubs' &&value.value == 'king') ||
//         (value.cardSuit == 'clubs' &&value.value == 'ace')) {
//         console.log(value);
//     }
//
// })

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let cards = [
//     {   cardSuit: 'spades',
//         value : 6,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 7,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 8,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 9,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 10,
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'jack',
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'queen',
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'king',
//         color: 'black'
//     },
//     {   cardSuit: 'spades',
//         value : 'ace',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 6,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 7,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 8,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 9,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 10,
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'jack',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'queen',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'king',
//         color: 'black'
//     },
//     {   cardSuit: 'clubs',
//         value : 'ace',
//         color: 'black'
//     },
//     {   cardSuit: 'diamonds',
//         value : 6,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 7,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 8,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 9,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 10,
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'jack',
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'queen',
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'king',
//         color: 'red'
//     },
//     {   cardSuit: 'diamonds',
//         value : 'ace',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 6,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 7,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 8,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 9,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 10,
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'jack',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'queen',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'king',
//         color: 'red'
//     },
//     {   cardSuit: 'hearts',
//         value : 'ace',
//         color: 'red'
//     }
// ]
// let result = cards.reduce((accum, card) => {
//     console.log(accum)
//
//     if (card.cardSuit === 'spades') {
//         accum.spades.push(card);
//     }
//     if (card.cardSuit === 'clubs') {
//         accum.clubs.push(card);
//     }
//     if (card.cardSuit === 'diamonds') {
//         accum.diamonds.push(card);
//     }
//     if (card.cardSuit === 'hearts') {
//         accum.hearts.push(card);
//     }
//     return accum
//
//
// },{ spades: [], diamonds: [], hearts:[], clubs:[]});

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let findSass = coursesArray.filter((value) => {
//     value.modules.forEach((value1, index) => {
//         if (value1 === 'sass')
//         return console.log(value)
//     })
//
// })
// let findSass = coursesArray.filter((value) => {
//     value.modules.forEach((value1, index) => {
//         if (value1 === 'docker')
//             return console.log(value)
//     })
//
// })