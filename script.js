// Task 1; Создать переменную a и изменить значения с 10 на 20
let a = Number(10);
alert(a);

a = Number(20);
alert(a);


// Task 2; Год выпуска первого iPhone

const yearRelease = Number(2007);
alert(yearRelease);


// Task 3; Имя создателя языка JavaScript

const nameDev = String('Брендан Эйх');
alert(nameDev);


// Task 4; Создайте две переменные 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления).

let num_1 = Number(10);
let num_2 = Number(2);

alert(num_1 + num_2);
alert(num_1 - num_2);
alert(num_1 * num_2);
alert(num_1 / num_2);


// Task 5; Возведите 2 в 5-ю степень.

let result = Number(2 ** 5);
alert(result);


// Task 6; Найдите остаток от деления a на b

a = Number(9);
let b = Number(2);

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

let age = Number(prompt('Сколькок вам лет?'));
alert(age);


// Task 9.0;

let user = {
    name: String('Анна'),
    age: Number(28),
    isAdmin: Boolean(1)
}

user["city of residence"] = String('Санкт-Петербург');
user["age"] = Number(29);
delete user["city of residence"];

let info = String(prompt('Какую информацию хотите узнать о пользователе?'));
alert(user[info]);


// Task 10;

let newName = String(prompt('Как Вас зовут?'))
alert(`Привет, ${newName}!`)