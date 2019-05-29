let {
    addDef, string, ckFormId, int32, sortKey, 
    struct, subrecord, array
} = require('../helpers');

module.exports = () => {
    addDef('MO3S', 
        subrecord('MO3S', array('Alternate Textures', 
            sortKey([0, 2], struct('Alternate Texture', [
                string('3D Name'),
                ckFormId('New Texture', ['TXST']),
                int32('3D Index')
            ]))
        , -1))
    );
};