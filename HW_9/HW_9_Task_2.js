"use strict";
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {
    const {name, age} = character;
    characters.push(character);
}
addCharacter({ name: 'Sofia', age: 25 });


// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(name) {
    return characters.find((character) => character.name == name);
};

// console.log(getCharacter("Fred")); // { name: 'Fred', age: 40 } 

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
    return characters.filter((character) => character.age >= minAge);
};

// console.log(getCharactersByAge(40)); // [ { name: 'Fred', age: 40 }, { name: 'Jack', age: 50 } ]

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссылку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
    const characterToChange = getCharacter(name); // находим заменяемого персонажа по параметру name
    for (const character of characters) { 
        if (character.name === characterToChange.name) { // если имя персонажа в массиве равно имени заменяемого персонажа
            characterToChange.name = newCharacter.name; // меняем имя заменяемого персонажа на имя нового персонажа
            characterToChange.age = newCharacter.age; // меняем возраст заменяемого персонажа на возраст нового персонажа
        } 
    } return characters; // возвращаем массив с персонажами
}

updateCharacter('Fred',  { 'name': 'Tom', 'age': 35 });
console.log(characters);


// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
    const index = characters.findIndex((character) => character.name === name);
    characters.splice(index, 1);
    return characters; 
}
removeCharacter('Jack');
console.log(characters);
