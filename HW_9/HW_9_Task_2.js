"use strict";
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {
    if(character.hasOwnProperty('name') && character.hasOwnProperty('age') && typeof character.name === 'string' && typeof character.age === 'number') {
      characters.push(character);
    } else {
      console.log("ОШИБКА! Объект должен содержать параметр name с типом данных string и параметр age с типом данных number.");
    }
}

addCharacter({ name: 'Sofia', age: 25 });


// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(name) {
    const found = characters.find((character) => character.name == name); 
    if (found) {
      return found;
    } else {
        console.log(`Персонаж с именем ${name} не найден.`);
    };
};

getCharacter("Fred"); // { name: 'Fred', age: 40 } 


// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
    return characters.filter((character) => character.age >= minAge);
};

// console.log(getCharactersByAge(40)); // [ { name: 'Fred', age: 40 }, { name: 'Jack', age: 50 } ]


// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссылку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
    if (typeof name !== 'string') {
      console.log('Введите имя заменяемого персонажа в формате string')
    }  
    if (typeof newCharacter !== 'object') {
      console.log('Введите данные в формате object');
    };
    if(!newCharacter.hasOwnProperty('name') || !newCharacter.hasOwnProperty('age') || typeof newCharacter.name !== 'string' || typeof newCharacter.age !== 'number') {
      console.log('Объект должен содержать параметр name с типом данных string и параметр age с типом данных number.');
    }
    const characterToChange = getCharacter(name);
    if (characterToChange) {
      characterToChange.name = newCharacter.name;
      characterToChange.age = newCharacter.age;  
    }
  }

updateCharacter('Fred',  { 'name': 'Tom', 'age': 35 });


// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
    const index = characters.findIndex((character) => character.name === name);
    if(index >= 0) {
        characters.splice(index, 1);
    } else {
        console.log('Персонаж не найден');
    }
}

removeCharacter('Jack');
