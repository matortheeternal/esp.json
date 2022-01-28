let {
    addDef, int16, struct, bytes, size, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataWRLD', 
        subrecord('MHDT', struct('Max Height Data', [
            struct('Min', [
                int16('X'),
                int16('Y')
            ]),
            struct('Max', [
                int16('X'),
                int16('Y')
            ]),
            size(0, bytes('Cell Data'))
        ]))
    );
};