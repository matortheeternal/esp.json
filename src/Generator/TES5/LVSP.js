let {
    def, subrecord, uint8, uint16, bytes, 
    ckFormId, sortKey, multiStruct, arrayOfSubrecord, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('LVSP', 'Leveled Spell', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('LVLD'),
            subrecord('LVLF', uint8('Flags', {
                "0": "Calculate from all levels <= player's level",
                "1": "Calculate for each item in count",
                "2": "Use All Spells"
            })),
            def('LLCT'),
            req(arrayOfSubrecord('Leveled List Entries', sortKey([0], multiStruct('Leveled List Entry', undefined))))
        ]
    })
};