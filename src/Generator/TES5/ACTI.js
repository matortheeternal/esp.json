let {
    def, uint8, subrecord, struct, ckFormId, 
    lstring, uint16, record
} = require('../helpers');

module.exports = () => {
    record('ACTI', 'Activator', {
        flags: {
            "6": "Has Tree LOD",
            "8": "Must Update Anims",
            "9": "Hidden From Local Map",
            "15": "Has Distant LOD",
            "16": "Random Anim Start",
            "17": "Dangerous",
            "20": "Ignore Object Interaction",
            "23": "Is Marker",
            "25": "Obstacle",
            "26": "NavMesh Generation - Filter",
            "27": "NavMesh Generation - Bounding Box",
            "29": "Child Can Use",
            "30": "NavMesh Generation - Ground"
        },
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('PNAM', struct('Marker Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                uint8('Unused')
            ])),
            subrecord('SNAM', ckFormId('Sound - Looping', ['SNDR'])),
            subrecord('VNAM', ckFormId('Sound - Activation', ['SNDR'])),
            subrecord('WNAM', ckFormId('Water Type', ['WATR'])),
            subrecord('RNAM', lstring(Activate Text Override)),
            subrecord('FNAM', uint16('Flags', {
                "0": "No Displacement",
                "1": "Ignored by Sandbox"
            })),
            subrecord('KNAM', ckFormId('Interaction Keyword', ['KYWD']))
        ]
    })
};