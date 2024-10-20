"use strict";

// Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1


function sumDigits(num) {
    const numbers = String(num).split("");
    let sum = 0;
    for (const element of numbers) {
        sum += Number(element);
    }
    if (sum <= 9) {
        return sum;
    } else {
        return sumDigits(sum);
    }
}
console.log(sumDigits(19)); // 1