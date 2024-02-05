// Task 1;

let password = 'пароль';
let answer = prompt('Введите пароль');

answer = answer.toLocaleLowerCase();

if (answer === 'пароль') {
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


// Task 7;

let ansNumber = prompt('Пожалуйста, введите любое число');


if (ansNumber  ) {
    
} else {
    
}