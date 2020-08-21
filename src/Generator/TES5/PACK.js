let {
    def, uint32, format, enumeration, uint8, 
    bytes, size, uint16, struct, subrecord, 
    req, int8, int32, float, ckFormId, 
    array, opts, memberStruct, string, union, 
    unknown, memberArray, flags, elementCounter, empty, 
    record
} = require('../helpers');

module.exports = () => {
    record('PACK', 'Package', {
        members: [
            def('EDID'),
            def('VMADFragmentedPACK'),
            req(subrecord('PKDT', struct('Pack Data', [
                format(uint32('General Flags'), def('PKDTFlags')),
                format(uint8('Type'), enumeration({
                    18: 'Package',
                    19: 'Package Template'
                })),
                format(uint8('Interrupt Override'), enumeration({
                    0: 'None',
                    1: 'Spectator',
                    2: 'ObserveDead',
                    3: 'GuardWarn',
                    4: 'Combat'
                })),
                format(uint8('Preferred Speed'), enumeration({
                    0: 'Walk',
                    1: 'Jog',
                    2: 'Run',
                    3: 'Fast Walk'
                })),
                size(1, bytes('Unknown')),
                format(uint16('Interrupt Flags'), def('PKDTInterruptFlags')),
                size(2, bytes('Unknown'))
            ]))),
            req(subrecord('PSDT', struct('Schedule', [
                int8('Month'),
                format(int8('Day of week'), enumeration({
                    0: 'Sunday',
                    1: 'Monday',
                    2: 'Tuesday',
                    3: 'Wednesday',
                    4: 'Thursday',
                    5: 'Friday',
                    6: 'Saturday',
                    7: 'Weekdays',
                    8: 'Weekends',
                    9: 'Monday, Wednesday, Friday',
                    10: 'Tuesday, Thursday',
                    "-1": 'Any'
                })),
                uint8('Date'),
                int8('Hour'),
                int8('Minute'),
                size(3, bytes('Unused')),
                int32('Duration (minutes)')
            ]))),
            def('CTDAs'),
            memberStruct('Idle Animations', [
                req(subrecord('IDLF', format(uint8('Flags'), enumeration({
                    0: 'Unknown',
                    8: 'Random',
                    9: 'Run in Sequence',
                    12: 'Random, Do Once',
                    13: 'Run in Sequence, Do Once'
                })))),
                req(subrecord('IDLC', struct('', [
                    uint8('Animation Count'),
                    size(3, bytes('Unknown'))
                ]))),
                req(subrecord('IDLT', float('Idle Timer Setting'))),
                opts(req(subrecord('IDLA', array('Animations', 
                    ckFormId('Animation', ['IDLE'])
                ))), {
                    "afterSet": "IDLAsAfterSet"
                }),
                subrecord('IDLB', size(4, bytes('Unknown')))
            ]),
            subrecord('CNAM', ckFormId('Combat Style', ['CSTY'])),
            subrecord('QNAM', ckFormId('Owner Quest', ['QUST'])),
            req(subrecord('PKCU', struct('Counter', [
                uint32('Data Input Count'),
                ckFormId('Package Template', ['PACK', 'NULL']),
                uint32('Version Counter (autoincremented)')
            ]))),
            memberStruct('Package Data', [
                memberArray('Data Input Values', 
                    memberStruct('Value', [
                        subrecord('ANAM', string('Type')),
                        subrecord('CNAM', union('Value', 'PubPackCNAMDecider', [
                            bytes('Unknown'),
                            format(uint8('Bool'), enumeration({
                                0: 'False',
                                1: 'True'
                            })),
                            uint32('Integer'),
                            float('Float')
                        ])),
                        subrecord('BNAM', unknown()),
                        def('PDTOs'),
                        def('PLDT'),
                        subrecord('PTDA', struct('Target', [
                            def('TargetData')
                        ])),
                        subrecord('TPIC', unknown())
                    ])
                ),
                def('UNAMs')
            ]),
            subrecord('XNAM', bytes('Marker')),
            memberStruct('Procedure Tree', [
                memberArray('Branches', 
                    elementCounter('CITC - Condition Count', 
                        memberStruct('Branch', [
                            subrecord('ANAM', string('Branch Type')),
                            req(def('CITC')),
                            def('CTDAsCount'),
                            subrecord('PRCB', struct('Root', [
                                uint32('Branch Count'),
                                format(uint32('Flags'), flags({
                                    0: 'Repeat when Complete',
                                    1: 'Unknown 1'
                                }))
                            ])),
                            subrecord('PNAM', string('Procedure Type')),
                            subrecord('FNAM', format(uint32('Flags'), flags({
                                0: 'Success Completes Package'
                            }))),
                            memberArray('Data Input Indexes', 
                                subrecord('PKC2', uint8('Index'))
                            ),
                            memberArray('Flags Override', 
                                subrecord('PFO2', struct('Data', [
                                    format(uint32('Set General Flags'), def('PKDTFlags')),
                                    format(uint32('Clear General Flags'), def('PKDTFlags')),
                                    format(uint16('Set Interrupt Flags'), def('PKDTInterruptFlags')),
                                    format(uint16('Clear Interrupt Flags'), def('PKDTInterruptFlags')),
                                    format(uint8('Preferred Speed Override'), enumeration({
                                        0: 'Walk',
                                        1: 'Jog',
                                        2: 'Run',
                                        3: 'Fast Walk'
                                    })),
                                    size(3, bytes('Unknown'))
                                ]))
                            ),
                            memberArray('Unknown', 
                                subrecord('PFOR', unknown())
                            )
                        ])
                    )
                )
            ]),
            def('UNAMs'),
            memberStruct('OnBegin', [
                req(subrecord('POBA', empty('OnBegin Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', size(0, bytes('Unused'))),
                subrecord('SCTX', size(0, bytes('Unused'))),
                subrecord('QNAM', size(0, bytes('Unused'))),
                subrecord('TNAM', size(0, bytes('Unused'))),
                def('PDTOs')
            ]),
            memberStruct('OnEnd', [
                req(subrecord('POEA', empty('OnEnd Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', size(0, bytes('Unused'))),
                subrecord('SCTX', size(0, bytes('Unused'))),
                subrecord('QNAM', size(0, bytes('Unused'))),
                subrecord('TNAM', size(0, bytes('Unused'))),
                def('PDTOs')
            ]),
            memberStruct('OnChange', [
                req(subrecord('POCA', empty('OnChange Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', size(0, bytes('Unused'))),
                subrecord('SCDA', size(0, bytes('Unused'))),
                subrecord('SCTX', size(0, bytes('Unused'))),
                subrecord('QNAM', size(0, bytes('Unused'))),
                subrecord('TNAM', size(0, bytes('Unused'))),
                def('PDTOs')
            ])
        ]
    })
};