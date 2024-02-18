// // Task 1;

// const massiv = [1, 5, 4, 10, 0, 3];

// for (let el = 0; el < massiv.length; el++) {
//     if (massiv[el] == 10) break; {
//         console.log(massiv[el]);
//     }    
// }


// // Task 2;

// console.log(massiv.indexOf(4));


// // Task 3;

// const arr = [1, 3, 5, 10, 20];

// console.log(arr.join(' '));


// // Task 4;

// let newArr = [];

// for (let i = 0; i < 3; i++) {
// 	newArr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		newArr[i].push(1);
// 	}
// }
// console.log(newArr);


// // Task 5;

// let mas = [1, 1, 1];
// mas.push(2, 2, 2);
// console.log(mas);


// // Task 6;

// const newMassiv = [9, 8, 7, 'a', 6, 5];
// newMassiv.sort();
// newMassiv.pop();
// console.log(newMassiv);


// // Task 7;

// let answer = prompt('Угадай число');
// if (newMassiv.includes(Number(answer))) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }


// // Task 8;

// const arrStr = 'abcdef';
// console.log(arrStr.split("").reverse().join(""));


// // Task 9;

// const table = [
//     [1, 2, 3,],
//     [4, 5, 6],
// ];

// console.log(table.reduce((acc, val) => acc.concat(val), []));


// // Task 10;

// const arr10 = [2, 4, 5, 7, 3, 1, 9, 8, 10];

// for (let i = 0; i < arr10.length; i++) {
//     console.log(arr10.reduce((a, b) => a + b));
// }


// // Task 11;

// function square(len) {
//     let numArr = [];
//     for (let i = 0; i < len; i++) {
//         let number = prompt('Введите число');
//         numArr.push(Number(number));
//     };
//     const squareArr = numArr.map((number) => number ** 2);
//     console.log(squareArr);
// }

// square(5);


// // Task 12; Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов

// function getLengthWords(len) {
//     const wordArr = [];
//     const lenWords =[];
//     for (let i = 0; i < len; i++) {
//         let words = prompt('Введите слова');
//         wordArr.push(words);
//         lenWords.push(wordArr[i].length);
//     }
//     return console.log(lenWords);
// }

// getLengthWords(5);


// // Task 13; Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

// function filterPositive(array) {
//     const ArrayNumber = [];
    
// }

// filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
// filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]