// -------------------------------------------Homework (lesson 1)--------------------------------------------------------

// let name = prompt('Как вас зовут?');
// let age = +prompt('Сколько вам лет?');
// alert(`Вас зовут ${name}, Вам  ${age} лет`);

// let side1 = +prompt('Side 1');
// let side2 = +prompt('Side 2');
// let sum = (side1 + side2)*2;
// alert(sum);

// ---------------------------------------LESSON 2  Инкремент/декремент (префикс/постфик)--------------------------------
//     ++ / --
/*
//     5++; - так не используется
// let num = 5:
// num ++; --> num = num + 1
console.log(num++); // 5
console.log(++num); // 7
console.log(num); // 7
console.log(--num); // 6 num = num - 1;

// num = num + 10; ====== num += 10;
// *= , -=, *=, /=;

// 1. Логические операторы и сравнения

console.log('1' == 1); //true
console.log('1' == true); //true
console.log('12' == true);  //false
console.log(1 == true); //true

console.log('Код' === 'Кот'); // false
console.log('Код' < 'Кот'); // true
console.log('К' < 'к'); // true

console.log('1' != 1); // false
console.log('1' !== 1); // true

let num2 = 'A' * 2; // Nan
console.log(num2); // true
console.log(num2 == Nan); // Nan не равен ничему, даже самому себе!
// isNaN()
console.log(null == false); //false
console.log(undefined == false); //false
console.log(undefined == null); //true
// undefined и null не равен всем остальным типам данных, но при этом равны при сравнении сами себе и друг другу


//Логические операторы
// || (или), ?? (нулевой), && (и), ! (не отрицание)

//|| (или)
console.log(1<4 || 3>7 || 3>2); //true
// вернет true в случае если хотя бы одно выражение будет true
//вернет false только если все выражения будут давать false

//?? (нулевой) работает только с null и undefined
let test = '';
let example = test ?? 'Пользователь ничего не ввел'
console.log(example);

//&& (и)
// вернет false в случае если хотя бы одно выражение будет false
//вернет true только если все выражения будут давать true

// ! (не отрицание)


// if , ? , switch

// if(*условие*){*тело выполнения кода*}
let int = 5;
if(int > 3){
    console.log('yes');
} else if (int < 3){
    console.log('no');
} else {
    console.log('=');
}


// ?
// (*условие*) ? *код в случае true* : *код в случае false* ;
int > 3 ? console.log('yes') : console.log('no');

// switch
switch(int){
    case 3:
        console.log('равен 3');
        break;
    case 5:
        console.log('равен 5');
        break;
    case 10:
        console.log('равен 10');
        break;
    default:
        console.log('не равен ничему');
}

//Индексация и метод length
let arr = [10,11,12,13];
console.log(arr);
console.log(arr[1]); // -1 вернет undefind
console.log(arr.length);
console.log(arr[arr.length-1]);
console.log(arr.at(1)); // -1 вернет последний массив как в строке выше

let str ='hello world!';
console.log(str);
console.log(str[1]); 
console.log(str.length);
console.log(str[str.length-1]);
console.log(str.at(-1)); 

// Циклы for while and do while
// for(* начальные условие*; *условие цикла*; *шаг цикла*){*тело цикла*}
for(let i = 0; i < 100; i++){
    console.log(i);
}


let a = 10, b = 100;
while(a < b){
    console.log(a);
    a +=10; // a = a + 10
}

// do{
//     *тело цикла*
// } while(*условие*)

//вывести в консоль по буквенно ваше имя
let name = 'Ксения';
for (i = 0; i < name.length; i++){
    console.log(name[i]);
}
//--------------------------------------------HOMEWORK(lesson 2)-----------------------------------------------------------

// Задача 1
// Вывести к консоль побуквенно Ваше имя циклом В ОБРАТНОМ ПОРЯДКЕ

let name1 = 'Ксения';
for (i = name.length-1; i >= 0 ; i--){
    console.log(name[i]);
}

// Задание на if
// 1.1 Узнать у user'a совершеннолетний ли он и в зависимости от его ответа вывести в console своё решение. ('Сколько Вам лет?')
let age = +prompt('Сколько вам лет?');
    if (age === 0){
        alert('Введите корректные данные');
    } else if (age < 18){
        alert('Ты слишком маленький');
    } else if (age >= 18){
        alert('Проход разрешен');
    } else if (isNaN){
        alert('Введите не текст, а число');
    }

// 1.2 Написать программу для определения положительное или отрицательное число
let num = +prompt('Введите число');
    if (num === 0){
        alert('Введите корректные данные');
    } else if (num < 0){
        console.log('Число отрицательное');   
    } else if( num >= 0){
        console.log('Число положительное');
    } else if ( isNaN){
      console.log('Введите число, а не текст');
    } 

// 1.3 Написать программу для определения чётное или нечетное число (%)
let num1 = +prompt('Введите число');
    if(num1 % 2 == 0){
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }

// 2. Задание на switch
// Пользователь вводит число от 0 до 6 и в console выводится день недели (0 - вск, 1 - пн, ... , 6 - сб)
let week = +prompt('Введите число');
switch(week){
    case 0:
        console.log('Воскресенье');
        break;
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    default: 
        console.log('лол');
        
}

// 3. Задание на for
// 3.1 Вывести в console таблицу умножения на 3 в следующем виде:
//     3*1=3
//     3*2=6
//     3*3=9
//     3*4=12
//     3*5=15
//     3*6=18
//     3*7=21
//     3*8=24
//     3*9=27
//     3*10=30
let num3 = +prompt('Введите число');
    for (i = 1; i <= 10; i++){
        let res = num3 * i;
        console.log(`${i} * ${num3} = ${res}`);  
    }

// 3.1* User вводит число от 1 до 10 и в console выводится таблица умножения этого числа.

// 3.2 Вывести все числа в console, которые деляться на 3 от 1 до 1000; (%)
for (i = 0; i <= 1000; i++){
    if(i % 3 === 0){
    console.log(i);
    }
}

// 3.3* User вводит слово, вывести в console является ли слово палиндромом (например, "казак")
let word = prompt('Введите слово');
status = true;
    for(i = 0; i < word.length/2; i++){
        if(word[i] !== word[word.length - 1 - i]){
            status = false;
            break;
        }
    }

        // 2 СПОСОБ
let word2 = prompt('Введите слово');
let temp = ''///////////////////


// 4. Задание на while
// 4.1 У user'a запрашиваем два числа, выводим их сумму в alert, а потом снова запрашиваем 2 числа и так бесконечно.

let sum, num4, num5;
    while(true){
        num4 = +prompt('Введите число');
        num5 = +prompt('Введите число2');
        sum = num4 + num5;
        alert(sum);
    } 


// 4.2 Запрашиваем число у user'a и выводим в console сумму всех чисел от 1 до числа пользователя (включая его).

// let num6
//  = +prompt('Введите число');
// let sum1 = 0;
// let i = 1;
//     while(num6 >= i){
//         sum1 += i;
//         i++;
//     }
//     console.log(sum1);
    

// 4.3* Гражданин 1 марта открыл счёт в банке на 1000 руб. Каждый месяц размер вклада увеличивается на 2% от имеющейся суммы.
// Необходимо определить:
//  - за какой по счёту месяц величина ежемесячного увеличения вклада превысит 30 руб.;
//  - через сколько месяцев размер вклада будет больше 1200 руб.;
//  *** сделать оба решения в одном цикле

let deposit = 1000;
let percent = .02
let increase = 0;
let mounth = 0;
countSum = 0;
countPercent = 0;

    while(increase < 30){
        increase = deposit * percent;
        deposit = deposit + increase
        mounth++;
    }
    console.log(mounth);
------------------------------------
let deposit = 1000;
let percent = 0.02
let increase = 0;
let mounth = 0;
countSum = 0;
countPercent = 0;

    while(deposit < 1200){
        increase = deposit * percent;
        deposit = deposit + increase
        mounth++;
    }
    console.log(mounth);
 -----------------------------------

 объединенное решение:
    while(deposit < 1200 && increase < 30){}
        increase = deposit * percent;
        deposit = deposit + increase
        if(deposit >= 1200 && countSum === 0){
            countSum = mounth;
            status = false;
        }
        if(increase < 30 && countPercent === 0){
            countPercent = mounth;
        }
        mounth++;
}


// ----------------------------------------------LESSON 3-----------------------------------------------------------------------

// Функции
// function declaration
// function *имя функции* ( *аргументы* ){ *тело функции* }
function sum(num1 = 0, num2 = 0){
    num1 += 100;
    return num1 + num2+ num3;
}
let x = 10 , 
    y = 15;
    a, 
    r;

let res = sum(x,y,100);
console.log(res);

// function expression
// const *имя функции* = function ( *аргументы* ){ *тело функции* }
const myFunc = function ( ){ console.log('Hello'); }
myFunc();

// arrow function
// (*аргументы*) => {*тело функции*}
const sum2 = (num1, num2) => num1 + num2
console.log(sum2(10,20));

let pow = n => n**2;
console.log(pow(10)); // 100



// * callback function
function logIn(question = '', yes, no){
    confirm(question) ? yes('Заходите') : no('УХОДИТЕ!');
}
logIn('Вам есть 18?', alert, console.log);

let sum3 = sum2;
console.log(sum3);
console.log(sum3(1,2));


// ОБЛАСТИ ВИДИМОСТИ .. var/let
// блочная область видимости - {}, if, while, for

{
    let abc = 'ffkffkfk';
}
console.log(abc); // не работает, не видит переменную



let bum5 = 5
function myFunc2(n = 0){
    bum5 = 100;
    return;
}
myFunc2(); // 100
console.log(bum5); // 5 без вызова функции


for(var i = 0; i < 10; i++){
}
console.log(i);
/*/

