let {
    flags, def, subrecord, uint16, format, 
    int32, uint32, struct, req, float, 
    ckFormId, bytes, string, sorted, array, 
    size, record
} = require('../helpers');

module.exports = () => {
    record('CELL', 'Cell', {
        flags: flags({
            10: 'Persistent',
            12: 'Ignored',
            17: 'Off Limits',
            18: 'Compressed',
            19: 'Can\'t Wait'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            subrecord('DATA', format(uint16('Flags'), flags({
                0: 'Is Interior Cell',
                1: 'Has Water',
                2: 'Can\'t Travel From Here',
                3: 'No LOD Water',
                4: 'Unknown 5',
                5: 'Public Area',
                6: 'Hand Changed',
                7: 'Show Sky',
                8: 'Use Sky Lighting'
            }))),
            req(subrecord('XCLC', struct('Grid', [
                int32('X'),
                int32('Y'),
                format(uint32('Force Hide Land'), flags({
                    0: 'Quad 1',
                    1: 'Quad 2',
                    2: 'Quad 3',
                    3: 'Quad 4'
                }))
            ]))),
            req(subrecord('XCLL', struct('Lighting', [
                def('ByteColors', { name: 'Ambient Color' }),
                def('ByteColors', { name: 'Directional Color' }),
                def('ByteColors', { name: 'Fog Color Near' }),
                float('Fog Near'),
                float('Fog Far'),
                int32('Directional Rotation XY'),
                int32('Directional Rotation Z'),
                float('Directional Fade'),
                float('Fog Clip Distance'),
                float('Fog Power'),
                def('AmbientColors', { name: 'Ambient Colors' }),
                def('ByteColors', { name: 'Fog Color Far' }),
                float('Fog Max'),
                float('Light Fade Begin'),
                float('Light Fade End'),
                format(uint32('Inherits'), flags({
                    0: 'Ambient Color',
                    1: 'Directional Color',
                    2: 'Fog Color',
                    3: 'Fog Near',
                    4: 'Fog Far',
                    5: 'Directional Rotation',
                    6: 'Directional Fade',
                    7: 'Clip Distance',
                    8: 'Fog Power',
                    9: 'Fog Max',
                    10: 'Light Fade Distances'
                }))
            ]))),
            def('TVDT'),
            def('MaxHeightDataCELL'),
            req(subrecord('LTMP', ckFormId('Lighting Template', ['LGTM', 'NULL']))),
            subrecord('LNAM', bytes('Unknown')),
            req(subrecord('XCLW', req(float('Water Height')))),
            subrecord('XNAM', string('Water Noise Texture')),
            subrecord('XCLR', sorted(array('Regions', 
                ckFormId('Region', ['REGN'])
            ))),
            subrecord('XLCN', ckFormId('Location', ['LCTN'])),
            subrecord('XWCN', bytes('Unknown')),
            subrecord('XWCS', bytes('Unknown')),
            subrecord('XWCU', struct('Water Velocity', [
                float('X Offset'),
                float('Y Offset'),
                float('Z Offset'),
                size(4, bytes('Unknown')),
                float('X Angle'),
                float('Y Angle'),
                float('Z Angle'),
                bytes('Unknown')
            ])),
            subrecord('XCWT', ckFormId('Water', ['WATR'])),
            def('Ownership'),
            subrecord('XILL', ckFormId('Lock List', ['FLST', 'NPC_'])),
            subrecord('XWEM', string('Water Environment Map')),
            subrecord('XCCM', ckFormId('Sky/Weather from Region', ['REGN'])),
            subrecord('XCAS', ckFormId('Acoustic Space', ['ASPC'])),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            subrecord('XCMO', ckFormId('Music Type', ['MUSC'])),
            subrecord('XCIM', ckFormId('Image Space', ['IMGS']))
        ]
    })
};