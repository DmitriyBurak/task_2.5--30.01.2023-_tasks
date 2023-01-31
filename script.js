
// task 1

let minNum;

function returnMinNum(a, b) {
    if (a < b){
        minNum = a
    } else {
        minNum = b
    }
    return minNum;
}

let resOfTask1 = returnMinNum(5, 8);
alert(resOfTask1);

//task 2

let evenOrOddNumber;

function isEvenOrOdd(evenOrOddNumber) {
    if (evenOrOddNumber % 2 == 0){
        evenOrOddNumber = 'Число четное'
    } else {
        evenOrOddNumber = 'Число нечетное'
    }
    return evenOrOddNumber;
}

let resOfTask2 = isEvenOrOdd(7);
alert(resOfTask2);

// task 3
    // 3.1

const squarOne = (с) => с**2;
console.log(squarOne(10));

    // 3.2

const squarTwo = (с) => с**2;

// task 4


function howOldAreYou() {
    let userAge = prompt('Сколько тебе лет ?'); userAge < 0 ? alert('Вы ввели неправильное значение') : userAge >= 13 ? alert('Добро пожаловать!') : alert('Привет, друг!');
    
}

howOldAreYou();

// task 5

function numberOrNo(d, e) {
    d = Number(prompt('Введите первое число'));
    e = Number(prompt('Введите второе число'));
    let res = (!isNaN(d) && !isNaN(e)) ? d * e : 'Одно или оба значения не являются числом';
    return res    
}

console.log(numberOrNo());

// task 6

function numberInThird(anyNumb) {
    anyNumb = Number(prompt('Введите число от 0 до 10 включительно'));
    let result = (!isNaN(anyNumb) && anyNumb >=0 && anyNumb <= 10) ? `${anyNumb} в кубе равнятеся ${anyNumb ** 3}` : 'Переданный параметр не является числом';
    return result    
}

console.log(numberInThird());

