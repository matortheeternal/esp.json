let {
    req, def, enumeration, uint32, format, 
    flags, float, struct, subrecord, ckFormId, 
    record
} = require('../helpers');

module.exports = () => {
    record('CAMS', 'Camera Shot', {
        members: [
            req(def('EDID')),
            def('MODL'),
            req(subrecord('DATA', struct('Data', [
                format(uint32('Action'), enumeration({
                    0: 'Shoot',
                    1: 'Fly',
                    2: 'Hit',
                    3: 'Zoom'
                })),
                format(uint32('Location'), enumeration({
                    0: 'Attacker',
                    1: 'Projectile',
                    2: 'Target'
                })),
                format(uint32('Target'), enumeration({
                    0: 'Attacker',
                    1: 'Projectile',
                    2: 'Target'
                })),
                format(uint32('Flags'), flags({
                    0: 'Position Follows Location',
                    1: 'Rotation Follows Target',
                    2: 'Don\'t Follow Bone',
                    3: 'First Person Camera',
                    4: 'No Tracer',
                    5: 'Start At Time Zero'
                })),
                struct('Time Multipliers', [
                    float('Player'),
                    float('Target'),
                    float('Global')
                ]),
                float('Max Time'),
                float('Min Time'),
                float('Target % Between Actors')
            ]))),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD']))
        ]
    })
};