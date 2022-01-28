let {
    addDef, float, array, count, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XLOD', 
        subrecord('XLOD', count(3, array('Distant LOD Data', 
            float('Unknown')
        )))
    );
};