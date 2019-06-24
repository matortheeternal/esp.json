let {
    def, uint32, format, uint8, bytes, 
    uint16, subrecord, struct, req, int8, 
    int32, float, ckFormId, array, multiStruct, 
    string, union, unknown, arrayOfSubrecord, empty, 
    record
} = require('../helpers');

module.exports = () => {
    record('PACK', 'Package', {
        members: [
            def('EDID'),
            def('VMADFragmentedPACK'),
            req(subrecord('PKDT', struct('Pack Data', [
                format(uint32('General Flags'), def('PKDTFlags')),
                format(uint8('Type'), {
                    18: 'Package',
                    19: 'Package Template'
                }),
                format(uint8('Interrupt Override'), {
                    0: 'None',
                    1: 'Spectator',
                    2: 'ObserveDead',
                    3: 'GuardWarn',
                    4: 'Combat'
                }),
                format(uint8('Preferred Speed'), {
                    0: 'Walk',
                    1: 'Jog',
                    2: 'Run',
                    3: 'Fast Walk'
                }),
                bytes('Unknown', 1),
                format(uint16('Interrupt Flags'), def('PKDTInterruptFlags')),
                bytes('Unknown', 2)
            ]))),
            req(subrecord('PSDT', struct('Schedule', [
                int8('Month'),
                format(int8('Day of week'), {
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
                }),
                uint8('Date'),
                int8('Hour'),
                int8('Minute'),
                bytes('Unused', 3),
                int32('Duration (minutes)')
            ]))),
            def('CTDAs'),
            req(multiStruct('Idle Animations', [
                subrecord('IDLF', format(uint8('Flags'), {
                    0: 'Unknown',
                    8: 'Random',
                    9: 'Run in Sequence',
                    12: 'Random, Do Once',
                    13: 'Run in Sequence, Do Once'
                })),
                req(subrecord('IDLC', struct('', [
                    uint8('Animation Count'),
                    bytes('Unknown', 3)
                ]))),
                req(subrecord('IDLT', float('Idle Timer Setting'))),
                subrecord('IDLA', array('Animations', 
                    ckFormId('Animation', ['IDLE'])
                )),
                subrecord('IDLB', bytes('Unknown', 4))
            ])),
            subrecord('CNAM', ckFormId('Combat Style', ['CSTY'])),
            subrecord('QNAM', ckFormId('Owner Quest', ['QUST'])),
            req(subrecord('PKCU', struct('Counter', [
                uint32('Data Input Count'),
                ckFormId('Package Template', ['PACK', 'NULL']),
                uint32('Version Counter (autoincremented)')
            ]))),
            multiStruct('Package Data', [
                arrayOfSubrecord('Data Input Values', 
                    req(multiStruct('Value', [
                        subrecord('ANAM', string('Type')),
                        subrecord('CNAM', union('Value', [
                            bytes('Unknown'),
                            format(uint8('Bool'), {
                                0: 'False',
                                1: 'True'
                            }),
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
                    ]))
                ),
                def('UNAMs')
            ]),
            subrecord('XNAM', bytes('Marker')),
            multiStruct('Procedure Tree', [
                arrayOfSubrecord('Branches', 
                    req(multiStruct('Branch', [
                        subrecord('ANAM', string('Branch Type')),
                        req(def('CITC')),
                        def('CTDAsCount'),
                        subrecord('PRCB', struct('Root', [
                            uint32('Branch Count'),
                            format(uint32('Flags'), {
                                0: 'Repeat when Complete',
                                1: 'Unknown 1'
                            })
                        ])),
                        subrecord('PNAM', string('Procedure Type')),
                        subrecord('FNAM', format(uint32('Flags'), {
                            0: 'Success Completes Package'
                        })),
                        arrayOfSubrecord('Data Input Indexes', 
                            subrecord('PKC2', uint8('Index'))
                        ),
                        arrayOfSubrecord('Flags Override', 
                            subrecord('PFO2', struct('Data', [
                                format(uint32('Set General Flags'), def('PKDTFlags')),
                                format(uint32('Clear General Flags'), def('PKDTFlags')),
                                format(uint16('Set Interrupt Flags'), def('PKDTInterruptFlags')),
                                format(uint16('Clear Interrupt Flags'), def('PKDTInterruptFlags')),
                                format(uint8('Preferred Speed Override'), {
                                    0: 'Walk',
                                    1: 'Jog',
                                    2: 'Run',
                                    3: 'Fast Walk'
                                }),
                                bytes('Unknown', 3)
                            ]))
                        ),
                        arrayOfSubrecord('Unknown', 
                            subrecord('PFOR', unknown())
                        )
                    ]))
                )
            ]),
            def('UNAMs'),
            multiStruct('OnBegin', [
                req(subrecord('POBA', empty('OnBegin Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', bytes('Unused')),
                subrecord('SCTX', bytes('Unused')),
                subrecord('QNAM', bytes('Unused')),
                subrecord('TNAM', bytes('Unused')),
                def('PDTOs')
            ]),
            multiStruct('OnEnd', [
                req(subrecord('POEA', empty('OnEnd Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', bytes('Unused')),
                subrecord('SCTX', bytes('Unused')),
                subrecord('QNAM', bytes('Unused')),
                subrecord('TNAM', bytes('Unused')),
                def('PDTOs')
            ]),
            multiStruct('OnChange', [
                req(subrecord('POCA', empty('OnChange Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', bytes('Unused')),
                subrecord('SCDA', bytes('Unused')),
                subrecord('SCTX', bytes('Unused')),
                subrecord('QNAM', bytes('Unused')),
                subrecord('TNAM', bytes('Unused')),
                def('PDTOs')
            ])
        ]
    })
};