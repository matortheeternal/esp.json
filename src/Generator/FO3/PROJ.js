let {
    req, def, flags, uint16, format, 
    enumeration, float, ckFormId, struct, subrecord, 
    string, bytes, size, conflictType, sortKey, 
    memberStruct, uint32, record
} = require('../helpers');

module.exports = () => {
    record('PROJ', 'Projectile', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            req(def('MODL')),
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
                    9: 'Pass Through Small Transparent'
                })),
                format(uint16('Type'), enumeration({
                    0: '',
                    1: 'Missile',
                    2: 'Lobber',
                    3: '',
                    4: 'Beam',
                    5: '',
                    6: '',
                    7: '',
                    8: 'Flame'
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
                ckFormId('Sound', ['SOUN', 'NULL']),
                float('Muzzle Flash - Duration'),
                float('Fade Duration'),
                float('Impact Force'),
                ckFormId('Sound - Countdown', ['SOUN', 'NULL']),
                ckFormId('Sound - Disable', ['SOUN', 'NULL']),
                ckFormId('Default Weapon Source', ['WEAP', 'NULL'])
            ]))),
            req(sortKey([0], memberStruct('Muzzle Flash Model', [
                subrecord('NAM1', string('Model FileName')),
                subrecord('NAM2', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
            ]))),
            req(subrecord('VNAM', format(uint32('Sound Level'), def('SoundLevelEnum'))))
        ]
    })
};