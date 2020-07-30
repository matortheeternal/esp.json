let {
    def, subrecord, ckFormId, uint8, flags, 
    format, bytes, size, float, struct, 
    req, string, memberStruct, sorted, memberArray, 
    record
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
                format(uint8('Weight slider - Male'), flags({
                    0: 'Unknown 0',
                    1: 'Enabled'
                })),
                format(uint8('Weight slider - Female'), flags({
                    0: 'Unknown 0',
                    1: 'Enabled'
                })),
                size(2, bytes('Unknown')),
                uint8('Detection Sound Value'),
                size(1, bytes('Unknown')),
                float('Weapon Adjust')
            ]))),
            req(memberStruct('Male world model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2T', size(0, bytes('Texture Files Hashes'))),
                def('MO2S')
            ])),
            memberStruct('Female world model', [
                subrecord('MOD3', string('Model FileName')),
                subrecord('MO3T', size(0, bytes('Texture Files Hashes'))),
                def('MO3S')
            ]),
            memberStruct('Male 1st Person', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4T', size(0, bytes('Texture Files Hashes'))),
                def('MO4S')
            ]),
            memberStruct('Female 1st Person', [
                subrecord('MOD5', string('Model FileName')),
                subrecord('MO5T', size(0, bytes('Texture Files Hashes'))),
                def('MO5S')
            ]),
            subrecord('NAM0', ckFormId('Male Skin Texture', ['TXST', 'NULL'])),
            subrecord('NAM1', ckFormId('Female Skin texture', ['TXST', 'NULL'])),
            subrecord('NAM2', ckFormId('Male Skin Texture Swap List', ['FLST', 'NULL'])),
            subrecord('NAM3', ckFormId('Female Skin Texture Swap List', ['FLST', 'NULL'])),
            sorted(memberArray('Additional Races', 
                subrecord('MODL', ckFormId('Race', ['RACE', 'NULL']))
            )),
            subrecord('SNDD', ckFormId('Footstep Sound', ['FSTS', 'NULL'])),
            subrecord('ONAM', ckFormId('Art Object', ['ARTO']))
        ]
    })
};