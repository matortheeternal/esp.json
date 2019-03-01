let {
    addDef, record, def, subrecord, ckFormId, 
    struct, uint8, flags8, bytes, float, 
    req, multiStruct, zstring, arrayOfSubrecord
} = require('../helpers');

module.exports = game => {
    addDef('ARMA', record('ARMA', 'Armor Addon', {
        elements: [
            def('EDID'),
            def('BODTBOD2'),
            subrecord('RNAM', ckFormId('Race', ['RACE'])),
            req(subrecord('DNAM', struct('Data', [
                uint8('Male Priority'),
                uint8('Female Priority'),
                flags8('Weight slider - Male', [
                    'Unknown 0',                            // 0x01
                    'Enabled',                              // 0x02
                ]),
                flags8('Weight slider - Female', [
                    'Unknown 0',                            // 0x01
                    'Enabled',                              // 0x02
                ]),
                bytes('Unknown', 2),
                uint8('Detection Sound Value'),
                bytes('Unknown', 1),
                float('Weapon Adjust'),
            ]))),
            multiStruct('Male world model', [
                subrecord('MOD2', zstring('Model Filename')),
                subrecord('MO2T', bytes('Texture Files Hashes')),
                def('MO2S'),
            ]),
            multiStruct('Female world model', [
                subrecord('MOD3', zstring('Model Filename')),
                subrecord('MO3T', bytes('Texture Files Hashes')),
                def('MO3S'),
            ]),
            multiStruct('Male 1st Person', [
                subrecord('MOD4', zstring('Model Filename')),
                subrecord('MO4T', bytes('Texture Files Hashes')),
                def('MO4S'),
            ]),
            multiStruct('Female 1st Person', [
                subrecord('MOD5', zstring('Model Filename')),
                subrecord('MO5T', bytes('Texture Files Hashes')),
                def('MO5S'),
            ]),
            subrecord('NAM0', ckFormId('Male Skin Texture', ['TXST', 'NULL'])),
            subrecord('NAM1', ckFormId('Female Skin texture', ['TXST', 'NULL'])),
            subrecord('NAM2', ckFormId('Male Skin Texture Swap List', ['FLST', 'NULL'])),
            subrecord('NAM3', ckFormId('Female Skin Texture Swap List', ['FLST', 'NULL'])),
            arrayOfSubrecord('Additional Races', 
                subrecord('MODL', ckFormId('Race', ['RACE', 'NULL'])),
            ),
            subrecord('SNDD', ckFormId('Footstep Sound', ['FSTS', 'NULL'])),
            subrecord('ONAM', ckFormId('Art Object', ['ARTO'])),
        ]
    }));
};