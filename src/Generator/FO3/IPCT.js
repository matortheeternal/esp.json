let {
    req, def, float, enumeration, uint32, 
    format, flags, struct, subrecord, ckFormId, 
    record
} = require('../helpers');

module.exports = () => {
    record('IPCT', 'Impact', {
        members: [
            req(def('EDID')),
            def('MODL'),
            req(subrecord('DATA', struct('', [
                float('Effect - Duration'),
                format(uint32('Effect - Orientation'), enumeration({
                    0: 'Surface Normal',
                    1: 'Projectile Vector',
                    2: 'Projectile Reflection'
                })),
                float('Angle Threshold'),
                float('Placement Radius'),
                format(uint32('Sound Level'), def('SoundLevelEnum')),
                format(uint32('Flags'), flags({
                    0: 'No Decal Data'
                }))
            ]))),
            def('DODT'),
            subrecord('DNAM', ckFormId('Texture Set', ['TXST'])),
            subrecord('SNAM', ckFormId('Sound 1', ['SOUN'])),
            subrecord('NAM1', ckFormId('Sound 2', ['SOUN']))
        ]
    })
};