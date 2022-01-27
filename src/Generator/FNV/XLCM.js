let {
    addDef, int32, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XLCM', 
        subrecord('XLCM', int32('Level Modifier'))
    );
};