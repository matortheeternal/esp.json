let {
    subrecord, uint32, uint8, struct, array, 
    float, bytes, ckFormId, def, int16, 
    sortKey, uint16, subrecordUnion, arrayOfSubrecord, unknown, 
    record
} = require('../helpers');

module.exports = () => {
    record('LAND', 'Landscape', {
        flags: {
            "18": "Compressed"
        },
        members: [
            subrecord('DATA', uint32('Flags', {
                "0": "Vertex Normals / Height Map",
                "1": "Vertex Colours",
                "2": "Layers",
                "3": "Unknown 4",
                "4": "Unknown 5",
                "5": "",
                "6": "",
                "7": "",
                "8": "",
                "9": "",
                "10": "MPCD"
            })),
            subrecord('VNML', array('Vertex Normals', struct('Row', [
                array('Columns', struct('Column', [
                    uint8('X'),
                    uint8('Y'),
                    uint8('Z')
                ]), 33)
            ]), 33)),
            subrecord('VHGT', struct('Vertext Height Map', [
                float('Offset'),
                array('Rows', struct('Row', [
                    array('Columns', uint8('Column'), 33)
                ]), 33),
                bytes('Unused', 3)
            ])),
            subrecord('VCLR', array('Vertex Colours', struct('Row', [
                array('Columns', struct('Column', [
                    uint8('X'),
                    uint8('Y'),
                    uint8('Z')
                ]), 33)
            ]), 33)),
            arrayOfSubrecord('Layers', subrecordUnion('Layer', [
                sortKey([0], multiStruct('Base Layer', undefined)),
                sortKey([0], multiStruct('Alpha Layer', undefined))
            ])),
            subrecord('VTEX', array('Textures', ckFormId('Texture', ['LTEX', 'NULL']), undefined)),
            arrayOfSubrecord('Unknown', undefined)
        ]
    })
};