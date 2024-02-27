// Task 1;

let str = "js";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); 


// Task 2;

function searchStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
};

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


// Task 3; Округлите число 32.58884

console.log(Math.floor(32.58884)); // До меньшего целого
console.log(Math.ceil(32.58884)); // До большего целого
console.log(Math.round(32.58884)); // До ближайшего целого


// Task 4;

console.log(Math.max(52, 53, 49, 77, 21, 32)); // MAX
console.log(Math.min(52, 53, 49, 77, 21, 32)); // MIN


// Task 5;

function getRandomNumber() {
    return Math.random() * 10;
}

console.log(getRandomNumber());


// Task 6;

function getRandomArrNumbers(n) {
    let arr = [];
    const length = Math.floor(n / 2);
    
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }
    
    return arr;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));


// Task 7;

function getRandomNumberRange(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandomNumberRange(2, 50));


// Task 8;

let dateNow = new Date();

console.log(dateNow.toLocaleDateString('ru-RU'));


// Task 9;

let currentDate = new Date(2024, 2, 27);

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


// Task 10;

function getDateTime(fullDate) {
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let myDate = new Date();
    return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}
Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
}

console.log(getDateTime(2024, 2, 27));


// Task 11;

function rememberTheWords() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5).join(', ');
    alert(arr);
    
    let answerFirst = prompt('Чему равнялся первый элемент массива?');
    let answerSecond = prompt('Чему равнялся последний элемент массива?');
    
    if (!answerFirst || !answerSecond || !isNaN(answerFirst) || !isNaN(answerSecond)) {
        alert('Введите корректное значение');
    } else if (answerFirst.startsWith(arr) && answerSecond.endsWith(arr)) {
        alert('Поздравляем, Вы угадали оба элемента');
    // } else if (answerFirst === arr[0] || answerSecond === arr[arr.length - 1]) {
    //     alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно!');
    }
}