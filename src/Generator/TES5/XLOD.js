let {
    addDef, float, subrecord, array
} = require('../helpers');

module.exports = () => {
    addDef('XLOD', 
        subrecord('XLOD', array('Distant LOD Data', 
            float('Unknown')
        , 3))
    );
};