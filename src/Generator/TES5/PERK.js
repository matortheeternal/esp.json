let {
    def, uint8, subrecord, struct, req, 
    ckFormId, sortKey, bytes, union, int8, 
    arrayOfMultiStruct, lstring, uint16, float, string, 
    uint32, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('PERK', 'Perk', {
        flags: {
            "2": "Non-Playable"
        },
        members: [
            def('EDID'),
            def('VMADFragmentedPERK'),
            def('FULL'),
            def('DESCReq'),
            def('ICON'),
            def('CTDAs'),
            req(subrecord('DATA', struct('Data', [
                uint8('Trait', {
                    "0": "False",
                    "1": "True"
                }),
                uint8('Level'),
                uint8('Num Ranks'),
                uint8('Playable', {
                    "0": "False",
                    "1": "True"
                }),
                uint8('Hidden', {
                    "0": "False",
                    "1": "True"
                })
            ]))),
            subrecord('NNAM', ckFormId('Next Perk', ['PERK', 'NULL'])),
            arrayOfMultiStruct('Effects', sortKey([0, 1], multiStruct(Effect, [
                subrecord('PRKE', sortKey([1, 2, 0], struct('Header', [
                    uint8('Type', {
                        "0": "Quest + Stage",
                        "1": "Ability",
                        "2": "Entry Point"
                    }),
                    uint8('Rank'),
                    uint8('Priority')
                ]))),
                req(subrecord('DATA', union('Effect Data', [
                    sortKey([0, 1], struct('Quest + Stage', [
                        ckFormId('Quest', ['QUST']),
                        uint8('Quest Stage', def('PerkDATAQuestStageToStr')),
                        bytes('Unused', 3)
                    ])),
                    ckFormId('Ability', ['SPEL']),
                    sortKey([0, 1], struct('Entry Point', [
                        uint8('Entry Point', def('EntryPointsEnum')),
                        uint8('Function', {
                            "0": "Unknown 0",
                            "1": "Set Value",
                            "2": "Add Value",
                            "3": "Multiply Value",
                            "4": "Add Range To Value",
                            "5": "Add Actor Value Mult",
                            "6": "Absolute Value",
                            "7": "Negative Absolute Value",
                            "8": "Add Leveled List",
                            "9": "Add Activate Choice",
                            "10": "Select Spell",
                            "11": "Select Text",
                            "12": "Set to Actor Value Mult",
                            "13": "Multiply Actor Value Mult",
                            "14": "Multiply 1 + Actor Value Mult",
                            "15": "Set Text"
                        }),
                        uint8('Perk Condition Tab Count', null)
                    ]))
                ]))),
                req(arrayOfMultiStruct('Perk Conditions', sortKey([0], multiStruct(Perk Condition, [
                    subrecord('PRKC', int8('Run On (Tab Index)')),
                    def('CTDAsReq')
                ])))),
                req(multiStruct(Function Parameters, [
                    subrecord('EPFT', uint8('Type', {
                        "0": "None",
                        "1": "Float",
                        "2": "Float/AV,Float",
                        "3": "LVLI",
                        "4": "SPEL,lstring,flags",
                        "5": "SPEL",
                        "6": "string",
                        "7": "lstring"
                    })),
                    subrecord('EPF2', lstring(Button Label)),
                    subrecord('EPF3', struct('Script Flags', [
                        uint16('Script Flags', {
                            "0": "Run Immediately",
                            "1": "Replace Default"
                        }),
                        uint16('Fragment Index')
                    ])),
                    req(subrecord('EPFD', union('Data', [
                        bytes('Unknown', 0),
                        float('Float'),
                        struct('Float, Float', [
                            float('Float 1'),
                            float('Float 2')
                        ]),
                        ckFormId('Leveled Item', ['LVLI']),
                        ckFormId('Spell', ['SPEL']),
                        ckFormId('Spell', ['SPEL']),
                        string('Text'),
                        lstring(Text),
                        struct('Actor Value, Float', [
                            uint32('Actor Value', def('EPFDActorValueToStr')),
                            float('Float')
                        ])
                    ])))
                ])),
                req(subrecord('PRKF', empty('End Marker')))
            ])))
        ]
    })
};