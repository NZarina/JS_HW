"use strict";

// Task 2*
// Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), 
// и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируются.

// Вариант 1:
let n;
let sum = Number("" + n) + Number("" + n + n) + Number("" + n + n + n);
console.log(sum)

// Вариант 2:
// let n;
// let nn = String(n) + String(n);
// let nnn = String(n) + String(n) + String(n);
// let sum = n + Number(nn) + Number(nnn);
// console.log(sum);
