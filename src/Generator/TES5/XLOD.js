let {
    addDef, float, subrecord, array, size
} = require('../helpers');

module.exports = () => {
    addDef('XLOD', 
        subrecord('XLOD', size(3, array('Distant LOD Data', 
            float('Unknown')
        )))
    );
};