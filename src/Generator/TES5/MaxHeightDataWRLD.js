let {
    addDef, int16, conflictType, struct, bytes, 
    size, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataWRLD', 
        subrecord('MHDT', conflictType('NormalIgnoreEmpty', struct('Max Height Data', [
            struct('Min', [
                conflictType('NormalIgnoreEmpty', int16('X')),
                conflictType('NormalIgnoreEmpty', int16('Y'))
            ]),
            struct('Max', [
                conflictType('NormalIgnoreEmpty', int16('X')),
                conflictType('NormalIgnoreEmpty', int16('Y'))
            ]),
            conflictType('NormalIgnoreEmpty', size(0, bytes('Cell Data')))
        ])))
    );
};