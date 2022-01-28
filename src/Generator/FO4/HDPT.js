let {
    flags, def, uint8, format, subrecord, 
    req, enumeration, uint32, ckFormId, sorted, 
    memberArray, string, conflictType, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('HDPT', 'Head Part', {
        flags: flags({
            2: 'Non-Playable',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Playable',
                1: 'Male',
                2: 'Female',
                3: 'Is Extra Part',
                4: 'Use Solid Tint',
                5: 'Uses Body Texture'
            })))),
            subrecord('PNAM', format(uint32('Type'), enumeration({
                0: 'Misc',
                1: 'Face',
                2: 'Eyes',
                3: 'Hair',
                4: 'Facial Hair',
                5: 'Scar',
                6: 'Eyebrows',
                7: 'Meatcaps',
                8: 'Teeth',
                9: 'Head Rear'
            }))),
            sorted(memberArray('Extra Parts', 
                subrecord('HNAM', ckFormId('Part', ['HDPT']))
            )),
            memberArray('Parts', 
                memberStruct('Part', [
                    subrecord('NAM0', format(uint32('Part Type'), enumeration({
                        0: 'Race Morph',
                        1: 'Tri',
                        2: 'Chargen Morph'
                    }))),
                    req(subrecord('NAM1', conflictType('Translate', string('FileName'))))
                ])
            ),
            subrecord('TNAM', ckFormId('Texture Set', ['TXST'])),
            subrecord('CNAM', ckFormId('Color', ['CLFM'])),
            subrecord('RNAM', ckFormId('Valid Races', ['FLST'])),
            def('CTDAs')
        ]
    })
};