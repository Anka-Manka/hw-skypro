// Task 1;

let password = 'пароль';
let answer = prompt('Введите пароль');

answer = answer.toLocaleLowerCase();

if (answer === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


// Task 2;

let c = prompt('Введите число');

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Task 3;

let d = prompt('Первое число');
let e = prompt('Второе число');

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Task 4;

let a = '2';
let b = '3';

alert(Number(a) + Number(b));


// Task 5;

let monthNumber = Number(prompt('Введите номер месяца'));

if (isNaN(monthNumber) || !monthNumber) {
    alert('Введите корректное значение')
} else {

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break
        default:
            alert('Такого месяца не существует');
            break;
    }
}


// Task 7;

let ansNumber = prompt('Пожалуйста, введите любое число');


if (isNaN(ansNumber)) {
    console.log('NaN');
} else {
    console.log('Число');
}

if (ansNumber % 2 === 0) {
    alert('Число четное')
} else {
    alert('Число нечетное')
}


// Task 8;

let clientOS = 0; // 0 - iOS, 1 - Android

if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке')
} else if (clientOS === 1) {
    alert('Установите версию приложения для Andriod по ссылке')
} else {
    alert('Не корректное значение')
}


// Task 9;

let newClientOS = 0; // 0 - iOS, 1 - Android
let clientDeviceYear = 2015;

if (clientDeviceYear >= 2015) {
    switch (newClientOS) {
        case 0:
            console.log('Установите версию приложения для iOS по ссылке')
            break;
        case 1:
            console.log('Установите версию приложения для Andriod по ссылке')
            break;
    }
} else {
    switch (newClientOS) {
        case 0:
            console.log('Установите облегченную версию приложения для iOS по ссылке')
            break;
        case 1:
            console.log('Установите облегченную версию приложения для Android по ссылке')
            break;
    }
}