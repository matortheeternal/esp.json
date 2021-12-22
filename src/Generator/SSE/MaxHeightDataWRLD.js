let {
    addDef, int16, conflict, struct, bytes, 
    size, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataWRLD', 
        subrecord('MHDT', conflict('NormalIgnoreEmpty', struct('Max Height Data', [
            struct('Min', [
                conflict('NormalIgnoreEmpty', int16('X')),
                conflict('NormalIgnoreEmpty', int16('Y'))
            ]),
            struct('Max', [
                conflict('NormalIgnoreEmpty', int16('X')),
                conflict('NormalIgnoreEmpty', int16('Y'))
            ]),
            conflict('NormalIgnoreEmpty', size(0, bytes('Cell Data')))
        ])))
    );
};