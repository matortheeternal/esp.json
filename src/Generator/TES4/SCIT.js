let {
    addDef, ckFormId, def, uint32, format, 
    flags, uint8, bytes, size, sortKey, 
    struct, subrecord, req, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('SCIT', 
        sortKey([0], memberStruct('Script effect', [
            req(subrecord('SCIT', sortKey([0], struct('Script effect data', [
                ckFormId('Script effect', ['NULL', 'SCPT']),
                format(uint32('Magic school'), def('MagicSchoolEnum')),
                format(uint32('Visual effect name'), def('Char4')),
                format(uint8('Flags'), flags({
                    0: 'Hostile'
                })),
                size(3, bytes('Unused'))
            ])))),
            req(def('FULL'))
        ]))
    );
};