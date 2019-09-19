import {calc as calcW} from '/src/t11.js';

export const say = function sayName(name = "Инкогнито"){
    console.log(`Hello, ${name}(${calc(name)})(${calcW(name)})`);
}

const calc = function calcSyms(str = ''){
    return str.length;
}