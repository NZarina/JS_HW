"use strict";
// Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const word = "СЛОВО".toUpperCase();
const consonantsRU = "БВГДЖЗЙКЛМНПРСТФХЦЧШЩ"; // все согласные русского алфавита
const vowelsRU = "АЕЁИОУЫЭЮЯ"; // все гласные русского алфавита
const consonantsEN = "BCDFGHJKLMNPQRSTVWXYZ"; // все согласные английского алфавита
const vowelsEN = "AEIOU"; // все гласные английского алфавита
let numberOfConsonants = 0; // счетчик для согласных
let numberOfvowels = 0; // счетчик для гласных
for (let i = 0; i < word.length; i ++) {
    if (consonantsRU.includes(word[i]) || consonantsEN.includes(word[i])) { 
        numberOfConsonants += 1;
    } else if (vowelsRU.includes(word[i]) || vowelsEN.includes(word[i])) { 
        numberOfvowels += 1;
    } 
}
console.log(`'${word}' contains ${numberOfvowels} vowels and ${numberOfConsonants} consonants`)

