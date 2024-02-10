// Task 1;

for (let i = 0; i < 2; i++) {
    console.log('Привет');;
}



// Task 2;

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// Task 3;

for (let i = 7; i <= 22; i++) {
    console.log(i);
}



// Task 4;

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (const friends in obj) {
    alert(`${friends} — зарплата ${obj[friends]} долларов.`)
}



// Task 5;

let n = 1000;
let num = 0

do {
    n /= 2;
    num++
} while (n > 50);

console.log(`Получилось число ${Math.floor(n)}`);
console.log(`Итераций произведено ${num}`);



// Task 6;

for (let friday = 2; friday < 29; friday += 7) {
    alert(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
}