//---------------------------------------------------HOMEWORK(lesson 3)-------------------------------------------------------------

// *написать функцию getText, которая будет принимать 2 аргумента (name, age) и возвращать строку вида "Вас зовут так-то и Вам столько-то лет";
// function getText(name = prompt('whats you name?'),age = prompt('whats you age?')){
//     return (`Вас зовут ${name} и Вам ${age} лет`)
// }
// alert(getText())

// 0. переписать задачу с палиндромом на функцию. arg --> string, return boolean
// let word = prompt('Введите слово');
// status = true;
//     for(i = 0; i < word.length/2; i++){
//         if(word[i] !== word[word.length - 1 - i]){
//             status = false;
//             break;
//         }
//     }

// let word = prompt('Введите слово');
// function isPalindrom(){
//     let reversed = '';

//     for (let i = word.length - 1; i >= 0; i--){
//             reversed += word[i]
//         }
//     return word === reversed
// }
// console.log(isPalindrom(word));

// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function getWeekDay(n){
//     n = +prompt('введите число от 1 до 7')
//     switch(n){
//         case 7:
//            return console.log('Воскресенье');
//         case 1:
//             return console.log('Понедельник');
//         case 2:
//            return console.log('Вторник');
//         case 3:
//            return console.log('Среда');
//         case 4:
//            return console.log('Четверг');
//         case 5:
//            return console.log('Пятница');
//         case 6:
//            return console.log('Суббота');
//         default:
//             console.log('лол');
//     }
// }
// getWeekDay();

// 2. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр. //123 --> 6
// function getDigitsSum (num){
//         let sum = 0;
//         let str = String(num);
//             for(let i = 0; i < str.length; i++) {
//                 sum += Number(str[i]);
//             }
//             return sum;
//         }
// let num = +prompt('введите число');
// console.log(getDigitsSum (num));

// 3. Найдите все года от 1 до 2024, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// function getYearsSum(num, year){
//     let res = '';
//     for (let i = 1; i <= year; i++) {
//               if (getDigitsSum (i) === num) res += i + ', ';
//             }
//     return res;
// }
// console.log(getYearsSum(13, 2024));

// 4.
/*Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
    Пароль проверять так:
        Если введён пароль «Я главный», то выводить «Здравствуйте!»,
        Иначе – «Неверный пароль»,
        При отмене или в случае если ничего не введено – «Отменено».
    
            РЕШЕНИЕ:
let login = promt('Введите логин');
let password;
if (login === 'Админ') {
  password = prompt('Введите пароль');
    if (password === 'Я главный') {
      alert('Здравствуйте'); 
    } else if (password === '' || password === null){
      alert('Отменено');
    } else {
        alert ('Неверный пароль');
    }
} else if (login === '' || login === null) {
  alert('Отмена');      
} else { 
  alert('Я вас не знаю');
} /*/

// let n;
//  while (true){
//     n = prompt('Введите число больше 100');
//     if (n > 100 || n === null)
//         break;
//  }

//  Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//  Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//  Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//  Напишите код, который выводит все простые числа из интервала от 2 до n.
//  Для n = 10 результат должен быть 2,3,5,7.

//  P.S. Код также должен легко модифицироваться для любых других интервалов.
// РЕШЕНИЕ:
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function min(a,b){
//     if (a < b){
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(2,5));

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// -------------------------------------------------------LESSON 4-----------------------------------------------------------------------
// МАССИВЫ (ARRAY)
/*
    let arr1 = ['text', 123, true];
    arr1[2] = 123;

    let arr = new Array('text', 12, true); // (3) - цифры при передачи покажут создаст количество (empty * 3)

    let num1 = 10;
    let num2 = num1;
    num += 10;
    console.log(num1); // 10
    console.log(num2); // 20

    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    arr2.pop();
    console.log(arr1); [1, 2]
    console.log(arr2); [1, 2]
/*/
/*
// МЕТОДЫ МАССИВОВ:
// push, pop, unshift, shift
let arr3 = [1,2,3];
// push - добавляет элементы в конец массива , возвращает длинну обновленного массива
arr3.push(4.5);
console.log(arr3);
//pop - удаляет один элемент с конца массива, возвращает удаленный элемент
arr3.pop();
//unshift - добавляет элементы в начало массива , возвращает длинну обновленного массива
arr3.unshift(-1,0)
//shift - удаляет один элемент с начала массива, возвращает удаленный элемент
arr3.shift();

// splice - удалять, добавлять , заменять 
// меняет исходный массив
// возвращает удаленные элементы
// arr.splice ( *start index*, *кол-во элементов*, *элементы которые нужно добавить* )
let arr4 = [1,2,3,4,5];
arr4.splice(1, 2); // удаление // 1,4,5
arr4.splice(1, 0, 'two', 'three'); // добавление // 1, 'two', 'three', 4, 5
arr4.splice(0, 1 , 'one'); // замена // 'one', 'two', 'three', 4, 5  

// slice
// не меяет исходный массив, возвращает скопированные элементы
// arr.slice( *start index(включаяя элемент)*, *end index(не включая элемент)* )
let res = arr4.slice(1,3);

//Перебор массивов
// for, for in, for of, .forEach, .map()
let arr5 = [10,20,30,40,50];
// for(let index in arr5){
//     console.log(index); // 0 1 2 3 4  
// }

// for(let elem of arr5){
//     console.log(elem); // 10 20 30 40 50  
// }

//  arr5.forEach(function(elem, index, array){
//     console.log(elem, index, array);
//  })
//.map() - возвращает новый массив
let newArr = arr5.map((el, i, arr)=> {
    //return 1; // 1 1 1 1 1
    el += 100;
    return el; // 110 120 130 140 150 // return el + 100
});


//filter - возвращает отфильтрованный массив
let filterArr = arr5.filter(elem => elem > 30);

//reduce - возвращает аккумулированное значение
let res3 = arr5.reduce((acc, cur) => acc + cur, 0);

// indexOf(), lastIndexOf(), includes
let arr6 = [1,2,3,4,5,2,6,7.2,6];
let ind1 = arr6.indexOf(2);
let ind2 = arr6.lastIndexOf(2);
let boo = arr6.includes(2);

// sort() - меняет исходный массив, reverse()
let arr7 = [-2,133,323,6,31,1,3,-24,-12414,6];
arr7.sort(function(a,b){
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
});

arr7.sort((a,b) => a-b);
console.log(arr7);

// split -разъединяет, join - склеивает
let str = 'казак';
let strArr = str.split('');
let resStr = strArr.join('');

console.log(strArr);

// как очистить массив
let arr8 = [1,2,5,6];
// arr8 = []; // (1)
// arr8.pop();
// arr8.push(10,20);
// arr8.length = 0;
// while (arr8.length > 0){
//     arr8.pop()
// }
// arr8.splice(0,arr8.length);
console.log(arr8);

// клонирование массива
// 1.НЕглубокое копирование
let arr9 = [1,2,3,[4,5,6]];
let newArr1 = arr9.slice(); // (1)
newArr1[0] = 'one';
newArr1[3][0] = 'four';
console.log();

// let newArr2 = arr9.concat([7,8,9]); // (2)
// let newArr2 = [].concat(arr9); // (2)
// console.log(newArr2);

// let newArr3 = arr9.map(el => el); // (3)

// let newArr4 = [...arr9]; // (4)

// let newArr5 = Array.from(arr9); // (5)

// написать самому // (6)

// ГЛУБОКОЕ КОПИРОВАНИЕ
let newArr6 = JSON.parse(JSON.stringify(arr9)); // (1)
newArr6[3][0] = 'four';
console.log(newArr6);

// написать самому пройтись циклом РЕКУРСИВНО // (2)


// КАК СРАВНИТЬ МАССИВЫ
let arr10 = [1,2,3];
let arr11 = arr10;
let arr12 = [1,2,3];
console.log(arr10 == arr11); // true
console.log(arr10 == arr12); // false

JSON.stringify(arr10) === JSON.stringify(arr12) // (1)

// написать самому пройтись циклом РЕКУРСИВНО // (2)

// every, some
arr10.length === arr12.length && arr10.every((elem, index) => elem === arr12[index]) // (3)
// arr10.length === arr12.length && arr10.some((elem, index) => ...)


/*/
// -----------------------------------------------------HOMEWORK(lesson 4)---------------------------------------------------------------------
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// function sumInput() {

//     let numbers = [];

//     while (true) {

//       let value = prompt("Введите число", 0);

//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;

//       numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }

