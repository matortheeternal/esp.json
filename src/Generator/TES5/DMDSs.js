let {
    addDef, string, prefix, ckFormId, int32, 
    sortKey, struct, sorted, array, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DMDSs', 
        subrecord('DMDS', prefix(4, sorted(array('Alternate Textures', 
            sortKey([0, 2], struct('Alternate Texture', [
                prefix(4, string('3D Name')),
                ckFormId('New Texture', ['TXST']),
                int32('3D Index')
            ]))
        ))))
    );
};