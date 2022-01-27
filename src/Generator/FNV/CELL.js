let {
    def, flags, uint8, format, subrecord, 
    req, int32, uint32, struct, bytes, 
    size, float, string, ckFormId, memberStruct, 
    sorted, array, conflictType, record
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
                3: 'No LOD Water',
                4: '',
                5: 'Public place',
                6: 'Hand changed',
                7: 'Behave like exterior'
            })))),
            subrecord('XCLC', struct('Grid', [
                int32('X'),
                int32('Y'),
                format(uint32('Force Hide Land'), flags({
                    0: 'Quad 1',
                    1: 'Quad 2',
                    2: 'Quad 3',
                    3: 'Quad 4'
                }))
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
                float('Fog Clip Dist'),
                float('Fog Power')
            ])),
            subrecord('IMPF', struct('Footstep Materials', [
                size(30, string('ConcSolid')),
                size(30, string('ConcBroken')),
                size(30, string('MetalSolid')),
                size(30, string('MetalHollow')),
                size(30, string('MetalSheet')),
                size(30, string('Wood')),
                size(30, string('Sand')),
                size(30, string('Dirt')),
                size(30, string('Grass')),
                size(30, string('Water'))
            ])),
            req(memberStruct('Light Template', [
                subrecord('LTMP', ckFormId('Template', ['LGTM', 'NULL'])),
                req(subrecord('LNAM', format(uint32('Inherit'), flags({
                    0: 'Ambient Color',
                    1: 'Directional Color',
                    2: 'Fog Color',
                    3: 'Fog Near',
                    4: 'Fog Far',
                    5: 'Directional Rotation',
                    6: 'Directional Fade',
                    7: 'Clip Distance',
                    8: 'Fog Power'
                }))))
            ])),
            subrecord('XCLW', float('Water Height')),
            subrecord('XNAM', string('Water Noise Texture')),
            subrecord('XCLR', sorted(array('Regions', 
                ckFormId('Region', ['REGN'])
            ))),
            subrecord('XCIM', ckFormId('Image Space', ['IMGS'])),
            subrecord('XCET', conflictType('Ignore', size(1, bytes('Unknown')))),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            subrecord('XCCM', ckFormId('Climate', ['CLMT'])),
            subrecord('XCWT', ckFormId('Water', ['WATR'])),
            memberStruct('Ownership', [
                def('XOWN'),
                subrecord('XRNK', int32('Faction rank'))
            ]),
            subrecord('XCAS', ckFormId('Acoustic Space', ['ASPC'])),
            subrecord('XCMT', conflictType('Ignore', size(1, bytes('Unused')))),
            subrecord('XCMO', ckFormId('Music Type', ['MUSC']))
        ]
    })
};