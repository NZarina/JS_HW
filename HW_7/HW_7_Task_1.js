"use textict";

// 1. Бесконечные аргументы
//   - Напишите функцию, принимающую на вход любое количество массивов
//   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
//   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
//   - Решить с использованием Spread operator

function mergeArrays(...newArray) {
    let combinedArray =  [];
    combinedArray = combinedArray.concat(...newArray);
    return combinedArray;
}
console.log(mergeArrays([1,2], [3,4], [5,6]))

// 2. Divide by _
//   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
//   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
//   - Пример: I am super engineer => i_Am_Super_Engineer

function splitStringByUnderscore(str) {
    let text = str.toLowerCase().split(' '); // создание массива из строки и перевод в нижний регистр
    let capitalizedArray = [text[0]]; // кладем в массив первое слово
    for (let i = 1; i < text.length; i++) {
        const word = text[i].charAt(0).toUpperCase() + text[i].slice(1); //перевод первой буквы слова в верхний регистр и добавление остальных букв слова
        capitalizedArray.push(word); // добавление результата в массив
    }
    const underscoredString = capitalizedArray.join('_'); // перевод массива в строку с добавлением '_' м/у словами
    return underscoredString;
}
console.log(splitStringByUnderscore('I am super engineer'));


// 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
//   - Например fibanacci(8) //21

function fibanacci(n) {
    let fibonacciSequence = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        let f1 = fibonacciSequence.at(-2); // предпоследний элемент в массиве
        let f2 = fibonacciSequence.at(-1); // последний элемент в массиве
        let sumOfTwo = f1 + f2;
        fibonacciSequence.push(sumOfTwo); // добавление в массив
    }
    return fibonacciSequence.at(-1); // возврат последнего элемента массива
}
console.log(fibanacci(8)); // 21

