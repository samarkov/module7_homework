// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и
// значения только собственных свойств. Данная функция не должна возвращать значение.

const address = { city: "Moscow", street: "Lenina", building: 1, apartment: 10 };
const customer = Object.create(address);

customer.firstName = "Jhon";
customer.lastName = "Dow";
customer.age = 33;

function listObjectProperties(Obj = {}) {

    console.log("\nТолько поля объекта через метод .keys:");
    for (let item of Object.keys(Obj)) {
        console.log(item + ":" + Obj[item]);
    }
    
    console.log("\nТолько поля объекта через проверку принадлежности свойства объекту:");
    for (let item in Obj) {
        if (Obj.hasOwnProperty(item)) {
            console.log(item + ":" + Obj[item]);
        }
    }    
}

listObjectProperties(customer);

