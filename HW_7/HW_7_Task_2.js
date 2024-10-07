"use strict";

// 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
function checkPalindrome(str) {
    let word = str.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if(word[i] !== word[word.length - i - 1]) {
            return false;
        } 
    }
    return true;
} 

console.log(checkPalindrome('aB7-bA')); //false
console.log(checkPalindrome('aB7bA')); //true

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
//     и возвращает слово с наибольшим количеством букв. 
//     Если таких слов несколько - возвращает их все.

function findLongestWord(str) {
    const sentence = str.split(" ");
    let longestWord = "";
    let longestWordsArr = [];
    for (const word of sentence) {
        if (longestWord.length < word.length) {
            longestWord = word;
            longestWordsArr.length = 0; // обнуление массива
            longestWordsArr.push(word);
        } else if (longestWord.length === word.length) {
            longestWordsArr.push(word);
        }
    }
    return longestWordsArr;
}

console.log(...findLongestWord('Я не херувим, у меня нет крыльев! Но я чту уголовный кодекс - это моя слабость')); 
