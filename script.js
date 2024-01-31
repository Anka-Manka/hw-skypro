// Task 1; Создать переменную a и изменить значения с 10 на 20
let a = 10;
alert(a);

a = 20;
alert(a);


// Task 2; Год выпуска первого iPhone

const yearRelease = 2007;
alert(yearRelease);


// Task 3; Имя создателя языка JavaScript

const nameDev = ('Брендан Эйх');
alert(nameDev);


// Task 4; Создайте две переменные 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления).

let num_1 = 10;
let num_2 = 2;

alert(num_1 + num_2);
alert(num_1 - num_2);
alert(num_1 * num_2);
alert(num_1 / num_2);


// Task 5; Возведите 2 в 5-ю степень.

let result = 2 ** 5;
alert(result);


// Task 6; Найдите остаток от деления a на b

a = 9;
let b = 2;

alert(a % b);


// Task 7;

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);


// Task 8;

let age = prompt('Сколькок вам лет?');
alert(age);


// Task 9.0;

let user = {
    name: 'Анна',
    age: 28,
    isAdmin: Boolean(1)
}

user["city of residence"] = 'Санкт-Петербург';
user["age"] = 29;
delete user["city of residence"];

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);


// Task 10;

let newName = prompt('Как Вас зовут?');
alert(`Привет, ${newName}!`)