//   alert( sumInput() );

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
/*

function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }



Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b){
    return arr.filter(arr => (arr >= a && arr <= b))  
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 3, 5));


Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        let val = arr[i];

        if(val < a || val > b){
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);



// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
    // ... ваш код для сортировки по убыванию
//     function compareNumeric(a,b){
//         if(a > b) return 1;
//         if(a < b) return -1;
//         if(a == b) return 0;
//     }
// arr.sort(compareNumeric);
// arr.reverse(compareNumeric);

arr.sort( (a, b) => b - a );
alert( arr ); // 8, 5, 2, 1, -10




У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted );
  alert( arr );


Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    let result = [];
        for(let str of arr){
            if(!result.includes(str)){
                result.push(str);
            }
        }
            return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O


  // ЗАДАЧИ 
// 1. Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
// (без использования методов массива slice, concat и т.д.)
let arr = [1,2,3,4,5,6];
    let newArr = [];

function copyArr(arr){
    for (let arr2 of arr){
        newArr.push(arr2);
    }
}
copyArr(arr);
console.log(arr);
console.log(newArr);



// 2.Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.
// [1,2,3,4,5] =>  getLast([1,2,3,4,5], 3) => [3,4,5]

function getLast(array, n){
// Проверяем входные параметры
if(!Array.isArray(array) || typeof n !== 'number'){
    return 'ошибка:неверные данные;
}

//Проверяем достаточно ли элементов в массиве
if(n < array.length){
    return 'ошибка:неверные входные парамаетры';
    }

    return array.slice(array.length - n);
}
console.log(getLast([1,2,3,4,5], 3));


// 3. Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
function colonOdd(num){
    let result = '',
        str = num.toString();

    for(let i = 0; i < str.length; i++){
        if(str[i] % 2 && str[i + 1] % 2){
            result = result + str[i] + ':';
        } else {
            result = result + str[i];
        }
    }
    return result;
} 


// 4. Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.
// let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// // Set([1,2,1,1]) => {0: 1, 1: 2} НЕ ИСПОЛЬЗОВАТЬ !
function removeDuplicates(arr){
    let res = [];
    for(let str of arr){
        if(!res.includes(str)){
            res.push(str);
        }
    }
    return res;
}
 let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];

console.log(removeDuplicates(arr));

2-4 СПОСОБ РЕШЕНИЯ

(2) const filterDublicates = arr => arr.filter((el,index,array) => array.indexOf(el) === index); 

(3) const setDublicates = arr => [...new Set(arr)];
// new Set(arr) --> {0: 'php', 1: 'css', 2: 'script', ...}
// ...new Set(arr) --> ...{0: 'php', 1: 'css', 2: 'script', ...} --> 'php', 'css', 'script', ...
// ['php', 'css', 'script', ...]

(4) const reduceDup = arr => 
    arr.reduce((uniqArr, curItem) => uniqArr.includes(curItem) ? uniqArr : [...uniqArr, curItem] , []); 


// 5.Напишите функцию union, которая возвращает массив, содержащий все элементы, которые не повторяются в массивах arr1 и arr2.
// let arr1 = [1, 2, 'a', 5];
// let arr2 = [1, 2, 3, 4, 'b'];
// // result ['a', 5, 3, 4, 'b']


let arr1 = [1, 2, 'a', 5];
let arr2 = [1, 2, 3, 4, 'b'];

function union(arr1, arr2) {
let combArray = arr1.concat(arr2);
let uniqueArray = combArray.filter(item => {
    return combArray.indexOf(item) === combArray.lastIndexOf(item);
});

return uniqueArray;

}
let result = union(arr1, arr2);
console.log(result); // ['a', 5, 3, 4, 'b']

2 СПСОБО РЕШЕНИЯ
function union(arr1, arr2) {
let result = [];

    for(let i = 0; i < arr1.length; i++){
        if(!arr1.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }


    for(let i = 0; i < arr2.length; i++){
        if(!arr2.includes(arr2[i])){
            result.push(arr2[i]);
        }
    }

    return result;
}


// 6. // написать функцию которая считает кол-во одинаковых значений в массиве и вывод ВСЕ их индексы
// // array = ["e", "1", "e", "g", 5, "h", "e"]
// Результат:
// Элемент e повторяется 3 раз; Индексы: 0,2,6;
// dublicate(["e", "1", "e", "g", 5, "h", "e"] , 'e')  =>  Элемент e повторяется 3 раз; Индексы: 0,2,6;

function dublicate(array, element){
    let indices = [];
        for(let i = 0; i < array.length; i++){
            if (array[i] === element){
                indices.push(i);
            }
        }
    let count = indices.length;

    if(count > 0){
        console.log(`Элемент ${element} повторяется ${count} раз; Индексы: ${indices.join(', ')};`);
    } else{
        console.log(`Элемент ${element} не найден.`);
    }

}
let array = ["e", "1", "e", "g", 5, "h", "e"];
dublicate(array, 'e');


-------------------------------------------------------------LESSON 5 (ОБЪЕКТЫ)-----------------------------------------------------------------
/*/
//1.Создание объекта
// свойство = ключ - значение
// {}, new Object()
// let pet = 'dog'
// let obj = {name: "Ksenia",
//             age: 25,
//             "is teacher" : true,
//             [pet] : "Дружок",

//         };// --> двойные кавычки ВАЖНО  В jSON
// let obj2 = new Object({name: 'Ksenia', age: 25}); - редкий синтаксис

//2.Создание свойств
// obj.gender = "male";
// console.log(obj);

//3.Обращение к свойствам
// let key = "teacher"
// console.log(obj.name); // ищет ключ name
// console.log(obj[name]); // ищет переменную name
// console.log(obj['name']); // ищет ключ name
// console.log(obj["is teacher"]); // ищет ключ name
// console.log(obj["is" + key]); //
// console.log(obj[pet]); //

// //4.Удаление свойств
// delete obj.age;
// console.log(obg);

// 5. Проверка 'есть ли свойство', длина, цикл

// let obj2 = {
//     name: "Ksenia",
//     age: 25,
//     "is teacher" : true,
//     dog: "Дружок",
// };
// console.log("name" in obj2); // true

// Object.keys()// ---> возвращает массив ключей [key1, key2, ...]
// Object.values()// ---> возвращает массив значений [values1, values2, ...]
// Object.entries()// ---> возвращает массив массивов со значениями ключей и значений свойств [[key1,values1], [key2,values2], ...]
//console.log(Object.keys(obj2).length); // --> узнать длинну объекта;

//6.Цикл

// for(let key in obj2){
//     console.log(key);
//     console.log(obj2[key]);

// }

//7.Сравнение и копирование объектов

// const obj3 = {
//     name: "Ksenia",
//     age: 25,
//     "is teacher" : true,
//     dog: "Дружок",
// };

// let obj4 = obj3;
// let obj5 = {a: 5};
// let obj6 = {a: 5};
// console.log(obj3 === obj4); // true
// console.log(obj5 === obj6); // false
// console.log({} == {}); // false

// Клонирование объектов
// НЕ ГЛУБОКОЕ
//(1) Цикл
// let obj7 = {};
// for(let key in obj3){
//     obj7[key] = obj3[key];
// }
// obj7.age = 111;
// console.log(obj3);
// console.log(obj7);

//(2) let obj8 = {...obj3};

//(3) Object.assign( *куда добавлять*, *что добавлять* )
// Object.assign( obj3, {country: "Russia"});

// let obj9 = Object.assign( {} , obj3);
// obj9.dog = "Rex";
// obj9.address.city = "MSK";

// ГЛУБОКОЕ КОПИРОВАНИЕ
// (1) Написать самостоятельно рекурсивную функцию copy()
// (2) Использовать стороннюю библиотеку
// (3) JSON
// let obj11 = JSON.parse(JSON.stringify(obj3)); // new Date(), regExp, new Set(), function - подобные структуры данных метод копирует некорректно

//8. оператор ?
// опциональный оператор
// console.log(obj3?.fio?.lastname);

//9. Сортировка ключей

// const obj12 = {
//         name: "Ksenia",
//         12: 12,
//         age: 25,
//         "is teacher" : true,
//         dog: "Дружок",
//         address: {
//             city: "Kazan",
//             street: "Lenina"
//         },
//         1: 1,
//     };

//     obj12.z = '1212345';
//     obj12.a = 'fffffff';

//     for(let key in obj12){
//             console.log(key);
//         }

//     console.log(obj12);

// ---------------------------------------------------HOMEWORK 5------------------------------------------------------------------------

// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(obj){

//     for (let key in obj){
//         return false
//         {
//             return true
//         }
//     }
// };

// 3.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
//   for(let key in salaries){
//     sum = sum + salaries[key];
//   }
//   console.log(sum);

// 4. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj){
//     for(let key in obj){
//         if (typeof obj[key] == 'number'){
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu);

// 1. У нас есть следующий объект:

// let user = {
//   name: "John",
//   age: 30
// };
// // Написать функцию, которая проверяет, что этот объект не пустой и что в нем есть ключ age.

// function userName(obj){
//     if(Object.keys(obj).length === 0){
//         return 'Empty';
//     } else if ('age' in obj){
//         return 'You have AGE'
//     } else {
//         return 'Не пустой, но AGE нету'
//     };
// }
// alert(userName(user));

// 2. Имеется массив объектов:
// let users = [
//     {
//       name: "Ivan",
//       age: 30
//     },
//     {
//       name: "Boris",
//       age: 21
//     },
//     {
//       name: "Maria",
//       age: 19
//     }
// ];
// // Получите из этого массива объект, где name == "Boris" и сохраните это в какой-либо переменной.
// let boris = users.find(item => item.name == "Boris");

