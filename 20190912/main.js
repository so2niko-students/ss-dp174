import {say as bye} from '/src/t1.js';

bye('Человек Паук');

let result = [];
let result1 = [];

let beforeLoop = function withoutInitialInLoop() {
    // let start = performance.now();
    // let variable0 = (i) => i + 100;;
    // let variable1 = 0;
    // let variable2 = 0;
    // for (let i = 0; i < 10000; i++) {
    //     variable1 = i + variable0(i);
    //     variable2 = i + variable1;
    //     result.push(variable2);
    // };
    // return performance.now() - start;
}

let inLoop = function withInitialInLoop() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        const variable0 = (i) => i + 100;
        const variable1 = i + variable0(i);
        const variable2 = i + variable1;
        result1.push(variable2);
    };
    return performance.now() - start;
}

function resultFunc() {
  let timeBeforeLoop = 0;
  let timeInLoop = 0;
  let isTrue = false;
  for (let i = 0; i < 5000; i++) {
    if (isTrue) {
        timeBeforeLoop += beforeLoop();
        timeInLoop += inLoop();
    } else {
        timeInLoop += inLoop();
        timeBeforeLoop += beforeLoop();
    };
    isTrue = !isTrue;  
  }
  return {timeBeforeLoop, timeInLoop};
}

console.log(resultFunc());

