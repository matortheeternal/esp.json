let {
    addDef, int16, struct, bytes, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataWRLD', subrecord('MHDT', struct('Max Height Data', [
        struct('Min', [
            int16('X', null),
            int16('Y', null)
        ]),
        struct('Max', [
            int16('X', null),
            int16('Y', null)
        ]),
        bytes('Cell Data', 0)
    ])));
};