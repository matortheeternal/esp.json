let {
    def, float, uint32, format, uint8, 
    bytes, size, subrecord, struct, req, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('IPCT', 'Impact', {
        members: [
            def('EDID'),
            def('MODL'),
            req(subrecord('DATA', struct('', [
                float('Effect - Duration'),
                format(uint32('Effect - Orientation'), {
                    0: 'Surface Normal',
                    1: 'Projectile Vector',
                    2: 'Projectile Reflection'
                }),
                float('Angle Threshold'),
                float('Placement Radius'),
                format(uint32('Sound Level'), def('SoundLevelEnum')),
                format(uint8('Flags'), {
                    0: 'No Decal Data'
                }),
                format(uint8('Impact Result'), {
                    0: 'Default',
                    1: 'Destroy',
                    2: 'Bounce',
                    3: 'Impale',
                    4: 'Stick'
                }),
                size(2, bytes('Unknown'))
            ]))),
            def('DODT'),
            subrecord('DNAM', ckFormId('Texture Set', ['TXST'])),
            subrecord('ENAM', ckFormId('Secondary Texture Set', ['TXST'])),
            subrecord('SNAM', ckFormId('Sound 1', [
                'SNDR',    'SOUN',    'NULL'
            ])),
            subrecord('NAM1', ckFormId('Sound 2', [
                'SNDR',    'SOUN',    'NULL'
            ])),
            subrecord('NAM2', ckFormId('Hazard', ['HAZD', 'NULL']))
        ]
    })
};