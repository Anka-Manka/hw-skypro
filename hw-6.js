// Task 1;

const massiv = [1, 5, 4, 10, 0, 3];

for (let el = 0; el < massiv.length; el++) {
    console.log(massiv[el]);
    if (massiv[el] == 10) {
        break;
    }    
}


// Task 2;

console.log(massiv.indexOf(4));


// Task 3;

const arr = [1, 3, 5, 10, 20];

console.log(arr.join(' '));


// Task 4;

let newArr = [];

for (let i = 0; i < 3; i++) {
	newArr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		newArr[i].push(1);
	}
}
console.log(newArr);


// Task 5;

let mas = [1, 1, 1];
mas.push(2, 2, 2);
console.log(mas);


// Task 6;

const newMassiv = [9, 8, 7, 'a', 6, 5];
newMassiv.sort();
newMassiv.pop();
console.log(newMassiv);


// Task 7;

let answer = prompt('Угадай число');
answer = Number(answer);
if (!isNaN(answer) && newMassiv.includes(answer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


// Task 8;

const arrStr = 'abcdef';
console.log(arrStr.split("").reverse().join(""));


// Task 9;

const table = [
    [1, 2, 3,],
    [4, 5, 6],
];

console.log(table.reduce((a, b) => a.concat(b), []));


// Task 10;

const arr10 = [2, 4, 5, 7, 3, 1, 9, 8, 10];

for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}


// Task 11;

function square(arr) {
    return arr.map((num) => num ** 2);
}

console.log(square([1, 2, 3, 4, 5]));


// Task 12; Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов

function getLengthWords(array) {
    return array.map(word => word.length);
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


// Task 13; Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

function filterPositive(array) {
    return array.filter(value => value <  0);
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]