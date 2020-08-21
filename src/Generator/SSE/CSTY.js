let {
    flags, def, float, struct, subrecord, 
    req, unknown, uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('CSTY', 'Combat Style', {
        flags: flags({
            12: 'Ignored',
            19: 'Allow Dual Wielding'
        }),
        members: [
            def('EDID'),
            req(subrecord('CSGD', struct('General', [
                float('Offensive Mult'),
                float('Defensive Mult'),
                float('Group Offensive Mult'),
                float('Equipment Score Mult - Melee'),
                float('Equipment Score Mult - Magic'),
                float('Equipment Score Mult - Ranged'),
                float('Equipment Score Mult - Shout'),
                float('Equipment Score Mult - Unarmed'),
                float('Equipment Score Mult - Staff'),
                float('Avoid Threat Chance')
            ]))),
            subrecord('CSMD', unknown()),
            subrecord('CSME', struct('Melee', [
                float('Attack Staggered Mult'),
                float('Power Attack Staggered Mult'),
                float('Power Attack Blocking Mult'),
                float('Bash Mult'),
                float('Bash Recoil Mult'),
                float('Bash Attack Mult'),
                float('Bash Power Attack Mult'),
                float('Special Attack Mult')
            ])),
            subrecord('CSCR', struct('Close Range', [
                float('Circle Mult'),
                float('Fallback Mult'),
                float('Flank Distance'),
                float('Stalk Time')
            ])),
            subrecord('CSLR', struct('Long Range', [
                float('Strafe Mult')
            ])),
            subrecord('CSFL', struct('Flight', [
                float('Hover Chance'),
                float('Dive Bomb Chance'),
                float('Ground Attack Chance'),
                float('Hover Time'),
                float('Ground Attack Time'),
                float('Perch Attack Chance'),
                float('Perch Attack Time'),
                float('Flying Attack Chance')
            ])),
            subrecord('DATA', format(uint32('Flags'), flags({
                0: 'Dueling',
                1: 'Flanking',
                2: 'Allow Dual Wielding'
            })))
        ]
    })
};