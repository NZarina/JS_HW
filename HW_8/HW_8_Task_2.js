"use strict";
  
//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
  
// Функция для подсчета кол-ва гласных в слове
function countVowels(word) {
    const vowelsRU = "АЕЁИОУЫЭЮЯаеёиоуыэюя"; // все гласные русского алфавита в двух регистрах
    const vowelsEN = "AEIOUaeiou"; // все гласные английского алфавита в двух регистрах
    let numberOfvowels = 0;

    for (const letter of word) {
        if (vowelsRU.includes(letter) || vowelsEN.includes(letter)) { 
            numberOfvowels += 1;
        }
    }
    return numberOfvowels; // возвращаем кол-во гласных в слове
}

// Через метод slice() создаем копию исходного массива и сортируем его, сравнивая кол-во гласных в двух словах
function sortByNumberofVowels(words) {
    return words.slice().sort((a, b) => countVowels(a) - countVowels(b)); 
}

const wordsArr = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue"       
  ];

const sortedArr = sortByNumberofVowels(wordsArr);
console.log(sortedArr);



 