// 3. Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.

// users.sort ((a, b) => a.age - b.age);
// console.log(users);

// 4. Удалите из массива объектов (задание 2) объект с name == "Maria".

//  let usersNew = users.filter(person => person.name !== "Maria");
//  console.log(usersNew);

// function deleteObjInArry(arr, key, val){
//     let i = -1;
//     arr.forEach((el, index) => {
//         if(elem[key] === val){
//             i = index;
//         }
//     });
//     return i === - 1 ? {}  : arr.splice(i, 1);
// }

// 5. ***. написать функцию. которая будет возвращать все повторяющие элементы с их кол-вом и их индексами;
// dublicateALL(["e", "1", "e", "g", 5, "1", "h", "e"])
// [
//     {
//     elem: "e",
//     count: 3,
//     indexes: [0,2,7]
//     },
//     {
//     elem: "1",
//     count: 2,
//     indexes: [1,5]
//     },
// ]
// function dublicate(array, element){
//     let res = {
//         element: element,
//         count: 0,
//         indexes: []
//     };
//     array.forEach((value, index) => {
//         if (value === element){
//         res.indexes.push(index);
//         res.count++;
//         }
//     });
//     return res;
// }

// function dublicateAll(array){
//     let res = [];
//     let newArr = arr.slice();
//     let temparr = [];
//     newArr.forEach(elem => {
//         if(newArr.indexOf(elem) !== newArr.lastIndexOf(elem) && !temparr.includes(elem)){
//             res.push(dublicate(newArr, elem));
//             temparr.push(elem);
//         }
//     });

//     return res;
// }

//   console.log(dublicateALL(["e", "1", "e", "g", 5, "1", "h", "e"]));

// ------------------------------------------------------LESSON 6 (this)----------------------------------------------------------
// Методы, this(контекст)
// let user = {
//     name: 'Dima',
//     age: 35,

// вариант 1
// sayName: function(){},

//вариант 2
// sayName: ()  => {},

//вариант 3
// sayName(){
// console.log(user.name);
//}

// let admin = Object.assign({}, user);
// admin.name = "admin";
// console.log(admin.name); // Admin
// admin.sayName();

// bind, call ,apply - переопределяет контекст (this)
// bind - не вызывает
// call - вызывает
// apply - вызывает и вторым аргументов можно передать другие аргументы

// ---------------------------------------------------LESSON 7 (Замыкание(карирование), рекурсия, объяснения на степени, визуализатор)---------------
// 1.Замыкание(карирование)
// function getSumHundred(){
//     let x = 100;
//     return function (a,b){
//         return x + a + b;
//     }
// }
// let sum = getSumHundred();
// console.log(sum(10,20));

// function CreateIncrement(num1){
//     return function (num2){
//         return num1 + num2;
//      }
// }

// function urlGeneration(domain1){
//     return function (domain2){
//         return `https://${domain2}.${domain1}`;
//      }
// }
// let comUrl = urlGeneration('com');
// console.log(comUrl('google'));

// //args
// function sumAll(...args) {
//     console.log(args);
//     return args.reduce((acc, cur) => acc + cur, 0)
// }
// console.log(sumAll(10,4,3,5,4));

// //карирование
// function getInfoUser(name, age, city) {
//     return `тебя зовут ${name}, тебе ${age}, ты из города${city}.`
// }
// let curryInfoUser = getInfoUser(name)
// curryInfoUser(age)(city);

// function curry(fn) {
//     return function newFn(...args1){
//         if(fn.length === args1.length){
//             return fn(...args1);
//         }
//         return function(...args2){
//             return newFn(...args1, ...args2);
//         }
//     }
// }

// 2.Рекурсия объяснения на степени, визуализатор

// a**b
// function power(a,b) {
//     if(b === 0) return 1;
//     return a * power(a,b-1)
// }
// power(2,5);
/*
Иванов Иван
    Петров Пётр
        Антонов Антон
        Максимов Максим
    Сидоров Сидор
        Ушанов Анатолий
    Романова Анна
        Грибов Максим
        Куликов Антон
            Сергей Сергей
/*/

// function createWorker(name, lastname, salary) {
//     return { name, lastname, salary, staff: [] };
// }
// let staffList = createWorker('Иван', 'Иванов', 1_000_000, []);
// staffList.staff.push(createWorker('Петр' , 'Петров', 100_000));
// staffList.staff.push(createWorker('Сидор' , 'Сидоров', 100_000));
// staffList.staff.push(createWorker('Анна' , 'Романова', 100_000));
// staffList.staff[0].staff.push(createWorker('Антон' , 'Антонов', 10_000));
// staffList.staff[0].staff.push(createWorker('Максим' , 'Максимов', 10_000));
// staffList.staff[1].staff.push(createWorker('Анатолий' , 'Ушанов', 10_000));
// staffList.staff[2].staff.push(createWorker('Максим' , 'Грибов', 10_000));
// staffList.staff[2].staff.push(createWorker('Антон' , 'Куликов', 10_000));
// staffList.staff[2].staff[1].staff.push(createWorker('Сергей' , 'Сергей', 1000));

// console.log(staffList);

// function writeWorker(user, str) {
//     console.log(`${str} name: ${user.name}`);
//     console.log(`${str}lastname: ${user.lastname}`);
//     console.log(`${str}salary: ${user.salary}`);
//     console.log(`${str}------------------------`);
// }

// function renderStaff(obj, str = '') {
//     writeWorker(obj, str);
//     for(let worker of obj.staff){
//         renderStaff(worker, str + '     ');
//     }
// }
// renderStaff(staffList);

// ------------------------------------------------------HOMEWORK 7-----------------------------------------------------------------------

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// function sumTo(n) {
//     let res = 0;
//     for(let i = 0; i <= n; i++){
//         res = res + i;
//     }
//     return res;
// }
// console.log(sumTo(100));

// function sumTo(n) {
//     return (n !== 1) ? n + sumTo(n - 1) : 1;
// }
// console.log(sumTo(5));

// function factorial(n){
//     return (n === 1) ? 1 : n * factorial(n-1)
// }
// console.log(factorial(5));

// Задача ***
// Бинарный поиск
// Дан массив [12,43,234,654,23,5,67,2,34,3,1,7]
// Необходимо бинарным поиском найти число 7

// function getNum(arr, num) {
//     arr.sort( (a, b) => a - b );
//     let mediana = Math.floor(arr.length / 2);
//     let curNum = arr[mediana];
//     if (curNum === num){
//         return curNum;
//     } else if (num > curNum){
//         return getNum(arr.slice(mediana + 1), num);
//     } else if (num < curNum) {
//         return getNum(arr.slice(0 , mediana), num);
//     } else {
//         return null;
//     }
// }
// console.log(getNum([12,43,234,654,23,5,67,2,34,3,1,7], 7));

// --------------------------------------------------LESSON 8---------------------------------------------------------------------
/*

let rootElem = document.getElementById('root');
// console.log(rootElem);

let users = [];
function getUserInfo() {
    let userNameElem = document.getElementById('user_name');
    let userAgeElem = document.getElementById('user_age');
    let userMarriedElem = document.getElementById('user_married');
    // console.log(userNameElem.value, userAgeElem.value, userMarriedElem.checked); 
    users.push(createUser(userNameElem.value, userAgeElem.value, userMarriedElem.checked));
    // console.log(users);
    // rootElem.innerText = ""; // innerText -сохраняет текст в рутэлем
                             // innerHtml - преобразует в html
    rootElem.innerHTML = "";
    renderDataToHTML(users);
    userNameElem.value = "";
    userAgeElem.value = "";
    userMarriedElem.checked = "";
}

function createUser(name, age, married){
    return {name, age, married};
}

function renderDataToHTML(arr) {
    arr.forEach(user => {
        for(let key in user){
            rootElem.innerHTML += user[key] + "<br>"
        }
         rootElem.innerHTML += "<br>"
    });
}

let arr = ['hello','my', 'dear', 'friend'] ;
let str = '';
for(let word of arr){
    str = str + word + " ";
}
console.log(str);
/*/

