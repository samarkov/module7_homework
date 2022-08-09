// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.


function getEmptyObject() {
   return {};
}

a = getEmptyObject();

console.log(a);
console.log(Object.getPrototypeOf(a));




