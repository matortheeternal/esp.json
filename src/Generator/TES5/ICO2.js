let {
    addDef, multiStruct, subrecord, zstring
} = require('../helpers');

module.exports = game => {
    addDef('ICO2', 
        multiStruct('Icon 2 (female)', [
            subrecord('ICO2', zstring('Large Icon filename')),
            subrecord('MIC2', zstring('Small Icon filename')),
        ]),
    );
};