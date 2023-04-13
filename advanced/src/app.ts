class Person {
  constructor(private name: string) {}
}

const max = new Person('Maxim');

const btn = document.querySelector('#btn');

if (btn) {
  btn.addEventListener('click', () => {
    console.log('clicked');
  });
}

// =====
// noImplicitAny
let anyFlag;

function logInfo(data: string) {
  anyFlag = true;
  console.log(data);
}

logInfo('I am log string');
