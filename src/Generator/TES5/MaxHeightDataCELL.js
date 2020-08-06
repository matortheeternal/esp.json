let {
    addDef, float, bytes, size, array, 
    count, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataCELL', 
        subrecord('MHDT', struct('Max Height Data', [
            float('Offset'),
            count(32, array('Rows', 
                size(32, bytes('Columns'))
            ))
        ]))
    );
};