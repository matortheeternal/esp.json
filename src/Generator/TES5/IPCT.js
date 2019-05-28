let {
    def, float, uint32, uint8, bytes, 
    subrecord, struct, req, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('IPCT', 'Impact', {
        members: [
            def('EDID'),
            def('MODL'),
            req(subrecord('DATA', struct('', [
                float('Effect - Duration'),
                uint32('Effect - Orientation', {
                    "0": "Surface Normal",
                    "1": "Projectile Vector",
                    "2": "Projectile Reflection"
                }),
                float('Angle Threshold'),
                float('Placement Radius'),
                uint32('Sound Level', def('SoundLevelEnum')),
                uint8('Flags', {
                    "0": "No Decal Data"
                }),
                uint8('Impact Result', {
                    "0": "Default",
                    "1": "Destroy",
                    "2": "Bounce",
                    "3": "Impale",
                    "4": "Stick"
                }),
                bytes('Unknown', 2)
            ]))),
            def('DODT'),
            subrecord('DNAM', ckFormId('Texture Set', ['TXST'])),
            subrecord('ENAM', ckFormId('Secondary Texture Set', ['TXST'])),
            subrecord('SNAM', ckFormId('Sound 1', ['SNDR', 'SOUN', 'NULL'])),
            subrecord('NAM1', ckFormId('Sound 2', ['SNDR', 'SOUN', 'NULL'])),
            subrecord('NAM2', ckFormId('Hazard', ['HAZD', 'NULL']))
        ]
    })
};