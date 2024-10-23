"use strict";
// 1. Context
//   - Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord), который будет возвращать строку вида: 
//     `${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}`. 
//     Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
const qa = {
    name: "Zarina",
    age: 35,
    salary: 10000,
    getInfo(greetingsWord) {
        return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}.`; 
    }
};
  

// 2. Changing the context
//   - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()

const anotherQa = {
    name: "Amalia",
    age: 30,
    salary: 7000,
    // getInfo(greetingsWord) {
    //     return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}.`; 
    // }
};

qa.getInfo.bind(anotherQa)("Hello there");
qa.getInfo.call(anotherQa, "Hello there");
qa.getInfo.apply(anotherQa, ["Hello there"]);

// 3. Closures
//   - Создайте функцию createCounter(),
//   - Создайте в функции createCounter переменную count, которая будет равна 0
//   - Верните из функции createCounter новую функцию
//   - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
//   - После увеличение каунтера выводите в консоль `Function was called ${count} times`
//   - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
//   - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные

function createCounter(){
    let count = 0;
    return () => {
        count++;
        if(count === 1) {
            console.log(`Function was called ${count} time`);
        } else {
            console.log(`Function was called ${count} times`);
        }
    }
}

let functionCallCounter = createCounter();
functionCallCounter(); //Function was called 1 time
functionCallCounter(); //Function was called 2 times
functionCallCounter(); //Function was called 3 times
functionCallCounter(); //Function was called 4 times
functionCallCounter(); //Function was called 5 times
