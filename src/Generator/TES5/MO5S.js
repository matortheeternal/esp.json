let {
    addDef, prefixLength, string, ckFormId, int32, 
    sortKey, struct, subrecord, array
} = require('../helpers');

module.exports = () => {
    addDef('MO5S', 
        subrecord('MO5S', array('Alternate Textures', 
            sortKey([0, 2], struct('Alternate Texture', [
                prefixLength(undefined, string('3D Name')),
                ckFormId('New Texture', ['TXST']),
                int32('3D Index')
            ]))
        , -1))
    );
};