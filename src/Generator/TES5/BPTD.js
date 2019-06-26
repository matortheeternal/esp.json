let {
    def, subrecord, localized, string, req, 
    float, flags, uint8, format, enumeration, 
    int8, uint16, ckFormId, int32, struct, 
    bytes, size, memberArray, sortKey, memberStruct, 
    record
} = require('../helpers');

module.exports = () => {
    record('BPTD', 'Body Part Data', {
        members: [
            def('EDID'),
            def('MODL'),
            req(memberArray('Body Parts', 
                sortKey([2], memberStruct('Body Part', [
                    req(subrecord('BPTN', localized(string('Part Name')))),
                    req(subrecord('PNAM', string('Pose Matching'))),
                    req(subrecord('BPNN', string('Part Node'))),
                    req(subrecord('BPNT', string('VATS Target'))),
                    req(subrecord('BPNI', string('IK Data - Start Node'))),
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
                            1: 'Head',
                            2: 'Eye',
                            3: 'LookAt',
                            4: 'Fly Grab',
                            5: 'Saddle'
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
                                req(req(float('X'))),
                                req(req(float('Y'))),
                                req(req(float('Z')))
                            ])
                        ]),
                        ckFormId('Severable - Impact DataSet', ['IPDS', 'NULL']),
                        ckFormId('Explodable - Impact DataSet', ['IPDS', 'NULL']),
                        uint8('Severable - Decal Count'),
                        uint8('Explodable - Decal Count'),
                        size(2, bytes('Unknown')),
                        float('Limb Replacement Scale')
                    ]))),
                    req(subrecord('NAM1', string('Limb Replacement Model'))),
                    req(subrecord('NAM4', string('Gore Effects - Target Bone'))),
                    subrecord('NAM5', bytes('Texture Files Hashes'))
                ]))
            ))
        ]
    })
};