let {
    def, enumeration, uint32, format, flags, 
    float, struct, subrecord, req, ckFormId, 
    record
} = require('../helpers');

module.exports = () => {
    record('CAMS', 'Camera Shot', {
        members: [
            def('EDID'),
            def('MODL'),
            def('CTDAs'),
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
                    2: 'Target',
                    3: 'Lead Actor'
                })),
                format(uint32('Target'), enumeration({
                    0: 'Attacker',
                    1: 'Projectile',
                    2: 'Target',
                    3: 'Lead Actor'
                })),
                format(uint32('Flags'), flags({
                    0: 'Position Follows Location',
                    1: 'Rotation Follows Target',
                    2: 'Don\'t Follow Bone',
                    3: 'First Person Camera',
                    4: 'No Tracer',
                    5: 'Start At Time Zero',
                    6: 'Don\'t Reset Location Spring',
                    7: 'Don\'t Reset Target Spring'
                })),
                struct('Time Multipliers', [
                    float('Player'),
                    float('Target'),
                    float('Global')
                ]),
                float('Max Time'),
                float('Min Time'),
                float('Target % Between Actors'),
                float('Near Target Distance'),
                float('Location Spring'),
                float('Target Spring'),
                struct('Rotation Offset', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            ]))),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD']))
        ]
    })
};