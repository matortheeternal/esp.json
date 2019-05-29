let {
    def, subrecord, uint8, format, uint32, 
    ckFormId, arrayOfSubrecord, cstring, req, arrayOfStruct, 
    multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('HDPT', 'Head Part', {
        flags: {
            2: 'Non-Playable'
        },
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            subrecord('DATA', format(uint8('Flags'), {
                0: 'Playable',
                1: 'Male',
                2: 'Female',
                3: 'Is Extra Part',
                4: 'Use Solid Tint'
            })),
            subrecord('PNAM', format(uint32('Type'), {
                0: 'Misc',
                1: 'Face',
                2: 'Eyes',
                3: 'Hair',
                4: 'Facial Hair',
                5: 'Scar',
                6: 'Eyebrows'
            })),
            arrayOfSubrecord('Extra Parts', 
                subrecord('HNAM', ckFormId('Part', ['HDPT']))
            ),
            arrayOfStruct('Parts', 
                multiStruct('Part', [
                    subrecord('NAM0', format(uint32('Part Type'), {
                        0: 'Race Morph',
                        1: 'Tri',
                        2: 'Chargen Morph'
                    })),
                    req(subrecord('NAM1', cstring('FileName')))
                ])
            ),
            subrecord('TNAM', ckFormId('Texture Set', ['TXST', 'NULL'])),
            subrecord('CNAM', ckFormId('Color', ['CLFM', 'NULL'])),
            subrecord('RNAM', ckFormId('Valid Races', ['FLST', 'NULL']))
        ]
    })
};