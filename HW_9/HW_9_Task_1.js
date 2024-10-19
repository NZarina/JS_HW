"use strict";
// Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
const character = { 
    'name': 'Barney', 
    'age': 36, 
    'gender': 'male', 
    'isQa': true 
};

// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
const fourLetterKeys = Object.keys(character).filter(((key) => key.length === 4));
console.log(fourLetterKeys); // [ 'name', 'isQa' ] 

// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'
const stringTypeValues = Object.values(character).filter(((value) => typeof value == "string"));
console.log(stringTypeValues); //[ 'Barney', 'male' ]

// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for. 
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
const objectToArray = Object.entries(character);
for (const [key, value] of objectToArray) {
    console.log(`"key" = ${key}, "value" = ${value},`);
};

// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль 
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())
console.log("salary" in character); // false
console.log(Object.hasOwn(character, 'salary')); // false


