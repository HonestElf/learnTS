"use strict";
const cars = ['Ford', 'Audi'];
const cars2 = ['Ford', 'Audi'];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
});
promise.then((data) => console.log(data.trim().toUpperCase()));
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(42);
    }, 1000);
});
promise2.then((data) => console.log(data.toFixed()));
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Sam' }, { age: 25 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
console.log(merged.age, merged.name);
console.log(merged2.model, merged2.year);
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`,
    };
}
console.log(withCount('hello'));
console.log(withCount(['I', 'am', 'array']));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Max',
    age: 26,
    job: 'JS',
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers.items);
const objs = new Collection([{ a: 1 }, { b: 2 }]);
objs.remove({ b: 2 });
console.log(objs.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars3 = ['Ford', 'Audi'];
cars.shift();
const ford = {
    model: 'Ford',
    year: 2020,
};
//# sourceMappingURL=generic.js.map