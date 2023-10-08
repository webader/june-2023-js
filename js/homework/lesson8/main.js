// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user0 = new User(1, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user1 = new User(2, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user2 = new User(3, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user3 = new User(4, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user4 = new User(5, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user5 = new User(6, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user6 = new User(7, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user7 = new User(8, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user8 = new User(9, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let user9 = new User(10, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567);
// let users = [];
// users.push(user0, user1, user2, user3, user4, user5, user6, user7, user8, user9);
// console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const filter = users.filter(user => !(user.id % 2));
// console.log(filter);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const sort = users.sort((a, b)=> a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб' ]);
// let client2 = new Client(2, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб']);
// let client3 = new Client(3, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко']);
// let client4 = new Client(4, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко']);
// let client5 = new Client(5, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко']);
// let client6 = new Client(6, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко', 'яйця']);
// let client7 = new Client(7, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко', 'яйця']);
// let client8 = new Client(8, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко', 'яйця']);
// let client9 = new Client(9, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко', 'яйця']);
// let client10 = new Client(10, 'vasya', 'vasilenko', 'vasya@gmail.com', +380501234567, ['хліб', 'молоко', 'яйця']);
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
// clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// // console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, carFactory, yearStart, maxSpeed, sizeEngine) {
//     this.model = model;
//     this.carFactory = carFactory;
//     this.yearStart = yearStart;
//     this.maxSpeed = maxSpeed;
//     this.sizeEngine = sizeEngine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`
//             модель - ${this.model},
//             виробник - ${this.carFactory},
//             рік випуску - ${this.yearStart},
//             максимальна швидкість - ${this.maxSpeed},
//             об'єм двигуна - ${this.sizeEngine}
//             `)
//     };
//     this.increaseMaxSpeed  = function (newSpeed) {
//         this.newSpeed = newSpeed;
//         console.log(`підвищує значення ${this.maxSpeed} на значення ${this.newSpeed}`)
//     };
//     this.changeYear  = function (newValue) {
//         this.newValue = newValue;
//         console.log(`змінює ${this.yearStart} на значення ${this.newValue}`)
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(`приймає об'єкт який ${this.driver} з довільним набором полів, і додає його в поточний об'єкт`);
//     }
//
//
// }
// let car = new Car('nissan', 'japan factory', 2005, 180, 1.8);
// console.log(car);
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed(220));
// console.log(car.changeYear(2010));
// console.log(car.addDriver({name: 'Shumaher', ag: 50}));
// console.log(car.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, carFactory, yearStart, maxSpeed, sizeEngine) {
//         this.model = model;
//         this.carFactory = carFactory;
//         this.yearStart = yearStart;
//         this.maxSpeed = maxSpeed;
//         this.sizeEngine = sizeEngine;
//     }
//     drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info = function () {
//         console.log(`
//             модель - ${this.model},
//             виробник - ${this.carFactory},
//             рік випуску - ${this.yearStart},
//             максимальна швидкість - ${this.maxSpeed},
//             об'єм двигуна - ${this.sizeEngine}
//             `)
//     };
//     increaseMaxSpeed  = function (newSpeed) {
//         this.newSpeed = newSpeed;
//         console.log(`підвищує значення ${this.maxSpeed} на значення ${this.newSpeed}`)
//     };
//     changeYear  = function (newValue) {
//         this.newValue = newValue;
//         console.log(`змінює ${this.yearStart} на значення ${this.newValue}`)
//     };
//     addDriver = function (driver) {
//         this.driver = driver;
//         console.log(`приймає об'єкт який ${this.driver} з довільним набором полів, і додає його в поточний об'єкт`);
//     }
//
// }
// let car = new Car('nissan', 'japan factory', 2005, 180, 1.8);
// console.log(car);
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed(220));
// console.log(car.changeYear(2010));
// console.log(car.addDriver({name: 'Shumaher', ag: 50}));
// console.log(car.driver);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Princess {
//     constructor(name, age, sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }
// }

// class Prince extends Princess{
//     constructor(name, age, sizeFoot) {
//         super(name, age, sizeFoot);
//     }
// }
//
// let princess1 = new Princess('marichka',13,37)
// let princess2 = new Princess('anna',12,36)
// let princess3 = new Princess('lesya',14,38)
// let princess4 = new Princess('olga',18,37)
// let princess5 = new Princess('olenka',12,46)
// let princess6 = new Princess('tanya',22,45)
// let princess7 = new Princess('anna2',32,44)
// let princess8 = new Princess('anna3',42,43)
// let princess9 = new Princess('anna4',52,42)
// let princess10 = new Princess('anna5',62,46)
//
// let princesses = [];
// princesses.push(princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10);
//
// for (const princess of princesses) {
//     let wife = princesses[0]
//     if (princess.sizeFoot < wife.sizeFoot) {
//         wife = princess;
//         console.log(wife);
//     }
// }

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let find = princesses.find(princess => {
//     let wife = princesses[0]
//     if (princess.sizeFoot < wife.sizeFoot) {
//         wife = princess;
//         return wife;
//     }
// })
// console.log(find);