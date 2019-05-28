let {
    def, subrecord, ckFormId, uint8, format, 
    bytes, float, struct, req, cstring, 
    multiStruct, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('ARMA', 'Armor Addon', {
        members: [
            def('EDID'),
            def('BODTBOD2'),
            subrecord('RNAM', ckFormId('Race', ['RACE'])),
            req(subrecord('DNAM', struct('Data', [
                uint8('Male Priority'),
                uint8('Female Priority'),
                format(uint8('Weight slider - Male'), {
                    "0": "Unknown 0",
                    "1": "Enabled"
                }),
                format(uint8('Weight slider - Female'), {
                    "0": "Unknown 0",
                    "1": "Enabled"
                }),
                bytes('Unknown', 2),
                uint8('Detection Sound Value'),
                bytes('Unknown', 1),
                float('Weapon Adjust')
            ]))),
            req(multiStruct('Male world model', [
                subrecord('MOD2', cstring('Model FileName')),
                subrecord('MO2T', bytes('Texture Files Hashes', 0)),
                def('MO2S')
            ])),
            multiStruct('Female world model', [
                subrecord('MOD3', cstring('Model FileName')),
                subrecord('MO3T', bytes('Texture Files Hashes', 0)),
                def('MO3S')
            ]),
            multiStruct('Male 1st Person', [
                subrecord('MOD4', cstring('Model FileName')),
                subrecord('MO4T', bytes('Texture Files Hashes', 0)),
                def('MO4S')
            ]),
            multiStruct('Female 1st Person', [
                subrecord('MOD5', cstring('Model FileName')),
                subrecord('MO5T', bytes('Texture Files Hashes', 0)),
                def('MO5S')
            ]),
            subrecord('NAM0', ckFormId('Male Skin Texture', ['TXST', 'NULL'])),
            subrecord('NAM1', ckFormId('Female Skin texture', ['TXST', 'NULL'])),
            subrecord('NAM2', ckFormId('Male Skin Texture Swap List', ['FLST', 'NULL'])),
            subrecord('NAM3', ckFormId('Female Skin Texture Swap List', ['FLST', 'NULL'])),
            arrayOfSubrecord('Additional Races', subrecord('MODL', ckFormId('Race', ['RACE', 'NULL']))),
            subrecord('SNDD', ckFormId('Footstep Sound', ['FSTS', 'NULL'])),
            subrecord('ONAM', ckFormId('Art Object', ['ARTO']))
        ]
    })
};