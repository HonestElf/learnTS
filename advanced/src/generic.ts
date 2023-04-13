const cars: string[] = ['Ford', 'Audi'];
const cars2: Array<string> = ['Ford', 'Audi'];

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
});

promise.then((data) => console.log(data.trim().toUpperCase()));

const promise2: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

promise2.then((data) => console.log(data.toFixed()));

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: 'Sam' }, { age: 25 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });

console.log(merged.age, merged.name);
console.log(merged2.model, merged2.year);

// not objects
// const merged3 = mergeObjects('aaa', 'bbb');
// console.log(merged3);

// ================

interface ILength {
  length: number;
}
function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`,
  };
}

console.log(withCount('hello'));
console.log(withCount(['I', 'am', 'array']));
console.log(withCount({ length: 20 }));

// ==============
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
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

// ===================
class Collection<T> {
  // private _items: T[]=[];

  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers.items);

//doesnt work
const objs = new Collection([{ a: 1 }, { b: 2 }]);
objs.remove({ b: 2 });
console.log(objs.items);

//=======
interface Car {
  model: string;
  year: number;
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }
  return car as Car;
}

// =================
const cars3: Readonly<Array<string>> = ['Ford', 'Audi'];
cars.shift();

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020,
};

// ford.model = 'ferrari';
