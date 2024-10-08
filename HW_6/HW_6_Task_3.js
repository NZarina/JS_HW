"use strict";

// Удалить дубликаты
//   - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
//   - Напишите скрипт, который убирает из массива дубликаты
//   - При удалении дубликата, длина массива должна уменьшаться

// Вариант 1 (без создания нового массива):
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
for (let i = 0; i < array.length; i++) {
    if(array.includes(array[i], [i+1])) { // если значение элемента x встречается в массиве после элемента x
        array.splice(array.lastIndexOf(array[i], 1)); // то находим элемент x с конца по индексу и удаляем его
    }
}
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Вариант 2 (с созданием нового массива):
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const uniqueArray = [...new Set(array2)];
console.log(uniqueArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

