"use strict";

// 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const competitorPizzasLowerCased = competitorPizzas.join().toLowerCase().split(","); // перевожу пицыы конкурента в нижний регистр
const myPizzas = ['Peperoni', 'Margherita', 'Vegetarian', 'Caprichosa', 'Diablo',  'BBQ Chicken', '4 Cheeses', 'Hawai', 'Super-Puper Pizza'];
let myPizzasUnique = [];
for (let i = 0; i < myPizzas.length; i++) {
    if (!competitorPizzasLowerCased.includes(myPizzas[i].toLowerCase())) { // если моей пиццы нет у конкурента, 
        myPizzasUnique.push(myPizzas[i]); // добавляю ее в новый массив myPizzasUnique
    }
}

if(myPizzasUnique.length > 0) { // если массив myPizzasUnique пуст, то вывожу null, в противном случае вывожу элементы массива
    console.log(myPizzasUnique)  
} else {
    console.log(null)
}


