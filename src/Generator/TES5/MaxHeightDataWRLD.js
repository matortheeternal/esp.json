let {
    addDef, int16, struct, bytes, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataWRLD', subrecord('MHDT', struct('Max Height Data', [
        struct('Min', [
            int16('X'),
            int16('Y')
        ]),
        struct('Max', [
            int16('X'),
            int16('Y')
        ]),
        bytes('Cell Data', 0)
    ])));
};