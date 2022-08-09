// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

const address = { city: "Moscow", street: "Lenina", building: 1, apartment: 10 };
const customer = Object.create(address);

customer.firstName = "Jhon";
customer.lastName = "Dow";
customer.age = 33;

function listObjectProperties(Obj = {}, checkProp) {

    if (Obj[checkProp]) {return true;}
    return false;
}

console.log("Проверка поля firstName:" + listObjectProperties(customer,"firstName"));
console.log("Проверка поля street из прототипа:" + listObjectProperties(customer,"street"));
console.log("Проверка поля NonExist:" + listObjectProperties(customer,"NonExist"));
