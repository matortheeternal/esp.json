let {
    def, subrecord, uint8, ckFormId, int16, 
    bytes, sortKey, multiStruct, arrayOfSubrecord, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('LVLN', 'Leveled NPC', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('LVLD'),
            subrecord('LVLF', uint8('Flags', {
                "0": "Calculate from all levels <= player's level",
                "1": "Calculate for each item in count"
            })),
            subrecord('LVLG', ckFormId('Global', ['GLOB'])),
            def('LLCT'),
            req(arrayOfSubrecord('Leveled List Entries', sortKey([0], multiStruct('Leveled List Entry', [
                subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                    int16('Level'),
                    bytes('Unknown', 2),
                    ckFormId('Reference', ['NPC_', 'LVLN']),
                    int16('Count'),
                    bytes('Unknown', 2)
                ]))),
                def('COED')
            ])))),
            def('MODL')
        ]
    })
};