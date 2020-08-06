let {
    addDef, string, ckFormId, int32, sortKey, 
    struct, sorted, array, prefix, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO5S', 
        subrecord('MO5S', prefix(4, sorted(array('Alternate Textures', 
            sortKey([0, 2], struct('Alternate Texture', [
                string('3D Name'),
                ckFormId('New Texture', ['TXST']),
                int32('3D Index')
            ]))
        ))))
    );
};