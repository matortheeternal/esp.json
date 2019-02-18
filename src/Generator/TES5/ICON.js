let {
    addDef, multiStruct, subrecord, zstring
} = require('../helpers');

module.exports = () => {
    addDef('ICON', 
        multiStruct('Icon', [
            subrecord('ICON', zstring('Large Icon filename')),
            subrecord('MICO', zstring('Small Icon filename')),
        ]),
    );
};