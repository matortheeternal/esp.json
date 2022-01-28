let {
    flags, def, ckFormId, subrecord, uint8, 
    format, bytes, size, float, struct, 
    req, string, conflictType, memberStruct, sorted, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('ARMA', 'Armor Addon', {
        flags: flags({
            6: 'No Underarmor Scaling',
            9: 'Unknown 9',
            12: 'Ignored',
            30: 'Hi-Res 1st Person Only'
        }),
        members: [
            def('EDID'),
            def('BOD2'),
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
            memberStruct('Male world model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO2C'),
                def('MO2S'),
                def('MO2F')
            ]),
            memberStruct('Female world model', [
                subrecord('MOD3', string('Model FileName')),
                subrecord('MO3T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO3C'),
                def('MO3S'),
                def('MO3F')
            ]),
            memberStruct('Male 1st Person', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO4C'),
                def('MO4S'),
                def('MO4F')
            ]),
            memberStruct('Female 1st Person', [
                subrecord('MOD5', string('Model FileName')),
                subrecord('MO5T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO5C'),
                def('MO5S'),
                def('MO5F')
            ]),
            subrecord('NAM0', ckFormId('Male Skin Texture', ['TXST', 'NULL'])),
            subrecord('NAM1', ckFormId('Female Skin Texture', ['TXST', 'NULL'])),
            subrecord('NAM2', ckFormId('Male Skin Texture Swap List', ['FLST', 'NULL'])),
            subrecord('NAM3', ckFormId('Female Skin Texture Swap List', ['FLST', 'NULL'])),
            sorted(memberArray('Additional Races', 
                subrecord('MODL', ckFormId('Race', ['RACE', 'NULL']))
            )),
            subrecord('SNDD', ckFormId('Footstep Sound', ['FSTS', 'NULL'])),
            subrecord('ONAM', ckFormId('Art Object', ['ARTO'])),
            def('BSMPSequence')
        ]
    })
};