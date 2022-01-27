let {
    req, def, uint32, subrecord, bytes, 
    size, enumeration, uint8, format, struct, 
    ckFormId, float, div, int32, uint16, 
    array, count, flags, string, record
} = require('../helpers');

module.exports = () => {
    record('RGDL', 'Ragdoll', {
        members: [
            req(def('EDID')),
            req(subrecord('NVER', uint32('Version'))),
            req(subrecord('DATA', struct('General Data', [
                uint32('Dynamic Bone Count'),
                size(4, bytes('Unused')),
                struct('Enabled', [
                    format(uint8('Feedback'), enumeration({
                        0: 'No',
                        1: 'Yes'
                    })),
                    format(uint8('Foot IK (broken, don\'t use)'), enumeration({
                        0: 'No',
                        1: 'Yes'
                    })),
                    format(uint8('Look IK (broken, don\'t use)'), enumeration({
                        0: 'No',
                        1: 'Yes'
                    })),
                    format(uint8('Grab IK (broken, don\'t use)'), enumeration({
                        0: 'No',
                        1: 'Yes'
                    })),
                    format(uint8('Pose Matching'), enumeration({
                        0: 'No',
                        1: 'Yes'
                    }))
                ]),
                size(1, bytes('Unused'))
            ]))),
            req(subrecord('XNAM', ckFormId('Actor Base', ['CREA', 'NPC_']))),
            req(subrecord('TNAM', ckFormId('Body Part Data', ['BPTD']))),
            subrecord('RAFD', struct('Feedback Data', [
                float('Dynamic/Keyframe Blend Amount'),
                float('Hierarchy Gain'),
                float('Position Gain'),
                float('Velocity Gain'),
                float('Acceleration Gain'),
                float('Snap Gain'),
                float('Velocity Damping'),
                struct('Snap Max Settings', [
                    float('Linear Velocity'),
                    float('Angular Velocity'),
                    float('Linear Distance'),
                    float('Angular Distance')
                ]),
                struct('Position Max Velocity', [
                    float('Linear'),
                    float('Angular')
                ]),
                struct('Position Max Velocity', [
                    format(int32('Projectile'), div(1000)),
                    format(int32('Melee'), div(1000))
                ])
            ])),
            subrecord('RAFB', array('Feedback Dynamic Bones', 
                uint16('Bone')
            )),
            req(subrecord('RAPS', struct('Pose Matching Data', [
                count(3, array('Match Bones', 
                    format(uint16('Bone'), def('HideFFFF'))
                )),
                format(uint8('Flags'), flags({
                    0: 'Disable On Move'
                })),
                size(1, bytes('Unused')),
                float('Motors Strength'),
                float('Pose Activation Delay Time'),
                float('Match Error Allowance'),
                float('Displacement To Disable')
            ]))),
            subrecord('ANAM', string('Death Pose'))
        ]
    })
};