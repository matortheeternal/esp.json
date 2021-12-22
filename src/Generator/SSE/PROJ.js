let {
    def, req, flags, uint16, format, 
    enumeration, float, ckFormId, struct, subrecord, 
    string, bytes, size, conflict, sortKey, 
    memberStruct, uint32, record
} = require('../helpers');

module.exports = () => {
    record('PROJ', 'Projectile', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            req(subrecord('DATA', struct('Data', [
                format(uint16('Flags'), flags({
                    0: 'Hitscan',
                    1: 'Explosion',
                    2: 'Alt. Trigger',
                    3: 'Muzzle Flash',
                    4: '',
                    5: 'Can Be Disabled',
                    6: 'Can Be Picked Up',
                    7: 'Supersonic',
                    8: 'Pins Limbs',
                    9: 'Pass Through Small Transparent',
                    10: 'Disable Combat Aim Correction',
                    11: 'Rotation'
                })),
                format(uint16('Type'), enumeration({
                    1: 'Missile',
                    2: 'Lobber',
                    4: 'Beam',
                    8: 'Flame',
                    16: 'Cone',
                    32: 'Barrier',
                    64: 'Arrow'
                })),
                float('Gravity'),
                float('Speed'),
                float('Range'),
                ckFormId('Light', ['LIGH', 'NULL']),
                ckFormId('Muzzle Flash - Light', ['LIGH', 'NULL']),
                float('Tracer Chance'),
                float('Explosion - Alt. Trigger - Proximity'),
                float('Explosion - Alt. Trigger - Timer'),
                ckFormId('Explosion', ['EXPL', 'NULL']),
                ckFormId('Sound', ['SNDR', 'NULL']),
                float('Muzzle Flash - Duration'),
                float('Fade Duration'),
                float('Impact Force'),
                ckFormId('Sound - Countdown', ['SNDR', 'NULL']),
                ckFormId('Sound - Disable', ['SNDR', 'NULL']),
                ckFormId('Default Weapon Source', ['WEAP', 'NULL']),
                float('Cone Spread'),
                float('Collision Radius'),
                float('Lifetime'),
                float('Relaunch Interval'),
                ckFormId('Decal Data', ['TXST', 'NULL']),
                ckFormId('Collision Layer', ['COLL', 'NULL'])
            ]))),
            req(sortKey([0], memberStruct('Muzzle Flash Model', [
                subrecord('NAM1', string('Model FileName')),
                subrecord('NAM2', conflict('Ignore', size(0, bytes('Texture Files Hashes'))))
            ]))),
            req(subrecord('VNAM', format(uint32('Sound Level'), def('SoundLevelEnum'))))
        ]
    })
};