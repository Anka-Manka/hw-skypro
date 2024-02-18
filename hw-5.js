// Task 1; Напишите функцию, которая возвращает меньшее из 2 чисел. 
// Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

function least(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(least(6, 6));


// Task 2; Напишите функцию, которая принимает число, а возвращает строку 'Число четное', 
// если число четное, 'Число нечетное' — если нечетное.

function parity(n) {
    if (n % 2 === 0) {
        return `Число ${n} чётное`;
    } else {
        return `Число ${n} нечётное`;
    }
}

console.log(parity(3));


// Task 3; Функция принимает параметром число и выводит в консоль квадрат этого числа.
// Функция принимает параметром число и возвращает квадрат этого числа.

let squareNum = function (num) {
    return num ** 2;
}

console.log(squareNum(5));


// Task 4;

let userAge = function () {
    let age = prompt('Сколько Вам лет?');
    if (age > 0 && age <= 12) {
        alert('Привет, друг');
    } else if (age >= 13) {
        alert('Добро пожаловать');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

userAge();


// Task 5; Напишите функцию, которая на вход принимает 2 числа:

let mult = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

console.log(mult(3, -3));


// Task 6;

let cubNum = function () {
    let n = prompt('Введите число')
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        return `n в кубе равняется ${n ** 3}`;
    }
}

console.log(cubNum());


// Task 7; Создайте объекты circle1 и circle2 со свойством radius

function getCircleArea() {
    return Math.PI * this.radius ** 2;
}

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimeter,
};

const circle2 = {
    radius: 15,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimeter,
};

console.log(`Площадь первого круга равна ${circle1.getArea()}`);
console.log(`Периметр первого круга равен ${circle1.getPerimetr()}`);

console.log(`Площадь второго круга равна ${circle2.getArea()}`);
console.log(`Периметр второго круга равен ${circle2.getPerimetr()}`);


// Task 8;

let seasons = function () {
    let monthNumber = prompt('Введите номер месяца');

    if (isNaN(monthNumber) || !monthNumber) {
        return console.log('Введите корректное значение');
    } else {

        switch (Number(monthNumber)) {
            case 12:
            case 1:
            case 2:
                return console.log('Зима');
            case 3:
            case 4:
            case 5:
                return console.log('Весна');
            case 6:
            case 7:
            case 8:
                return console.log('Лето');
            case 9:
            case 10:
            case 11:
                return console.log('Осень');
            default:
                return console.log('Такого месяца не существует');
        }
    }
}