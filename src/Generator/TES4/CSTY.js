let {
    def, uint8, bytes, size, float, 
    flags, format, uint32, struct, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('CSTY', 'Combat Style', {
        members: [
            def('EDID'),
            req(subrecord('CSTD', struct('Standard', [
                uint8('Dodge % Chance'),
                uint8('Left/Right % Chance'),
                size(2, bytes('Unused')),
                float('Dodge L/R Timer (min)'),
                float('Dodge L/R Timer (max)'),
                float('Dodge Forward Timer (min)'),
                float('Dodge Forward Timer (max)'),
                float('Dodge Back Timer Min'),
                float('Dodge Back Timer Max'),
                float('Idle Timer min'),
                float('Idle Timer max'),
                uint8('Block % Chance'),
                uint8('Attack % Chance'),
                size(2, bytes('Unused')),
                float('Recoil/Stagger Bonus to Attack'),
                float('Unconscious Bonus to Attack'),
                float('Hand-To-Hand Bonus to Attack'),
                uint8('Power Attack % Chance'),
                size(3, bytes('Unused')),
                float('Recoil/Stagger Bonus to Power'),
                float('Unconscious Bonus to Power Attack'),
                uint8('Power Attack - Normal'),
                uint8('Power Attack - Forward'),
                uint8('Power Attack - Back'),
                uint8('Power Attack - Left'),
                uint8('Power Attack - Right'),
                size(3, bytes('Unused')),
                float('Hold Timer (min)'),
                float('Hold Timer (max)'),
                format(uint8('Flags 1'), flags({
                    0: 'Advanced',
                    1: 'Choose Attack using % Chance',
                    2: 'Ignore Allies in Area',
                    3: 'Will Yield',
                    4: 'Rejects Yields',
                    5: 'Fleeing Disabled',
                    6: 'Prefers Ranged',
                    7: 'Melee Alert OK'
                })),
                uint8('Acrobatic Dodge % Chance'),
                size(2, bytes('Unused')),
                float('Range Mult (Optimal)'),
                float('Range Mult (Max)'),
                float('Switch Distance (Melee)'),
                float('Switch Distance (Ranged)'),
                float('Buff standoff Distance'),
                float('Ranged standoff Distance'),
                float('Group standoff Distance'),
                uint8('Rushing Attack % Chance'),
                size(3, bytes('Unused')),
                float('Rushing Attack Distance Mult'),
                format(uint32('Flags 2'), flags({
                    0: 'Do Not Acquire'
                }))
            ]))),
            subrecord('CSAD', struct('Advanced', [
                float('Dodge Fatigue Mod Mult'),
                float('Dodge Fatigue Mod Base'),
                float('Encumb. Speed Mod Base'),
                float('Encumb. Speed Mod Mult'),
                float('Dodge While Under Attack Mult'),
                float('Dodge Not Under Attack Mult'),
                float('Dodge Back While Under Attack Mult'),
                float('Dodge Back Not Under Attack Mult'),
                float('Dodge Forward While Attacking Mult'),
                float('Dodge Forward Not Attacking Mult'),
                float('Block Skill Modifier Mult'),
                float('Block Skill Modifier Base'),
                float('Block While Under Attack Mult'),
                float('Block Not Under Attack Mult'),
                float('Attack Skill Modifier Mult'),
                float('Attack Skill Modifier Base'),
                float('Attack While Under Attack Mult'),
                float('Attack Not Under Attack Mult'),
                float('Attack During Block Mult'),
                float('Power Att. Fatigue Mod Base'),
                float('Power Att. Fatigue Mod Mult')
            ]))
        ]
    })
};