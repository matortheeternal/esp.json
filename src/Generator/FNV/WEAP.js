let {
    req, def, int16, subrecord, ckFormId, 
    string, bytes, size, conflictType, memberStruct, 
    int32, float, uint8, struct, uint32, 
    format, flags, enumeration, uint16, record
} = require('../helpers');

module.exports = () => {
    record('WEAP', 'Weapon', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('EITM'),
            subrecord('EAMT', int16('Enchantment Charge Amount')),
            subrecord('NAM0', ckFormId('Ammo', ['AMMO', 'FLST'])),
            def('DEST'),
            def('REPL'),
            req(def('ETYP')),
            def('BIPL'),
            def('YNAM'),
            def('ZNAM'),
            memberStruct('Shell Casing Model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO2S')
            ]),
            memberStruct('Scope Model', [
                subrecord('MOD3', string('Model FileName')),
                subrecord('MO3T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO3S')
            ]),
            subrecord('EFSD', ckFormId('Scope Effect', ['EFSH'])),
            memberStruct('World Model', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO4S')
            ]),
            subrecord('MWD1', string('Model - Mod 1')),
            subrecord('MWD2', string('Model - Mod 2')),
            subrecord('MWD3', string('Model - Mod 1 and 2')),
            subrecord('MWD4', string('Model - Mod 3')),
            subrecord('MWD5', string('Model - Mod 1 and 3')),
            subrecord('MWD6', string('Model - Mod 2 and 3')),
            subrecord('MWD7', string('Model - Mod 1, 2 and 3')),
            subrecord('VANM', conflictType('Translate', string('VATS Attack Name'))),
            subrecord('NNAM', string('Embedded Weapon Node')),
            subrecord('INAM', ckFormId('Impact DataSet', ['IPDS'])),
            subrecord('WNAM', ckFormId('1st Person Model', ['STAT'])),
            subrecord('WNM1', ckFormId('1st Person Model - Mod 1', ['STAT'])),
            subrecord('WNM2', ckFormId('1st Person Model - Mod 2', ['STAT'])),
            subrecord('WNM3', ckFormId('1st Person Model - Mod 1 and 2', ['STAT'])),
            subrecord('WNM4', ckFormId('1st Person Model - Mod 3', ['STAT'])),
            subrecord('WNM5', ckFormId('1st Person Model - Mod 1 and 3', ['STAT'])),
            subrecord('WNM6', ckFormId('1st Person Model - Mod 2 and 3', ['STAT'])),
            subrecord('WNM7', ckFormId('1st Person Model - Mod 1, 2 and 3', ['STAT'])),
            subrecord('WMI1', ckFormId('Weapon Mod 1', ['IMOD'])),
            subrecord('WMI2', ckFormId('Weapon Mod 2', ['IMOD'])),
            subrecord('WMI3', ckFormId('Weapon Mod 3', ['IMOD'])),
            memberStruct('Sound - Gun', [
                subrecord('SNAM', ckFormId('Shoot 3D', ['SOUN'])),
                subrecord('SNAM', ckFormId('Shoot Dist', ['SOUN']))
            ]),
            subrecord('XNAM', ckFormId('Sound - Gun - Shoot 2D', ['SOUN'])),
            subrecord('NAM7', ckFormId('Sound - Gun - Shoot 3D Looping', ['SOUN'])),
            subrecord('TNAM', ckFormId('Sound - Melee - Swing / Gun - No Ammo', ['SOUN'])),
            subrecord('NAM6', ckFormId('Sound - Block', ['SOUN'])),
            subrecord('UNAM', ckFormId('Sound - Idle', ['SOUN'])),
            subrecord('NAM9', ckFormId('Sound - Equip', ['SOUN'])),
            subrecord('NAM8', ckFormId('Sound - Unequip', ['SOUN'])),
            memberStruct('Sound - Mod 1', [
                subrecord('WMS1', ckFormId('Shoot 3D', ['SOUN'])),
                subrecord('WMS1', ckFormId('Shoot Dist', ['SOUN']))
            ]),
            subrecord('WMS2', ckFormId('Sound - Mod 1 - Shoot 2D', ['SOUN'])),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                int32('Health'),
                float('Weight'),
                int16('Base Damage'),
                uint8('Clip Size')
            ]))),
            req(subrecord('DNAM', struct('', [
                format(uint32('Animation Type'), def('WeaponAnimTypeEnum')),
                float('Animation Multiplier'),
                float('Reach'),
                format(uint8('Flags 1'), flags({
                    0: 'Ignores Normal Weapon Resistance',
                    1: 'Is Automatic',
                    2: 'Has Scope',
                    3: 'Can\'t Drop',
                    4: 'Hide Backpack',
                    5: 'Embedded Weapon',
                    6: 'Don\'t Use 1st Person IS Animations',
                    7: 'Non-Playable'
                })),
                format(uint8('Grip Animation'), enumeration({
                    230: 'HandGrip1',
                    231: 'HandGrip2',
                    232: 'HandGrip3',
                    233: 'HandGrip4',
                    234: 'HandGrip5',
                    235: 'HandGrip6',
                    255: 'DEFAULT'
                })),
                uint8('Ammo Use'),
                format(uint8('Reload Animation'), def('ReloadAnimEnum')),
                float('Min Spread'),
                float('Spread'),
                float('Unknown'),
                float('Sight FOV'),
                float('Unknown'),
                ckFormId('Projectile', ['PROJ', 'NULL']),
                uint8('Base VATS To-Hit Chance'),
                format(uint8('Attack Animation'), enumeration({
                    26: 'AttackLeft',
                    32: 'AttackRight',
                    38: 'Attack3',
                    44: 'Attack4',
                    50: 'Attack5',
                    56: 'Attack6',
                    62: 'Attack7',
                    68: 'Attack8',
                    74: 'AttackLoop',
                    80: 'AttackSpin',
                    86: 'AttackSpin2',
                    102: 'PlaceMine',
                    108: 'PlaceMine2',
                    114: 'AttackThrow',
                    120: 'AttackThrow2',
                    126: 'AttackThrow3',
                    132: 'AttackThrow4',
                    138: 'AttackThrow5',
                    144: 'Attack9',
                    150: 'AttackThrow6',
                    156: 'AttackThrow7',
                    162: 'AttackThrow8',
                    255: 'DEFAULT'
                })),
                uint8('Projectile Count'),
                format(uint8('Embedded Weapon - Actor Value'), enumeration({
                    0: 'Perception',
                    1: 'Endurance',
                    2: 'Left Attack',
                    3: 'Right Attack',
                    4: 'Left Mobility',
                    5: 'Right Mobilty',
                    6: 'Brain'
                })),
                float('Min Range'),
                float('Max Range'),
                format(uint32('On Hit'), enumeration({
                    0: 'Normal formula behavior',
                    1: 'Dismember Only',
                    2: 'Explode Only',
                    3: 'No Dismember/Explode'
                })),
                format(uint32('Flags 2'), flags({
                    0: 'Player Only',
                    1: 'NPCs Use Ammo',
                    2: 'No Jam After Reload',
                    3: 'Override - Action Points',
                    4: 'Minor Crime',
                    5: 'Range - Fixed',
                    6: 'Not Used In Normal Combat',
                    7: 'Override - Damage to Weapon Mult',
                    8: 'Don\'t Use 3rd Person IS Animations',
                    9: 'Short Burst',
                    10: 'Rumble Alternate',
                    11: 'Long Burst',
                    12: 'Scope has NightVision',
                    13: 'Scope from Mod'
                })),
                float('Animation Attack Multiplier'),
                float('Fire Rate'),
                float('Override - Action Points'),
                float('Rumble - Left Motor Strength'),
                float('Rumble - Right Motor Strength'),
                float('Rumble - Duration'),
                float('Override - Damage to Weapon Mult'),
                float('Attack Shots/Sec'),
                float('Reload Time'),
                float('Jam Time'),
                float('Aim Arc'),
                format(int32('Skill'), def('ActorValueEnum')),
                format(uint32('Rumble - Pattern'), enumeration({
                    0: 'Constant',
                    1: 'Square',
                    2: 'Triangle',
                    3: 'Sawtooth'
                })),
                float('Rumble - Wavelength'),
                float('Limb Dmg Mult'),
                format(int32('Resist Type'), def('ActorValueEnum')),
                float('Sight Usage'),
                float('Semi-Automatic Fire Delay Min'),
                float('Semi-Automatic Fire Delay Max'),
                float('Unknown'),
                format(uint32('Effect - Mod 1'), def('ModEffectEnum')),
                format(uint32('Effect - Mod 2'), def('ModEffectEnum')),
                format(uint32('Effect - Mod 3'), def('ModEffectEnum')),
                float('Value A - Mod 1'),
                float('Value A - Mod 2'),
                float('Value A - Mod 3'),
                format(uint32('Power Attack Animation Override'), enumeration({
                    0: '0?',
                    97: 'AttackCustom1Power',
                    98: 'AttackCustom2Power',
                    99: 'AttackCustom3Power',
                    100: 'AttackCustom4Power',
                    101: 'AttackCustom5Power',
                    255: 'DEFAULT'
                })),
                uint32('Strength Req'),
                size(1, bytes('Unknown')),
                format(uint8('Reload Animation - Mod'), def('ReloadAnimEnum')),
                size(2, bytes('Unknown')),
                float('Regen Rate'),
                float('Kill Impulse'),
                float('Value B - Mod 1'),
                float('Value B - Mod 2'),
                float('Value B - Mod 3'),
                float('Impulse Dist'),
                uint32('Skill Req')
            ]))),
            req(subrecord('CRDT', struct('Critical Data', [
                uint16('Critical Damage'),
                size(2, bytes('Unused')),
                float('Crit % Mult'),
                format(uint8('Flags'), flags({
                    0: 'On Death'
                })),
                size(3, bytes('Unused')),
                ckFormId('Effect', ['SPEL', 'NULL'])
            ]))),
            subrecord('VATS', struct('VATS', [
                ckFormId('Effect', ['SPEL', 'NULL']),
                float('Skill'),
                float('Dam. Mult'),
                float('AP'),
                format(uint8('Silent'), enumeration({
                    0: 'No',
                    1: 'Yes'
                })),
                format(uint8('Mod Required'), enumeration({
                    0: 'No',
                    1: 'Yes'
                })),
                size(2, bytes('Unused'))
            ])),
            req(subrecord('VNAM', format(uint32('Sound Level'), def('SoundLevelEnum'))))
        ]
    })
};