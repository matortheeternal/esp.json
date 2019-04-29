let { convertFile } = require('../src/Converter/oldConverter');

// 25.4% completed
['a'/*, 'b', 'c', 'd', 'e', 'f', 'g', 'h'*/].forEach(char => {
    try {
        convertFile(`TES5${char}.pas`);
    } catch (x) {
        console.error(x);
    }
});