/*
let rootElem = document.getElementById('root');

let products = [
    ['Яблоко','Фрукт','сладкий','Антоновка','6 шт'],
    ['Груша','Фрукт','сладкий','Китайская','5 шт'],
    ['Клубника','Ягода','сладкая','Трофейная','40 шт'],
    ['Арбуз','Бахчевые','сладкий','Мегамен','0,2 шт'],
    ['Дыня','Бахчевые','сладкая','Торпеда','0,25 шт'],
    ['Голубика','Ягода','кисло-сладкая','Обычная','360 шт'],
    ['Лимон','Фрукт','кислый','Турецкий','12 шт']
];
let headers = ["№", "Наименование","Тип","Вкус","Сорт","Кол-во"];

function createTable(headersList) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    // <table class="table table-striped"></table>
    // table.className = "table table-striped";
    // table.classList.add("table");
    // table.classList.add("table-striped");
    table.setAttribute("class", "table table-striped");

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    rootElem.appendChild(table);

    for(let elem of headersList){
        let th = document.createElement('th');
        th.innerHTML = elem; // <th></th>
        tr.appendChild(th);
    }
    return {table, tbody};
}
let tableInfo = createTable(headers);

function addDataToTable(data, tbody) {
    for(let i = 0; i < data.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
            td.innerHTML = i + 1; // <th></th>
            tr.appendChild(td);
        // data[i].unshift(i+1);
        // tbody.appendChild(tr); // можно ставить и сюда
        
        for(let j = 0; j < data[i].length; j++){
            let td = document.createElement('td');
            td.innerHTML = data[i][j]; // <th></th>
            tr.appendChild(td);
            td.addEventListener('click', addInputInTd );
        }
        tbody.appendChild(tr);
    }
    
}
addDataToTable(products, tableInfo.tbody);



function createLayout(...nodes) {
    let divContainer = document.createElement('div');
    let divRow = document.createElement('div');
    let divCol = document.createElement('div');
    
    divContainer.className = "container";
    divRow.className = "row";
    divCol.className = "col";
    
    divContainer.appendChild(divRow);
    divRow.appendChild(divCol);
    nodes.forEach(node => {
        divCol.appendChild(node);
    });
    
    return divContainer;
}
let containerLayout = createLayout(tableInfo.table, createControls());
rootElem.appendChild(containerLayout);

function createControls() {
    let form = document.createElement('form');
    let div = document.createElement('div');
    let lable = document.createElement('lable');
    let input = document.createElement('input');
    let btn = document.createElement('button');

    lable.className = "form-label";
    input.className = "form-control";
    input.type = 'number';
    input.style.width = '50%';
    btn.className = "btn btn-primary";

    lable.innerText = 'Введите номер строки чтобы ее удалить:';
    btn.innerText = 'Удалить строчку';

    form.appendChild(div);
    form.appendChild(btn);
    div.appendChild(lable);
    div.appendChild(input);

    btn.addEventListener('click', (event) => deleteStr(event,input));

    return form;
}

function deleteStr(e, input) {
    e.preventDefault();
    let val = +input.value;
    let tbody = document.querySelector('table.table.table-striped tbody');
    let allTr = tbody.getElementsByTagName('tr');
        if (val <= 0 || val > allTr.length || !val){
            alert('Введите корректные данные');
            input.value = '';
            return;
        } 
        tbody.removeChild(allTr[val-1]); 

        for(let i = 0; i < allTr.length; i++){
            allTr[i].querySelector('td').innerHTML = i + 1; 
        }
    }

    function addInputInTd(event) {
        let td = event.target;
        let val = td.innerText;
        let input = document.createElement('input');
        let btnDone = document.createElement('i');
        let btnDelete = document.createElement('i');
        td.style.display = 'flex';

        input.value = val;
        input.style.width = '150px';
        input.className = 'form-control';

        btnDone.className = 'bi bi-check-square-fill';
        btnDelete.className = 'bi bi-x-square-fill';

        btnDone.style.color = 'darkgreen';
        btnDelete.style.color = 'red';

        btnDone.style.cursor = 'pointer';
        btnDelete.style.cursor = 'pointer';

        btnDone.style.fontSize = '24px';
        btnDelete.style.fontSize = '24px';

        td.innerHTML = '';
        td.appendChild(input);
        td.appendChild(btnDone);
        td.appendChild(btnDelete);

        td.removeEventListener('click', addInputInTd );

        btnDone.addEventListener('click', () => changeValInTd(td, input));
        btnDelete.addEventListener('click', () => {
        td.innerHTML = val;
        td.addEventListener('click', addInputInTd)
    });
    }

    function changeValInTd(td, input) {
     let val = input.value;
     td.innerHTML = '';
     td.innerText = val; 
     td.addEventListener('click', addInputInTd );
     td.removeAttribute('style'); 
    }

    function removenOldVal() {
        innerText = val;
        td.addEventListener('click', addInputInTd );
        td.removeAttribute('style'); 
    }

/*/

// let rootElem = document.getElementById('root');
// let input = document.createElement('input');
// let output = document.createElement('p');

// input.addEventListener('input', getVal2);

// // при вводу слова необходимо первую букву привети к заглавной, а остальные к малому регистру (к строчной)
// function getVal() {
//   // TODO
//   // получить данные из input
//   let val = input.value;
//   // получить первую букву и сделать её заглавной .toUpperCase();
//   let start = val[0].toUpperCase();
//   // получить остальное слово (за исключением певой буквы) и привести все символы к строчным .toLowerCase()
//   // let end = val.slice(1).toLowerCase();
//   let end = '';
//   for(let i = 1; i < val.length; i++){
//     end += val[i].toLowerCase();
//   }
//   // склеить результат
//   let res = start + end;
//   // вывести результат в параграф
//   output.innerText = res;
// }
// function getVal2() {
//     output.innerText = input.value.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// }

// rootElem.appendChild(input);
// rootElem.appendChild(output);

// // ДЗ№3
// // 1) кнопка Отмены в таблице
// // 2) первая заглавная буква, остальные строчные. у всех слов в предложении. Знаков препинания нет, слова разделены пробелом.

// ---------------------------------------------------LESSON 9(ASYNC)-------------------------------------------------------------
// Async - REST API
// web Api
// event loop

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 2000);
// console.log(4);

// XMLHttpRequest --> new Promise() --> AJAX --> fetch --> axios --> async/await

