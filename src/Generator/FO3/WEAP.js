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
            subrecord('NNAM', string('Embedded Weapon Node')),
            subrecord('INAM', ckFormId('Impact DataSet', ['IPDS'])),
            subrecord('WNAM', ckFormId('1st Person Model', ['STAT'])),
            subrecord('SNAM', ckFormId('Sound - Gun - Shoot 3D', ['SOUN'])),
            subrecord('XNAM', ckFormId('Sound - Gun - Shoot 2D', ['SOUN'])),
            subrecord('NAM7', ckFormId('Sound - Gun - Shoot 3D Looping', ['SOUN'])),
            subrecord('TNAM', ckFormId('Sound - Melee - Swing / Gun - No Ammo', ['SOUN'])),
            subrecord('NAM6', ckFormId('Sound - Block', ['SOUN'])),
            subrecord('UNAM', ckFormId('Sound - Idle', ['SOUN'])),
            subrecord('NAM9', ckFormId('Sound - Equip', ['SOUN'])),
            subrecord('NAM8', ckFormId('Sound - Unequip', ['SOUN'])),
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
                    171: 'HandGrip1',
                    172: 'HandGrip2',
                    173: 'HandGrip3',
                    255: 'DEFAULT'
                })),
                uint8('Ammo Use'),
                format(uint8('Reload Animation'), def('ReloadAnimEnum')),
                float('Min Spread'),
                float('Spread'),
                float('Unknown'),
                float('Sight FOV'),
                size(4, bytes('Unused')),
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
                    97: 'PlaceMine',
                    103: 'PlaceMine2',
                    109: 'AttackThrow',
                    115: 'AttackThrow2',
                    121: 'AttackThrow3',
                    127: 'AttackThrow4',
                    133: 'AttackThrow5',
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
                    11: 'Long Burst'
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
                float('Semi-Automatic Fire Delay Max')
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
            req(subrecord('VNAM', format(uint32('Sound Level'), def('SoundLevelEnum'))))
        ]
    })
};