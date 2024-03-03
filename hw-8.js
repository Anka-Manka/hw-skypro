// Task 1;

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((person1, person2) => person1.age - person2.age);

console.log(people);


// Task 2;

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]



// Task 3;

let count = 0;
const interval = setInterval(() => {
    count += 3;
    if (count <= 30) {
        const currentDate = new Date().toLocaleString();
        console.log(currentDate);
    } else {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);


// Task 4;

function delayForSec(callback) {
    setTimeout(callback, 1000);
}

delayForSec(function () {
    console.log('Привет, Глеб!');
});


// Task 5;

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));