// let xhr = new XMLHttpRequest();
// xhr.open('GET', URL, ...);
// xhr.send('');
// xhr.onload = function (data) {
//   console.log(data);
// }
// xhr.close();

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(()=>{
//     console.log('Запрос ушёл...');
//     let data = {name: "Dima", age: 35};
//     // resolve(data);
//     reject({succsess: false, msg: "Запрос некорректный"})
//   },2000)
// })
// // console.log(prom);
// prom.then( data => {
//   console.log('Promise resolved');
//   data.city = "KZN";
//   logData(data);
// }).catch(err => console.error(err))
// .finally();

// function logData(data) {
//   console.log(data);
// }

// $.ajax({
//   method: "GET",
//   url: "",
//   success: (data) => console.log(data),
//   data: {}
// })

// fetch(URL,{
//   method: "POST",
//   body: {},
//   headers: {}
// }).then(res => res.json())
// .then( data => {
//   console.log(data);
// }).catch(err => console.error(err))
// .finally();

// axios.get(URL).then()

// async function asyncFetch(url) {
//   try{
//     let res = await fetch(url);
//     let json = await res.json();
//     console.log(json);
//   }catch(err){
//     console.error(err)
//   }
// }

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then( data => {
//         logData(data);
//       })

// function logData(data) {
//   console.log(data);
//   let p = document.createElement('p');
//   p.innerText = data.name;
//   document.querySelector('body').appendChild(p);
// }

// ДЗ
// 1. Получить от user'a многозначное число через input и вывести чуть ниже в параграф сумму его цифр
// - событие клик или интуп - решаете сами, в случае клин не забыть про кнопку
// -* использовать циклы нельзя, юзать только методы

// let rootElem = document.getElementById('root');
// let input = document.createElement('input');
// let output = document.createElement('p');

// input.addEventListener('input', getSum);

// function getSum() {
//     let val = input.value;
//     val = String(val);
//     let res = 0;
//     for(let i = 0; i < val.length; i++){
//         res += Number(val[i]);
//     }
//     output.innerText = res;
// }

// rootElem.appendChild(input);
// rootElem.appendChild(output);

// 2. - func createElem создаёт карточку пользователя (создать элементы, добавить классы)
//    - стилизовать через css
//    - func renderUsers отправляет fetch запрос и добавляет данные в карточку пользователя

/*
let rootElem = document.getElementById('root');
let divContainer = document.createElement('div');

function createElem(user) {
    
    let divCard = document.createElement('div');
    let avatar = document.createElement('img');
    let id = document.createElement('p');
    let name = document.createElement('h2');
    let emailLink = document.createElement('a');

    divContainer.appendChild(divCard);
    divCard.appendChild(avatar);
    divCard.appendChild(id);
    divCard.appendChild(name);
    divCard.appendChild(emailLink);

    divContainer.className = 'container';
    divCard.className = 'userCard';
    avatar.className = 'userAvatar';
    id.className = 'userId';
    name.className = 'userName';
    emailLink.className = 'userEmail';


    avatar.src  = user.avatar;
    id.textContent = `ID: ${user.id}`;
    name.textContent = `${user.first_name} ${user.last_name}`;
    emailLink.href = `mailto:${user.email}`;

    return divContainer;
}

async function renderUsers(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data.data;
        users.forEach(user => {
            const userCard = createElem(user);
            rootElem.appendChild(userCard);
        });
    } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error);
    }
}

renderUsers('https://reqres.in/api/users?page=1');
/*/

// fetch('https://reqres.in/api/users?page=1')
//       .then(res => res.json())
//       .then( data => {
//         renderUsers(data.data);
//       })

// --------------------------------------------------------------LESSON 10 CANVAS-------------------------------------------------------------

// 1. объяснение, подключение, размер полотна, примеры с квадратиками, закраска, очистка экрана

// const cvsElem = document.getElementById('cvs');
// cvsElem.width = window.innerWidth * .9;
// cvsElem.height = window.innerHeight * .8;
// let ctx = cvsElem.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.strokeStyle = 'red';

// // ctx.fillRect(x, y, width, heigth)
// ctx.fillRect(100, 100, 50, 50);
// ctx.strokeRect(90, 90, 70, 70);
// // console.log(ctx);

// ctx.clearRect(80, 80, 50, 50);

// 2. задание "паутинка":
// написать цикл, который отрисует 100 квадратов друг в друге
// начиная из центра без закраски на расстоянии 5 пикселей друг от друга
// вариант 1
// let x = cvsElem.width / 2 - 2.5,
//     y = cvsElem.height / 2 - 2.5,
//     h = 5;
// for(let i = 0; i < 100; i++){
//   ctx.strokeRect(x, y, h, h);
//   x -= 5; // x = x - 5;
//   y -= 5;
//   h += 10;
// }

// вариант 2
// for(let i = 0; i < 100; i++){
//   ctx.strokeRect(cvsElem.width / 2 - 2.5 - 5 * i,
//                 cvsElem.height / 2 - 2.5 - 5 * i,
//                 5 + 10 * i,
//                 5 + 10 * i);
// }

// 3. двигающийся квадрат
// let x = 0;
// let step = 5;
// function drawSquare() {
//   ctx.clearRect(0, 0, cvsElem.width, cvsElem.height);
//   let randomR = Math.round(Math.random() * 255);
//   let randomG = Math.round(Math.random() * 255);
//   let randomB = Math.round(Math.random() * 255);
//   ctx.fillStyle = `rgb(${randomR},${randomG},${randomB})`;
//   ctx.fillRect(x, 100, 50, 50);
//   x += step;
// }
// setInterval(drawSquare, 100);

// 4. задание
// сделать рандомную закраску квадратика при каждой отрисовке
// rgb(0-255, 0-255, 0-255)
// Math.random() * 255
// Math.trunc(97.49150823197505) - JSотбрасывает дробную часть
// Math.ceil(1.000000001) - округление в большую сторону
// Math.floor(2.9999999) - округление в меньшую сторону
// Math.round(1.8) - округление согласно правилам математики
// Math.round(Math.random() * 255)

// 5. задание
// реализовать визуально процесс перемеения одного квадрата
// (подсказка: очищать canvas при каждом вызове функции)
// ctx.clearRect(80, 80, 50, 50);

// 6. разворот квадрата при достижении границ (ДЗ)

// 7. перемещение квадрата посредством клавиатуры

// let square = {
//   x: 0,
//   y: 0,
//   size: 50,
//   step: 10,
// }
// function drawMovingSquare() {
//   ctx.clearRect(0, 0, cvsElem.width, cvsElem.height);
//   ctx.fillRect(square.x, square.y, square.size, square.size);
// }
// setInterval(drawMovingSquare, 100);

// window.addEventListener('keypress', function(e){
//   // console.log(e);
//   if(e.code === "KeyW"){
//     // console.log('Up');
//     if(square.y - square.step > 0){
//       square.y -= square.step;
//     }else{
//       square.y = 0;
//     }
//   }else if(e.code === "KeyS"){
//     // console.log('Down');
//     if(square.y + square.step + square.size < cvsElem.height){
//       square.y += square.step;
//     } else{
//       square.y = cvsElem.height - square.size;
//     }
//   }else if(e.code === "KeyA"){
//     // console.log('Left');
//     square.x -= square.step;
//   }else if(e.code === "KeyD"){
//     // console.log('Right');
//     square.x += square.step;
//   }
// })

// ДЗ (доделать ограничение слева и справа)

// 8. линии, графики, объяснения
// ctx.beginPath();
//   ctx.moveTo(100, 100);
//   ctx.lineTo(150, 50);
//   ctx.lineTo(200, 100);
// ctx.fill();

// 9. отрисовка графика синусойды y=sin(x)
// ctx.beginPath();
//   ctx.moveTo(0, 100);
//   for(let i = 0; i < 500; i++){
//     ctx.lineTo(i*2, Math.sin(i/10)*50+100);
//   }
// ctx.stroke();
//
// 10. график согласно заданным кооринатам
// let data = [
//   {"x": 10, "y": 30},
//   {"x": 40, "y": 50},
//   {"x": 20, "y": 70},
// ];
// function drawGraph(points, sortStatus = false) {
//   if(sortStatus){
//     points.sort((a,b) => a.x - b.x);
//   }
//   ctx.beginPath();
//     ctx.moveTo(points[0].x, points[0].y);
//     points.forEach(point => ctx.lineTo(point.x, point.y));
//   ctx.stroke();
// }

// drawGraph(data);

// ДЗ
// 1. см пункт 6 - реализовать "обратно-поступательное" движение квадратика в функции drawSquare
// 2. доделать пункт 7
// 3. - написать обработчик, который считывает данные со страницы ( textarea + btn )
//     - преобразовать данные в объект с помощью JSON
//     - применить координаты для отрисовки графика (написать функцию, вызвать её передав туда необходимые данные)
//     * добавить функционал перемещения графика

// -----------------------------------------LESSON 11 RegExp - Регулярные выражения-------------------------------------------------------

// \w - любой текстовый символ (буква, цифра, _)
// \W - НЕ текстовый символ
// \d - число
// \D - НЕ число
// \s - пробельный символ
// \S - НЕ пробельный символ
// \b - граница слова
// {} - диапазон кол-ва символов
// * - кол-во от 0 до бесконечности
// + - кол-во от 1 до бесконечности
// ? - от 0 до 1
// . - абсолютно любой символ

// 1. варианты вызова regexp

// let regexp1 = / *регулярное выражение* / *флаги*;
// let regexp2 = new RegExp('*регулярное выражение*', '*флаги*');

// 2. w,d,b,{},+ match, search, экранирование
// let rootElemText = document.getElementById('root').innerText;
// let regexp = /[а-яёa-z_]+@[а-яёa-z]+\.[а-яёa-z]+/gi;
// let result = rootElemText.match(regexp);
// console.log(result);

// 3. задание: написать регулярное выражение по поиску e-mail в тексте
// 4. флаги, табличка pdf , латиница/кирилица

// 5. работа со сплит, пример с числами
// let str = ' ваг 8р2а ц807п02ии 97км92гиа294мц8нимшыт р __ 1182  !! 94 урац7р7ыр7мп7мп87пцу .. гр974р';
// let result2 = str.split(/\D+/).filter(elem=>elem);
// console.log(result2);

// 6. задание: написать regexp, которая достаёт из root все слова (через split) (ДЗ)

// 7. input с номером телефона, replace - объяснение
// '123hello'.replace('h', 'H');
// '123Hello'
// '123hello'.replace(/\d+/, 'hi = ');
// 'hi = hello'
// '123hello123'.replace(/\d+/, 'hi = ');
// 'hi = hello123'
// '123hello123'.replace(/\d+/g, '');
// 'hello'

// let inputPhoneElem = document.getElementById('phone');
// inputPhoneElem.addEventListener('input', function(){
//     let mask = "_ (___) ___ - __ - __";
// 1 "8 (___) ___ - __ - __"
// 2 "8 (9__) ___ - __ - __"
// 3 "8 (97_) ___ - __ - __"
// let number_text = this.value.replace(/\D/g,''); // 89754
// if(number_text.length > 11){
//     number_text = number_text.slice(0, 11);
// }
// for(let num of number_text){
//     mask = mask.replace('_', num);
// }
// let last_num = number_text[number_text.length - 1];
// let slice_index = mask.lastIndexOf(last_num) + 1;
// mask = mask.slice(0, slice_index);

// если первая цифра 7 или 8, то менять первый символ в маске на "+7"
// TODO

//     this.value = mask;
// });

/*
ДЗ

Необходимо реализовать поисковик по тексту
В интерфейсе есть input поле, параграф с текстом и параграф в котором будет формироваться результат.
    Процесс строится следующим образом:
    1. пользователь вводит искомую часть слова в поле input
    2. в параграфе с ответом формируется список с ответами (слова в которых встречается такое сочетание букв ) поиск не должен зависеть от регистра
Поиск срабатывает при изменении input поля.
*/

// function getVal() {
//   // TODO
//   // получить данные из input
//   let val = input.value;
//   // получить первую букву и сделать её заглавной .toUpperCase();
//   let start = val[0].toUpperCase();
//   // получить остальное слово (за исключением певой буквы) и привести все символы к строчным .toLowerCase()
//   // let end = val.slice(1).toLowerCase();
//   let end = '';
//   for(let i = 1; i < val.length; i++){
//     end += val[i].toLowerCase();
//   }
//   // склеить результат
//   let res = start + end;
//   // вывести результат в параграф
//   output.innerText = res;
// }
// function getVal2() {
//     output.innerText = input.value.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// }

// rootElem.appendChild(input);
// rootElem.appendChild(output);
/*
const searchInput = document.getElementById('searchInput');
const textParagraph = document.getElementById('textParagraph');
const resultParagraph = document.getElementById('resultParagraph');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); // Получаем значение из input и переводим в нижний регистр
    const textContent = textParagraph.textContent; // Получаем текст из параграфа
    const words = textContent.split(/\s+/); // Разбиваем текст на слова
    const results = words.filter(word => word.toLowerCase().includes(searchTerm)); // Фильтруем слова по искомому значению

    // Формируем результат
    if (results.length > 0) {
        resultParagraph.textContent = `Найденные слова: ${results.join(', ')}`; // Отображаем найденные слова
    } else {
        resultParagraph.textContent = 'Слова не найдены'; // Если ничего не найдено
    }
});
/*/

// cookie
// document.cookie = 'key=value';
// document.cookie = 'key2=value2';
// console.log(document.cookie.includes('key'));
// console.log(document.cookie);

// Expires
// Max-Age
// Domain
// Path
// Secure
// HttpOnly

// localStorage, sessionStorage

// localStorage.setItem('theme', 'dark');
// console.log(localStorage.getItem('theme'));
// localStorage.removeItem('theme');
// console.log(localStorage.getItem('theme'));

// let rootElem = document.getElementById('root');

// darkMode
// (function () {
//     if(!localStorage.getItem('darkMode')){
//         localStorage.setItem('darkMode', 'light');
//     }else if(localStorage.getItem('darkMode') === 'dark'){
//         rootElem.classList.add('rootDarkMode');
//         rootElem.classList.add('containerDarkMode');
//     }

//     let btnDarkMode = document.getElementById('btnDarkMode');
//     btnDarkMode.addEventListener('click', function () {
//         let currentDarkMode = localStorage.getItem('darkMode');
//         if(currentDarkMode === 'light'){
//             localStorage.setItem('darkMode', 'dark');
//             rootElem.classList.add('rootDarkMode');
//             rootElem.classList.add('containerDarkMode');
//         }else{
//             localStorage.setItem('darkMode', 'light');
//             rootElem.classList.remove('rootDarkMode');
//             rootElem.classList.remove('containerDarkMode');
//         }
//     })
// })();

// goods & basket
// console.log(JSONdata);
// if(!localStorage.getItem('goodCount')){
//     localStorage.setItem('goodCount', 0);
//     localStorage.setItem('goodsSum', 0);
// }
// rootElem.querySelector('.basket .count').innerText = localStorage.getItem('goodCount');
// rootElem.querySelector('.basket .sumBasket').innerText = localStorage.getItem('goodsSum');

// let goodsContainerElem = rootElem.querySelector('.goods');

// function createGood(good){
//     let divElem = document.createElement('div');
//     let titleElem = document.createElement('h3');
//     let priceElem = document.createElement('p');

//     divElem.classList.add('good');
//     titleElem.innerText = good.title;
//     priceElem.innerText = good.price;

//     divElem.appendChild(titleElem);
//     divElem.appendChild(priceElem);

//     divElem.addEventListener('click', () => {
//         let goodCount = +localStorage.getItem('goodCount');
//         let goodsSum = +localStorage.getItem('goodsSum') + good.price;
//         localStorage.setItem('goodCount', ++goodCount);
//         localStorage.setItem('goodsSum', goodsSum);
//         rootElem.querySelector('.basket .count').innerText = goodCount;
//         rootElem.querySelector('.basket .sumBasket').innerText = goodsSum;
//     })

//     return divElem;
// }

// for(let elem of JSONdata.data){
//     let goodElem = createGood(elem);
//     goodsContainerElem.appendChild(goodElem);
// }

/*
    ДЗ
    1. изменить отрисовку товара на fetch запрос. добавить картинку, описание товара и т.д.
    2. сделать чтобы при клике на корзину окрывалось окно со списком всех покупок в виде:
    Наименование - кол-во - сумма // Велосипед - 10шт. - 200000
    Наименование2 - кол-во - сумма
    ...
    ИТОГО: итоговая сумма
    3. сделать кнопку обнуления корзины
/*/

// function name(n) {
//     let human = 0;
//     let cat = 0;
//     let dog = 0;

//   for(let i = 1; i <= n; i++){
//     if(i === 1){
//         human = i;
//         cat += 15;
//         dog += 15;
//     } else if (i === 2){
//         human = i;
//         cat += 9;
//         dog += 9;
//     }
//     else {
//         human = i;
//         cat += 4;
//         dog += 5;}

//     console.log(human,cat,dog);

//   }
// }
// console.log(name(10));
// var number = function (...busStops) {
// 	return (
// 		busStops.map(el => el[0]).reduce((a, b) => a + b) -
// 		busStops.map(el => el[1]).reduce((a, b) => a + b)
// 	)
// }
// console.log(number([10, 0], [3, 5], [5, 8]))

// function wordReverse(word) {
// 	let w = word.split(' ').reverse().join(' ')
// 	console.log(w)
// }
// console.log(wordReverse('cat dog'))

// class Shape {
// 	getArea() {
// 		return 0;
// 	}
// }

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	greet() {
// 		return `Welcome, my name is ${this.name} and ${this.age}`;
// 	}
// 	birthday() {
// 		this.age += 1;
// 	}
// }
// const human = new Person('Alice', 20);
// console.log(human.greet());
// console.log(human.birthday());
// console.log(human.greet());

// class Student extends Person {
// 	constructor(name, age, classes) {
// 		super(name, age);
// 		this.classes = classes;
// 	}
// 	study() {
// 		return `${this.name} study in ${this.classes}`;
// 	}
// }
// const student = new Student('Bob', 30, '11');
// console.log(student.greet());
// console.log(student.study());

// class BankAccount {
// 	constructor(accountNumber, balance) {
// 		this.accountNumber = accountNumber;
// 		this.balance = balance;
// 	}
// 	deposit(amount) {
// 		this.balance += amount;
// 	}
// 	withdraw(amount) {
// 		amount <= this.balance ? (this.balance -= amount) : console.log('Недостаточно средств на счете.');
// 	}
// 	getBalance() {
// 		return this.balance;
// 	}
// }

// const account = new BankAccount('123456', 1000);
// account.deposit(500);
// console.log(account.getBalance()); // 1500
// account.withdraw(200);
// console.log(account.getBalance()); // 1300
// account.withdraw(2000);
// console.log(account.getBalance()); // 1300

//-------------------------------------------

// function solution(str, ending) {
// 	return str.endsWith(ending);
// }
// console.log(solution('abcde', 'cd'));

//------------------------------------
// function countBy(x, n) {
// 	let z = [];
// 	for (i = 1; i <= n; i++) {
// 		z.push(i * x);
// 		console.log(i);
// 		// console.log(x);
//         // 1*2   2*2  3*2  4*2  5*2
//----------------------------------------
// 	}
// 	return z;
// }
// console.log(countBy(2, 5));
//[2, 4, 6, 8, 10]

//----------------------------------------
// function reverseWords(str) {
// 	let newWords = str
// 		.split(' ')
// 		.map(word => word.split('').reverse().join(''))
// 		.join(' ');

// }
// console.log(reverseWords('  double  spaced  words  ')); // ' elbuod decaps sdrow '

// -----------------------------------------
// function openOrSenior(data) {
// 	let ranks = [];
// 	data.map(rank => {
// 		if (rank[0] >= 55 && rank[1] > 7) {
// 			return ranks.push('Senior');
// 		} else {
// 			return ranks.push('Open');
// 		}
// 	});
// 	return ranks;
// }
// console.log(
// 	openOrSenior([
// 		[64, 11],
// 		[63, 12],
// 		[37, 7],
// 		[61, 8],
// 		[70, 7],
// 		[54, 19],
// 		[67, 17],
// 	])
// ); // [ 'Senior', 'Senior', 'Open', 'Senior', 'Open', 'Open', 'Senior' ]

// ----------------------------------------------
//Вам будет дан массив чисел. Вам нужно отсортировать нечетные числа в порядке возрастания, оставив четные числа на своих исходных позициях.
// function sortArray(array) {
// 	let newArray = array.filter(x => x % 2).sort((a, b) => a - b);
// 	let newArr = array.map(x => (x % 2 ? newArray.shift() : x));

// 	return newArr;
// }
// console.log(sortArray([5, 3, 1, 8, 0])); //  [1, 3, 5, 8, 0]

// ---------------------------------------------
// 'abcdefghijklmnopqrstuvwxyz';
// function printerError(s) {
// 	let errorLetters = 'nopqrstuvwxyz';
// 	let count = 0;

// 	for (let i = 0; i <= s.length; i++) {
// 		if (errorLetters.includes(s[i])) {
// 			count++;
// 		}
// 	}
// 	return `${count}/${s.length}`;
// }
// let s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
// console.log(printerError(s)); //  "3/56"

// ------------------------------------------------
// function deleteNth(arr, n) {

// }
// deleteNth([12, 39, 19, 39, 39, 19, 12], 1); // [12, 39, 19];

//--------------------------------------------------
// function findArr(arrA, arrB, rng, wanted) {
// 	let findArrResult = [];
// 	let newArrA = doubleNum(arrA);
// 	let newArrB = doubleNum(arrB);

// 	let setA = new Set(newArrA);
// 	let setB = new Set(newArrB);

// 	let commonSet = [...setB].filter(el => setA.has(el));
// 	let rngArr = rangeArr(commonSet, rng);

// 	if (wanted === 'even') {
// 		findArrResult = rngArr.filter(el => el % 2 === 0);
// 	} else {
// 		findArrResult = rngArr.filter(el => el % 2 !== 0);
// 	}
// 	return findArrResult.length > 0 ? findArrResult.sort((a, b) => a - b) : [];
// }

// arrA = [1, -2, 7, -2, 1, 3, 4, 7, 1, 2, 3, 0, 4];
// arrB = [0, 4, -2, -2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
// rng = [-4, 4];
// wanted = 'even';
// console.log(findArr(arrA, arrB, rng, wanted));

// function doubleNum(arr) {
// 	let count = {};
// 	let newArr = [];

// 	// Подсчитываем вхождения
// 	for (let num of arr) {
// 		count[num] = (count[num] || 0) + 1;
// 	}

// 	// Добавляем только те числа, которые встречаются более одного раза
// 	for (let num in count) {
// 		if (count[num] > 1) {
// 			newArr.push(Number(num));
// 		}
// 	}

// 	return newArr;
// }

// function rangeArr(arr, rng) {
// 	let arrResult = [];
// 	let start = rng[0];
// 	let end = rng[1];

// 	for (let el of arr) {
// 		if (start <= el && el <= end) {
// 			arrResult.push(el);
// 		}
// 	}
// 	return arrResult;
// }

// ------------------------------------------------------------
// function findEvenIndex(arr) {
// 	let sumAllNumsInArr = 0; // 16
// 	let sumLeftNums = 0;

// 	for (let num of arr) {
// 		sumAllNumsInArr += num;
// 	}

// 	for (let i = 0; i < arr.length; i++) {
// 		if (sumLeftNums == sumAllNumsInArr - sumLeftNums - arr[i]) {
// 			return i;
// 		}
// 		sumLeftNums += arr[i];
// 		console.log(sumLeftNums);
// 	}
// 	return -1;
// }
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3

// -----------------------------ЗАДАЧИ НА АЛГОРИТМЫ-------------------------------
// 1 способ
// let twoSum = function (nums, target) {
// 	let numMap = {}; // num: index
// 	for (let i = 0; i < nums.length; i++) {
// 		const sum = target - nums[i];
// 		if (sum in numMap) {
// 			return [numMap[sum], i];
// 		}
// 		numMap[nums[i]] = i;
// 		console.log(numMap);
// 	}
// 	return ['lol'];
// };

// console.log(twoSum([2, 3, 3, 7, 11, 15], 9));
// 2 способ
// let twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// 	return ['lol'];
// };
// console.log(twoSum([2, 3, 3, 7, 11, 15], 9));

// ---------------------------------------------------
// var isPalindrome = function (x) {
// 	return x.toString().split('').reverse().join('') === x.toString();
// };
// console.log(isPalindrome(121));

// var isPalindrome = function (x) {
// 	let start = 0;
// 	let end = x.length - 1;

// 	while (start < end) {
// 		let firstChar = x[start].toLowerCase();
// 		let lastChar = x[end].toLowerCase();

// 		if (firstChar.toLowerCase() === firstChar.toUpperCase()) {
// 			start++;
// 			continue;
// 		}
// 		if (lastChar.toLowerCase() === lastChar.toUpperCase()) {
// 			end--;
// 			continue;
// 		}
// 		if (firstChar !== lastChar) {
// 			return false;
// 		}
// 		start++;
// 		end--;
// 	}
// 	return true;
// };
// console.log(isPalindrome(`No 'x' in Nixon`));

// ------------------------------------------------------

// var romanToInt = function (s) {
// 	const obj = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};

// 	let num = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		if (obj[s[i]] < obj[s[i + 1]]) {
// 			num -= obj[s[i]];
// 		} else {
// 			num += obj[s[i]];
// 		}
// 	}

// 	return num;
// };
// console.log(romanToInt('VI')); // Ввод: s = «LVIII»/ Вывод: 58
// -------------------------------------------
// var longestCommonPrefix = function (strs) {
// 	strs.sort();
// 	let first = strs[0];
// 	let last = strs[strs.length - 1];
// 	let i = 0;

// 	while (i < first.length && i < last.length && first[i] === last[i]) {
// 		i++;
// 	}

// 	return first.substring(0, i);
// };

// console.log(longestCommonPrefix(['rag', 'racecar', 'rar']));

// Input: strs = ['flower', 'flow', 'flight'];Output: 'fl';

// -------------------------------------------------
// var longestCommonPrefix = function (strs) {
// 	const sortStr = strs.sort();
// 	let first = sortStr[0];
// 	let last = sortStr[sortStr.length - 1];
// 	let i = 0;

// 	while (i < first.length && i < last.length && first[i] === last[i]) {
// 		i++;
// 	}

// 	return first.substring(0, i);
// };
// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// -------------------------------------
// var isValid = function (s) {
// 	const symbol = new Map([
// 		['(', ')'],
// 		['[', ']'],
// 		['{', '}'],
// 	]);

// 	const stack = []; // ( , [
// 	for (let char of s) {
// 		if (symbol.has(char)) {
// 			stack.push(char);
// 		} else {
// 			if (stack.length === 0 || symbol.get(stack.pop()) !== char) {
// 				// [ - symbol.get(stack.pop()) , char - ]
// 				return false;
// 			}
// 		}
// 	}
// 	return stack.length === 0;
// };
// console.log(isValid('([])'));

// --------------------------------------------------
// function reverseWords(arr) {
// 	let length = arr.map(sent => sent.split(' ').length);
// 	console.log(length);

// 	return Math.max(...length);
// }
// console.log(reverseWords(['sdf dflnnlk', 'lssl ldld laalldld', 'df dkcmk dkckdmckmd dcmkdmck']));

//--------------------------------------
// var isAnagram = function (s, t) {
// 	if (s.length < t.length) {
// 		return false;
// 	}
// 	const sMap = {};
// 	const tMap = {};

// 	for (let i = 0; i < s.length; i++) {
// 		sMap[s[i]] = (sMap[s[i]] || 0) + 1;
// 		tMap[t[i]] = (tMap[t[i]] || 0) + 1;
// 	}

// 	for (let key in sMap) {
// 		if (sMap[key] !== tMap[key]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// console.log(isAnagram('anagram', 'nagaram'));

// 2(medium)
// var groupAnagrams = function (strs) {
// 	const anagramsMap = {};

// 	for (const word of strs) {
// 		let sortStr = word.split('').sort().join('');

// 		if (anagramsMap[sortStr]) {
// 			anagramsMap[sortStr].push(word);
// 			// console.log(anagramsMap);
// 		} else {
// 			anagramsMap[sortStr] = [word];
// 			// console.log(anagramsMap);
// 		}
// 	}

// 	return Object.values(anagramsMap);
// };
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// --------------------------------------------
// var search = function (nums, target) {
// 	let low = 0;
// 	let high = nums.length - 1;
// 	while (low <= high) {
// 		let mid = Math.floor((low + high) / 2);
// 		let guess = nums[mid];
// 		if (guess < target) {
// 			low = mid + 1;
// 		} else if (guess > target) {
// 			high = mid - 1;
// 		} else {
// 			return mid;
// 		}
// 	}
// 	return -1;
// };
// console.log(search([-1, 0, 3, 5, 9, 12], 9));

// 2(middle)
// var searchMatrix = function (matrix, target) {
// 	const matrixArr = matrix.flat();
// 	console.log(matrixArr);
// 	let low = 0;
// 	let high = matrixArr.length - 1;

// 	while (low <= high) {
// 		let mid = Math.floor((low + high) / 2);
// 		let guess = matrixArr[mid];
// 		if (guess < target) {
// 			low = mid + 1;
// 		} else if (guess > target) {
// 			high = mid - 1;
// 		} else {
// 			return true;
// 		}
// 	}

// 	return false;
// };

// console.log(
// 	searchMatrix(
// 		[
// 			[1, 3, 5, 7],
// 			[10, 11, 16, 20],
// 			[23, 30, 34, 60],
// 		],
// 		3
// 	)
// );

// ------------------- сортировка выбором ----------------------
// function selectionSort(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		let minIdex = i;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[j] < arr[minIdex]) {
// 				minIdex = j;
// 			}
// 		}
// 		if (arr[minIdex] != i) {
// 			[arr[i], arr[minIdex]] = [arr[minIdex], arr[i]];
// 		}
// 	}

// 	return arr;
// }
// console.log(selectionSort([64, 25, 12, 22, 11]));

// ----------------------- stack --------------------------------
// var isValid = function (s) {
// 	let stack = [];
// 	const map = {
// 		'(': ')',
// 		'[': ']',
// 		'{': '}',
// 	};

// 	for (let char in s) {
// 		if (char in map) {
// 			stack.push(char);
// 		} else {
// 			if (stack.length === 0 || map[stack.pop()] !== char) {
// 				return false;
// 			}
// 		}
// 	}
// 	return stack.length === 0;
// };
// console.log(isValid('()[]{}'));
// --------------------------- разделяй и властвуй ----------------------
// function sum(arr) {
// 	if (arr.length === 0) {
// 		return 0;
// 	} else {
// 		return arr[0] + sum(arr.slice(1));
// 	}
// }

// console.log(sum([2, 4, 6]));
// ---- max num --------
// function maxNum(arr) {
// 	if (arr.length === 1) {
// 		return arr[0];
// 	} else {
// 		return arr[0] > maxNum(arr.slice(1)) ? arr[0] : maxNum(arr.slice(1));
// 	}
// }
// console.log(maxNum([2, 4, 6]));
// -------- базовый и рекурсивный случаи для бинарного поиска  ------------
function search(nums, target, left = 0, right = nums.length - 1) {
	if (left > right) {
		return false;
	}
	let mid = Math.floor((left + right) / 2);
	if (nums[mid] === target) {
		return true;
	}
	return nums[mid] > target ? search(nums, target, left, mid - 1) : search(nums, target, mid + 1, right);
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));
