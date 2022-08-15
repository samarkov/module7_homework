// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// предыдущее задание
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.


// класс "электроприборы"
class DomesticAppliance {
    static voltage = 220;
    constructor(name) {
        this.name = name;
        this.plugged = false;
    }

    // включить в розетку
    plugIn = function () {
        this.plugged = true;
        this.checkPlugState();
    }

    // выключить из розетки
    unPlug = function () {
        this.plugged = false;
        this.checkPlugState();
    }

    //проверить состояние включенности в розетку
    checkPlugState = function () {
        console.log(`${this.name} is ${this.plugged ? 'plugged' : 'unplugged'}`);
        return this.plugged;
    }

    // метод подсчета мощности
    getWatt = function (amperage) {
        console.log(`${this.name}'s consuming power is ${DomesticAppliance.voltage * amperage} watt`);
    }

    turnOn = function () {
        console.log(`${this.name} is turned on`);
    }
}

//класс ТВ
class Tv extends DomesticAppliance {
    constructor(name, place) {
        super(name);
        this.place = place;
    }

    // override метода
    turnOn = function () {
        console.log(`TV ${this.name} is turned on, the screen is blue`);
    }

    switchProgram = function () {
        console.log('Channel is switched');
    }
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