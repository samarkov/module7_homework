// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// класс "электроприборы"
function DomesticAppliance(name) {
    this.voltage = 220;
    this.name = name;
    this.plugged = false;
}

// включить в розетку
DomesticAppliance.prototype.plugIn = function () {
    this.plugged = true;
    this.checkPlugState();
}
// выключить из розетки
DomesticAppliance.prototype.unPlug = function () {
    this.plugged = false;
    this.checkPlugState();
}
//проверить состояние включенности в розетку
DomesticAppliance.prototype.checkPlugState = function () {
    console.log(`${this.name} is ${this.plugged ? 'plugged' : 'unplugged'}`);
    return this.plugged;
}

// метод подсчета мощности
DomesticAppliance.prototype.getWatt = function (amperage) {
    console.log(`${this.name}'s consuming power is ${this.voltage * amperage} watt`);
}

DomesticAppliance.prototype.turnOn = function () {
    console.log(`${this.name} is turned on`);
}

//класс ТВ
function Tv(name, place) {
    this.place = place;
    this.name = name;
    // override метода
    this.turnOn = function () {
        console.log(`TV ${this.name} is turned on, the screen is blue`);
    }
}

// Класс ТВ это наследник класса бытовой прибор, связь через свойсво prototype
Tv.prototype = new DomesticAppliance();
// метод для всех наследников TV
Tv.prototype.switchProgram = function () {
    console.log('Channel is switched');
}

// создаем экземпляр класса электроприборы - чайник
const kettle = new DomesticAppliance('Kettle'); //чайник с потреблением 10А

kettle.getWatt(10);
kettle.unPlug();
kettle.turnOn();

// создаем экземпляр класса электроприборы - поусдомойка
const dishwasher = new DomesticAppliance('Dishwasher'); //посудомойка с потреблением 6А

dishwasher.getWatt(6);
dishwasher.plugIn();
dishwasher.turnOn();

//создаем 1 экземпляр класса телевизоры
const bedRoomTv = new Tv('Bedroom\'s TV', 'bedroom');

bedRoomTv.plugIn();
bedRoomTv.getWatt(1);
bedRoomTv.switchProgram();//метод только у класса ТВ
bedRoomTv.turnOn(); // вместо метода класса электроприборы используется метод класса ТВ

//создаем 2-ой экземпляр класса телевизоры
const livingRoomTv = new Tv('Living room\'s TV', 'living room');

livingRoomTv.plugIn();
livingRoomTv.getWatt(2);
livingRoomTv.switchProgram();//метод только у класса ТВ
livingRoomTv.turnOn();