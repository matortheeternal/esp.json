let {
    def, subrecord, uint8, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MSTT', 'Moveable Static', {
        flags: {
            "8": "Must Update Anims",
            "9": "Hidden From Local Map",
            "15": "Has Distant LOD",
            "16": "Random Anim Start",
            "19": "Has Currents",
            "25": "Obstacle",
            "26": "NavMesh Generation - Filter",
            "27": "NavMesh Generation - Bounding Box",
            "30": "NavMesh Generation - Ground"
        },
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            subrecord('DATA', uint8('Flags', {
                "0": "On Local Map",
                "1": "Unknown 1",
                "2": "Unknown 2"
            })),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR']))
        ]
    })
};