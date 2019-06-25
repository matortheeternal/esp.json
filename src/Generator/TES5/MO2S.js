let {
    addDef, prefix, string, ckFormId, int32, 
    sortKey, struct, subrecord, sorted, array
} = require('../helpers');

module.exports = () => {
    addDef('MO2S', 
        subrecord('MO2S', prefix(4, sorted(array('Alternate Textures', 
            sortKey([0, 2], struct('Alternate Texture', [
                prefix(4, string('3D Name')),
                ckFormId('New Texture', ['TXST']),
                int32('3D Index')
            ]))
        ))))
    );
};