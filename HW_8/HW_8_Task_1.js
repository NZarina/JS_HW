"use strict";
// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:

const someNums = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
someNums.forEach((num) => {
    if (num % 3 === 0) {
        console.log(num); // 30
    } 
})

//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
const mapMethodArr = someNums.map((num) => num - someNums.length); 
console.log(mapMethodArr); // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]
const filterMethodArr = someNums.filter((num, index) => num > someNums[index - 1]);
console.log(filterMethodArr); // [ 8, 30, 85, 95, 94 ]

//   4. find - найдите элемент, равный своему индексу //2
const findMethodArr = someNums.find((num, index) => num === index);
console.log(findMethodArr); //2

//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
const sortMethodArr = [...someNums].sort((a, b) => a - b);
console.log(sortMethodArr); // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

//   6. reduce - получите сумму всех чисел массива //466
const reduceMethodArr = someNums.reduce(
    (result, num) => result + num,
    0,
);
console.log(reduceMethodArr); // 466

//   7. some - проверьте, есть ли в массиве элементы больше 90 //true
const someMethodArr = someNums.some((num) => num > 10);
console.log(someMethodArr); // true

//   8. every - проверьте, что все элементы массива двухзначные //false
const everyMethodArr = someNums.every((num) => 9 < num && num < 100);
console.log(everyMethodArr); // false
