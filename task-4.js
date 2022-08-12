// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

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

DomesticAppliance.prototype.getWatt = function (amperage) {
    console.log(`${this.name}'s consuming power is ${this.voltage * amperage} watt`);
}

function Tv(name, place) {
    this.place = place;
    this.name = name;
}

// Класс ТВ наследник класса бытовой прибор
Tv.prototype = new DomesticAppliance();

Tv.prototype.switchProgram = function () {
    console.log('Channel is switched');
}

//управляем чайником
const kettle = new DomesticAppliance('Kettle'); //чайник с потреблением 10А
kettle.getWatt(10);
kettle.unPlug();

//управляем посудомойкой
const dishwasher = new DomesticAppliance('Dishwasher'); //посудомойка с потреблением 6А
dishwasher.getWatt(6);
dishwasher.plugIn();

//TV в спальне
const bedRoomTv = new Tv('Bedroom\'s TV', 'bedroom'); 
bedRoomTv.plugIn();
bedRoomTv.getWatt(1);
bedRoomTv.switchProgram();//метод только у класса ТВ

//TV в гостинной
const livingRoomTv = new Tv('Living room\'s TV', 'living room');  
livingRoomTv.plugIn();
livingRoomTv.getWatt(2);
livingRoomTv.switchProgram();//метод только у класса ТВ