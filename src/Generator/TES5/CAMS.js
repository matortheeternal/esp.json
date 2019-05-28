let {
    def, uint32, float, struct, subrecord, 
    req, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('CAMS', 'Camera Shot', {
        members: [
            def('EDID'),
            def('MODL'),
            req(subrecord('DATA', struct('Data', [
                uint32('Action', {
                    "0": "Shoot",
                    "1": "Fly",
                    "2": "Hit",
                    "3": "Zoom"
                }),
                uint32('Location', {
                    "0": "Attacker",
                    "1": "Projectile",
                    "2": "Target",
                    "3": "Lead Actor"
                }),
                uint32('Target', {
                    "0": "Attacker",
                    "1": "Projectile",
                    "2": "Target",
                    "3": "Lead Actor"
                }),
                uint32('Flags', {
                    "0": "Position Follows Location",
                    "1": "Rotation Follows Target",
                    "2": "Don't Follow Bone",
                    "3": "First Person Camera",
                    "4": "No Tracer",
                    "5": "Start At Time Zero"
                }),
                struct('Time Multipliers', [
                    float('Player'),
                    float('Target'),
                    float('Global')
                ]),
                float('Max Time'),
                float('Min Time'),
                float('Target % Between Actors'),
                float('Near Target Distance')
            ]))),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD']))
        ]
    })
};