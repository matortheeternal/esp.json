let {
    req, def, enumeration, uint8, format, 
    struct, subrecord, opts, sortKey, ckFormId, 
    bytes, size, conflictType, union, int8, 
    memberArray, memberStruct, float, empty, uint32, 
    string, flags, uint16, record
} = require('../helpers');

module.exports = () => {
    record('PERK', 'Perk', {
        members: [
            req(def('EDID')),
            def('FULL'),
            req(def('DESC')),
            def('ICON'),
            def('CTDAs'),
            req(subrecord('DATA', struct('Data', [
                format(uint8('Trait'), enumeration({
                    0: 'No',
                    1: 'Yes'
                })),
                uint8('Min Level'),
                uint8('Ranks'),
                format(uint8('Playable'), enumeration({
                    0: 'No',
                    1: 'Yes'
                })),
                format(uint8('Hidden'), enumeration({
                    0: 'No',
                    1: 'Yes'
                }))
            ]))),
            memberArray('Effects', 
                sortKey([0, 1], memberStruct('Effect', [
                    subrecord('PRKE', sortKey([1, 2, 0], struct('Header', [
                        opts(format(uint8('Type'), enumeration({
                            0: 'Quest + Stage',
                            1: 'Ability',
                            2: 'Entry Point'
                        })), {
                            "afterSet": "PERKPRKETypeAfterSet"
                        }),
                        uint8('Rank'),
                        uint8('Priority')
                    ]))),
                    req(subrecord('DATA', union('Effect Data', 'PerkDATADecider', [
                        sortKey([0, 1], struct('Quest + Stage', [
                            ckFormId('Quest', ['QUST']),
                            format(uint8('Quest Stage'), def('PerkDATAQuestStageToStr')),
                            size(3, bytes('Unused'))
                        ])),
                        ckFormId('Ability', ['SPEL']),
                        sortKey([0, 1], struct('Entry Point', [
                            opts(req(format(uint8('Entry Point'), enumeration({
                                0: 'Calculate Weapon Damage',
                                1: 'Calculate My Critical Hit Chance',
                                2: 'Calculate My Critical Hit Damage',
                                3: 'Calculate Weapon Attack AP Cost',
                                4: 'Calculate Mine Explode Chance',
                                5: 'Adjust Range Penalty',
                                6: 'Adjust Limb Damage',
                                7: 'Calculate Weapon Range',
                                8: 'Calculate To Hit Chance',
                                9: 'Adjust Experience Points',
                                10: 'Adjust Gained Skill Points',
                                11: 'Adjust Book Skill Points',
                                12: 'Modify Recovered Health',
                                13: 'Calculate Inventory AP Cost',
                                14: 'Get Disposition',
                                15: 'Get Should Attack',
                                16: 'Get Should Assist',
                                17: 'Calculate Buy Price',
                                18: 'Get Bad Karma',
                                19: 'Get Good Karma',
                                20: 'Ignore Locked Terminal',
                                21: 'Add Leveled List On Death',
                                22: 'Get Max Carry Weight',
                                23: 'Modify Addiction Chance',
                                24: 'Modify Addiction Duration',
                                25: 'Modify Positive Chem Duration',
                                26: 'Adjust Drinking Radiation',
                                27: 'Activate',
                                28: 'Mysterious Stranger',
                                29: 'Has Paralyzing Palm',
                                30: 'Hacking Science Bonus',
                                31: 'Ignore Running During Detection',
                                32: 'Ignore Broken Lock',
                                33: 'Has Concentrated Fire',
                                34: 'Calculate Gun Spread',
                                35: 'Player Kill AP Reward',
                                36: 'Modify Enemy Critical Hit Chance',
                                37: 'Reload Speed',
                                38: 'Equip Speed',
                                39: 'Action Point Regen',
                                40: 'Action Point Cost',
                                41: 'Miss Fortune',
                                42: 'Modify Run Speed',
                                43: 'Modify Attack Speed',
                                44: 'Modify Radiation Consumed',
                                45: 'Has Pip Hacker',
                                46: 'Has Meltdown',
                                47: 'See Enemy Health',
                                48: 'Has Jury Rigging',
                                49: 'Modify Threat Range',
                                50: 'Modify Thread',
                                51: 'Has Fast Travel Always',
                                52: 'Knockdown Chance',
                                53: 'Modify Weapon Strength Req',
                                54: 'Modify Aiming Move Speed',
                                55: 'Modify Light Items',
                                56: 'Modify Damage Threshold (defender)',
                                57: 'Modify Chance for Ammo Item',
                                58: 'Modify Damage Threshold (attacker)',
                                59: 'Modify Throwing Velocity',
                                60: 'Chance for Item on Fire',
                                61: 'Has Unarmed Forward Power Attack',
                                62: 'Has Unarmed Back Power Attack',
                                63: 'Has Unarmed Crouched Power Attack',
                                64: 'Has Unarmed Counter Attack',
                                65: 'Has Unarmed Left Power Attack',
                                66: 'Has Unarmed Right Power Attack',
                                67: 'VATS HelperChance',
                                68: 'Modify Item Damage',
                                69: 'Has Improved Detection',
                                70: 'Has Improved Spotting',
                                71: 'Has Improved Item Detection',
                                72: 'Adjust Explosion Radius',
                                73: 'Reserved'
                            }))), {
                                "afterSet": "PERKEntryPointAfterSet"
                            }),
                            opts(format(uint8('Function'), def('PerkDATAFunctionToStr')), {
                                "afterSet": "PerkDATAFunctionAfterSet"
                            }),
                            conflictType('Ignore', uint8('Perk Condition Tab Count'))
                        ]))
                    ]))),
                    memberArray('Perk Conditions', 
                        sortKey([0], memberStruct('Perk Condition', [
                            subrecord('PRKC', format(int8('Run On'), def('PRKCToStr'))),
                            req(def('CTDAs'))
                        ]))
                    ),
                    memberStruct('Entry Point Function Parameters', [
                        opts(subrecord('EPFT', format(conflictType('Ignore', uint8('Type')), def('PerkEPFTToStr'))), {
                            "afterSet": "PerkEPFTAfterSet"
                        }),
                        subrecord('EPFD', union('Data', 'EPFDDecider', [
                            bytes('Unknown'),
                            float('Float'),
                            struct('Float, Float', [
                                float('Float 1'),
                                float('Float 2')
                            ]),
                            ckFormId('Leveled Item', ['LVLI']),
                            empty('None (Script)'),
                            struct('Actor Value, Float', [
                                format(uint32('Actor Value'), def('EPFDActorValueToStr')),
                                float('Float')
                            ])
                        ])),
                        opts(subrecord('EPF2', string('Button Label')), {
                            "transform": "keepcase"
                        }),
                        subrecord('EPF3', format(uint16('Script Flags'), flags({
                            0: 'Run Immediately'
                        }))),
                        def('EmbeddedScriptPerk')
                    ]),
                    req(subrecord('PRKF', conflictType('Ignore', empty('End Marker'))))
                ]))
            )
        ]
    })
};