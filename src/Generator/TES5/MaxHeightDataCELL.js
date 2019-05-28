let {
    addDef, float, bytes, array, subrecord, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataCELL', subrecord('MHDT', struct('Max Height Data', [
        float('Offset'),
        array('Rows', bytes('Columns', 32), 32)
    ])));
};