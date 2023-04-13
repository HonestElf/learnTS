"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Maxim');
const btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', () => {
        console.log('clicked');
    });
}
let anyFlag;
function logInfo(data) {
    anyFlag = true;
    console.log(data);
}
logInfo('I am log string');
//# sourceMappingURL=app.js.map