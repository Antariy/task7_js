// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

function allPositiveNumbers(num1, num2) {

    if(num1 < 0) {
        num1 = -num1;
    }
    if(num2 < 0) {
        num2 = -num2;
    }
    return(num1 + num2);
    }
    
    console.log(allPositiveNumbers(10, -10));

// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)


function onlyPositiveNumbers(num1, num2) {

    if (num1, num2 > 0) {return(num1 + num2);
    
    } else if (num1, num2 < 0) {console.log('One of the numbers is negative');}
    }
    
    console.log(onlyPositiveNumbers(135, -29));
    
    // or
    
    const num1 = 32;
    const num2 = -212;

if (num1, num2 > 0) {
   console.log(num1 + num2);
} else if (num1, num2 < 0) {console.log('One of the numbers is negative');}


// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива

const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.forEach(name => {if (name.length <= 5) {shortNames.push(name)}});

console.log(shortNames);

// Напишите функцию, которая принимает число в качестве аргумента
// Если число чётное, возводит его в квадрат
// Если числе не чётное, возводит его в куб

function differentNumbers(number) {
    if (number % 2 === 0) {
      return number ** 2;
    } else if (number % 2 === 1)
     {return number ** 3}
    }
    
    let square = differentNumbers(6) 
    console.log(square);
    
    let cube = differentNumbers(7)
    console.log(cube);

    // Напишитие функцию, которая проверяет, является ли слово палендромом
// Слово палендром читается одинаково слева на право и справа на лево
// Пример - 'rotator'

// Тут даже понять не могу о чем идет речь :-()

// напишите функцию которая примет объект 'myCar' в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если 'false' то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 89425
}

function warranty(car1 + car2) 

let car1

if(myCar.popular === false) {console.log( `Your ${myCar.make} ${myCar.model} is not popular.`);}

else if (myCar.popular === true) {console.log(`Your ${myCar.make} ${myCar.model} is popular.`);}

let car2 

if(myCar.mileage >= 100000) {console.log(`It is not covered by warranty anymore!`);}

else if (myCar.mileage <= 100000) {console.log(`It is covered by warranty!`);}

// я не успел разобраться с функцией - отдельно в дувх строчка понятно что выводит. 