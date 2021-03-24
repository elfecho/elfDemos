"use strict";
function getName(animal) {
    return animal.name;
}
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function swim(animal) {
    animal.swim(); // 这里不要滥用类型断言
}
const tom3 = {
    name: 'Tom',
    run() { console.log('run'); }
};
// swim(tom3); // 在Cat上找不到swim,编译时不报错，运行时报错
class ApiError extends Error {
    constructor() {
        super(...arguments);
        this.code = 0;
    }
}
class HttpError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 200;
    }
}
function isApiError(error) {
    // if (typeof (error as ApiError).code === 'number') {
    //     return true;
    // }
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
function testCat(cat) {
    return cat; // 双重断言
}
function toBoolean(something) {
    return Boolean(something);
}
console.log(toBoolean(1));
const animal = {
    name: 'tom'
};
let tom666 = animal;
const a = new AnimalClass('5');
a.sayHi();
