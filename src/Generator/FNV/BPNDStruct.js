let {
    addDef, float, flags, uint8, format, 
    enumeration, def, int8, uint16, ckFormId, 
    int32, struct, req, bytes, size, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('BPNDStruct', 
        req(subrecord('BPND', struct('', [
            float('Damage Mult'),
            format(uint8('Flags'), flags({
                0: 'Severable',
                1: 'IK Data',
                2: 'IK Data - Biped Data',
                3: 'Explodable',
                4: 'IK Data - Is Head',
                5: 'IK Data - Headtracking',
                6: 'To Hit Chance - Absolute'
            })),
            format(uint8('Part Type'), enumeration({
                0: 'Torso',
                1: 'Head 1',
                2: 'Head 2',
                3: 'Left Arm 1',
                4: 'Left Arm 2',
                5: 'Right Arm 1',
                6: 'Right Arm 2',
                7: 'Left Leg 1',
                8: 'Left Leg 2',
                9: 'Left Leg 3',
                10: 'Right Leg 1',
                11: 'Right Leg 2',
                12: 'Right Leg 3',
                13: 'Brain',
                14: 'Weapon'
            })),
            uint8('Health Percent'),
            format(int8('Actor Value'), def('ActorValueEnum')),
            uint8('To Hit Chance'),
            uint8('Explodable - Explosion Chance %'),
            uint16('Explodable - Debris Count'),
            ckFormId('Explodable - Debris', ['DEBR', 'NULL']),
            ckFormId('Explodable - Explosion', ['EXPL', 'NULL']),
            float('Tracking Max Angle'),
            float('Explodable - Debris Scale'),
            int32('Severable - Debris Count'),
            ckFormId('Severable - Debris', ['DEBR', 'NULL']),
            ckFormId('Severable - Explosion', ['EXPL', 'NULL']),
            float('Severable - Debris Scale'),
            struct('Gore Effects Positioning', [
                struct('Translate', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ]),
                struct('Rotation', [
                    req(format(float('X'), def('RotationFactor'))),
                    req(format(float('Y'), def('RotationFactor'))),
                    req(format(float('Z'), def('RotationFactor')))
                ])
            ]),
            ckFormId('Severable - Impact DataSet', ['IPDS', 'NULL']),
            ckFormId('Explodable - Impact DataSet', ['IPDS', 'NULL']),
            uint8('Severable - Decal Count'),
            uint8('Explodable - Decal Count'),
            size(2, bytes('Unused')),
            float('Limb Replacement Scale')
        ])))
    );
};