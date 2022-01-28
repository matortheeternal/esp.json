let {
    def, flags, uint8, format, subrecord, 
    req, int32, struct, bytes, size, 
    float, ckFormId, sorted, array, conflictType, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('CELL', 'Cell', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Is Interior Cell',
                1: 'Has water',
                2: 'Invert Fast Travel behavior',
                3: 'Force hide land (exterior cell) / Oblivion interior (interior cell)',
                4: '',
                5: 'Public place',
                6: 'Hand changed',
                7: 'Behave like exterior'
            })))),
            subrecord('XCLC', struct('Grid', [
                int32('X'),
                int32('Y')
            ])),
            subrecord('XCLL', struct('Lighting', [
                struct('Ambient Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Directional Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Fog Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                float('Fog Near'),
                float('Fog Far'),
                int32('Directional Rotation XY'),
                int32('Directional Rotation Z'),
                float('Directional Fade'),
                float('Fog Clip Dist')
            ])),
            subrecord('XCLR', sorted(array('Regions', 
                ckFormId('Region', ['REGN'])
            ))),
            subrecord('XCMT', format(uint8('Music'), def('MusicEnum'))),
            subrecord('XCLW', conflictType('Benign', float('Water Height'))),
            subrecord('XCCM', ckFormId('Climate', ['CLMT'])),
            subrecord('XCWT', ckFormId('Water', ['WATR'])),
            memberStruct('Ownership', [
                def('XOWN'),
                subrecord('XRNK', int32('Faction rank')),
                def('XGLB')
            ])
        ]
    })
};