let {
    flags, def, req, unknown, subrecord, 
    ckFormId, uint16, format, enumeration, uint8, 
    int8, struct, int32, bytes, size, 
    memberStruct, memberArray, string, record
} = require('../helpers');

module.exports = () => {
    record('FURN', 'Furniture', {
        flags: flags({
            2: 'Unknown 2',
            4: 'Unknown 4',
            7: 'Is Perch',
            12: 'Ignored',
            13: 'Unknown 13',
            15: 'Has Distant LOD',
            16: 'Random Anim Start',
            23: 'Is Marker',
            25: 'Power Armor',
            28: 'Must Exit To Talk',
            29: 'Child Can Use'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            def('PRPS'),
            def('NTRM'),
            def('FTYP'),
            subrecord('PNAM', unknown()),
            subrecord('WNAM', ckFormId('Drinking Water Type', ['WATR'])),
            def('ATTX'),
            subrecord('FNAM', format(uint16('Flags'), flags({
                0: 'Unknown 0',
                1: 'Ignored By Sandbox'
            }))),
            def('CITC'),
            def('CTDAsCount'),
            def('COCT'),
            def('CNTOs'),
            def('MNAMFurnitureMarker'),
            req(subrecord('WBDT', struct('Workbench Data', [
                format(uint8('Bench Type'), enumeration({
                    0: 'None',
                    1: 'Create Object',
                    2: 'Weapons',
                    3: 'Enchanting (unused)',
                    4: 'Enchanting Experiment (unused)',
                    5: 'Alchemy',
                    6: 'Alchemy Experiment (unused)',
                    7: 'Armor',
                    8: 'Power Armor',
                    9: 'Robot Mod'
                })),
                format(int8('Uses Skill'), def('SkillEnum'))
            ]))),
            subrecord('NAM1', ckFormId('Associated Form', [
                'ARMO', 'WEAP', 'PERK', 'SPEL', 'HAZD'
            ])),
            memberArray('Markers', 
                memberStruct('Marker', [
                    subrecord('ENAM', int32('Marker Index')),
                    subrecord('NAM0', struct('Disabled Entry Points', [
                        size(2, bytes('Unknown')),
                        format(uint16('Disabled Points'), def('FurnitureEntryTypeFlags'))
                    ]))
                ])
            ),
            memberArray('Marker Entry Points', 
                subrecord('FNPR', struct('Marker', [
                    format(uint16('Type'), def('FurnitureAnimTypeEnum')),
                    format(uint16('Entry Points'), def('FurnitureEntryTypeFlags'))
                ]))
            ),
            subrecord('XMRK', string('Marker Model')),
            def('SNAMMarkerParams'),
            def('APPR'),
            def('ObjectTemplate'),
            def('NVNM')
        ]
    })
};