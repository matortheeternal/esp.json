let {
    addDef, float, bytes, size, array, 
    subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('MaxHeightDataCELL', 
        subrecord('MHDT', struct('Max Height Data', [
            float('Offset'),
            size(32, array('Rows', 
                size(32, bytes('Columns'))
            ))
        ]))
    );
};