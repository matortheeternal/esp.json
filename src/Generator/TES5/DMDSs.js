let {
    addDef, lenstring, ckFormId, int32, sortKey, 
    struct, subrecord, array
} = require('../helpers');

module.exports = () => {
    addDef('DMDSs', subrecord('DMDS', array('Alternate Textures', sortKey([0, 2], struct('Alternate Texture', [
        lenstring('3D Name'),
        ckFormId('New Texture', ['TXST']),
        int32('3D Index')
    ])), -1)));
};