let {
    req, def, uint8, bytes, size, 
    float, flags, uint16, format, struct, 
    subrecord, enumeration, uint32, record
} = require('../helpers');

module.exports = () => {
    record('CSTY', 'Combat Style', {
        members: [
            req(def('EDID')),
            req(subrecord('CSTD', struct('Advanced - Standard', [
                uint8('Maneuver Decision - Dodge % Chance'),
                uint8('Maneuver Decision - Left/Right % Chance'),
                size(2, bytes('Unused')),
                float('Maneuver Decision - Dodge L/R Timer (min)'),
                float('Maneuver Decision - Dodge L/R Timer (max)'),
                float('Maneuver Decision - Dodge Forward Timer (min)'),
                float('Maneuver Decision - Dodge Forward Timer (max)'),
                float('Maneuver Decision - Dodge Back Timer Min'),
                float('Maneuver Decision - Dodge Back Timer Max'),
                float('Maneuver Decision - Idle Timer min'),
                float('Maneuver Decision - Idle Timer max'),
                uint8('Melee Decision - Block % Chance'),
                uint8('Melee Decision - Attack % Chance'),
                size(2, bytes('Unused')),
                float('Melee Decision - Recoil/Stagger Bonus to Attack'),
                float('Melee Decision - Unconscious Bonus to Attack'),
                float('Melee Decision - Hand-To-Hand Bonus to Attack'),
                uint8('Melee Decision - Power Attacks - Power Attack % Chance'),
                size(3, bytes('Unused')),
                float('Melee Decision - Power Attacks - Recoil/Stagger Bonus to Power'),
                float('Melee Decision - Power Attacks - Unconscious Bonus to Power Attack'),
                uint8('Melee Decision - Power Attacks - Normal'),
                uint8('Melee Decision - Power Attacks - Forward'),
                uint8('Melee Decision - Power Attacks - Back'),
                uint8('Melee Decision - Power Attacks - Left'),
                uint8('Melee Decision - Power Attacks - Right'),
                size(3, bytes('Unused')),
                float('Melee Decision - Hold Timer (min)'),
                float('Melee Decision - Hold Timer (max)'),
                format(uint16('Flags'), flags({
                    0: 'Choose Attack using % Chance',
                    1: 'Melee Alert OK',
                    2: 'Flee Based on Personal Survival',
                    3: '',
                    4: 'Ignore Threats',
                    5: 'Ignore Damaging Self',
                    6: 'Ignore Damaging Group',
                    7: 'Ignore Damaging Spectators',
                    8: 'Cannot Use Stealthboy'
                })),
                size(2, bytes('Unused')),
                uint8('Maneuver Decision - Acrobatic Dodge % Chance'),
                uint8('Melee Decision - Power Attacks - Rushing Attack % Chance'),
                size(2, bytes('Unused')),
                float('Melee Decision - Power Attacks - Rushing Attack Distance Mult')
            ]))),
            req(subrecord('CSAD', struct('Advanced - Advanced', [
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
            ]))),
            req(subrecord('CSSD', struct('Simple', [
                float('Cover Search Radius'),
                float('Take Cover Chance'),
                float('Wait Timer (min)'),
                float('Wait Timer (max)'),
                float('Wait to Fire Timer (min)'),
                float('Wait to Fire Timer (max)'),
                float('Fire Timer (min)'),
                float('Fire Timer (max)'),
                float('Ranged Weapon Range Mult (min)'),
                size(4, bytes('Unused')),
                format(uint32('Weapon Restrictions'), enumeration({
                    0: 'None',
                    1: 'Melee Only',
                    2: 'Ranged Only'
                })),
                float('Ranged Weapon Range Mult (max)'),
                float('Max Targeting FOV'),
                float('Combat Radius'),
                float('Semi-Auto Firing Delay Mult (min)'),
                float('Semi-Auto Firing Delay Mult (max)')
            ])))
        ]
    })
};