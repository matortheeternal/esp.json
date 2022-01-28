let {
    addDef, ckFormId, def, uint32, format, 
    mgefCode, size, flags, uint8, bytes, 
    sortKey, struct, subrecord, req, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('SCITOBME', 
        sortKey([0], memberStruct('Script effect', [
            req(subrecord('SCIT', sortKey([0], struct('Script effect data', [
                ckFormId('Script effect', ['NULL', 'SCPT']),
                format(uint32('Magic school'), def('MagicSchoolEnum')),
                size(4, mgefCode('Visual Effect Code')),
                format(uint8('Flags'), flags({
                    0: 'Hostile'
                })),
                size(3, bytes('Unused'))
            ])))),
            req(def('FULL'))
        ]))
    );
};