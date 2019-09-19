// let assert = chai.assert;
import { test1 } from './src/test1.js';
import { test2 } from './src/test2.js';
mocha.setup('bdd');
const assert = chai.assert;
test1(assert);
test2(assert);
mocha.run();

