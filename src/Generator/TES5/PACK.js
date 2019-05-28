let {
    def, uint32, uint8, bytes, uint16, 
    subrecord, struct, req, int8, int32, 
    float, ckFormId, array, multiStruct, string, 
    union, unknown, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('PACK', 'Package', {
        members: [
            def('EDID'),
            def('VMADFragmentedPACK'),
            req(subrecord('PKDT', struct('Pack Data', [
                uint32('General Flags', def('PKDTFlags')),
                uint8('Type', {
                    "18": "Package",
                    "19": "Package Template"
                }),
                uint8('Interrupt Override', {
                    "0": "None",
                    "1": "Spectator",
                    "2": "ObserveDead",
                    "3": "GuardWarn",
                    "4": "Combat"
                }),
                uint8('Preferred Speed', {
                    "0": "Walk",
                    "1": "Jog",
                    "2": "Run",
                    "3": "Fast Walk"
                }),
                bytes('Unknown', 1),
                uint16('Interrupt Flags', def('PKDTInterruptFlags')),
                bytes('Unknown', 2)
            ]))),
            req(subrecord('PSDT', struct('Schedule', [
                int8('Month'),
                int8('Day of week', {
                    "0": "Sunday",
                    "1": "Monday",
                    "2": "Tuesday",
                    "3": "Wednesday",
                    "4": "Thursday",
                    "5": "Friday",
                    "6": "Saturday",
                    "7": "Weekdays",
                    "8": "Weekends",
                    "9": "Monday, Wednesday, Friday",
                    "10": "Tuesday, Thursday",
                    "-1": "Any"
                }),
                uint8('Date'),
                int8('Hour'),
                int8('Minute'),
                bytes('Unused', 3),
                int32('Duration (minutes)')
            ]))),
            def('CTDAs'),
            req(multiStruct(Idle Animations, [
                subrecord('IDLF', uint8('Flags', {
                    "0": "Unknown",
                    "8": "Random",
                    "9": "Run in Sequence",
                    "12": "Random, Do Once",
                    "13": "Run in Sequence, Do Once"
                })),
                req(subrecord('IDLC', struct('', [
                    uint8('Animation Count', null),
                    bytes('Unknown', 3)
                ]))),
                req(subrecord('IDLT', float('Idle Timer Setting'))),
                subrecord('IDLA', array('Animations', ckFormId('Animation', ['IDLE']), 0)),
                subrecord('IDLB', bytes('Unknown', 4))
            ])),
            subrecord('CNAM', ckFormId('Combat Style', ['CSTY'])),
            subrecord('QNAM', ckFormId('Owner Quest', ['QUST'])),
            req(subrecord('PKCU', struct('Counter', [
                uint32('Data Input Count'),
                ckFormId('Package Template', ['PACK', 'NULL']),
                uint32('Version Counter (autoincremented)')
            ]))),
            multiStruct(Package Data, [
                arrayOfSubrecord('Data Input Values', undefined),
                def('UNAMs')
            ]),
            subrecord('XNAM', bytes('Marker', 0)),
            multiStruct(Procedure Tree, [
                arrayOfSubrecord('Branches', undefined)
            ]),
            def('UNAMs'),
            multiStruct(OnBegin, [
                req(subrecord('POBA', empty('OnBegin Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', bytes('Unused', 0)),
                subrecord('SCTX', bytes('Unused', 0)),
                subrecord('QNAM', bytes('Unused', 0)),
                subrecord('TNAM', bytes('Unused', 0)),
                def('PDTOs')
            ]),
            multiStruct(OnEnd, [
                req(subrecord('POEA', empty('OnEnd Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', bytes('Unused', 0)),
                subrecord('SCTX', bytes('Unused', 0)),
                subrecord('QNAM', bytes('Unused', 0)),
                subrecord('TNAM', bytes('Unused', 0)),
                def('PDTOs')
            ]),
            multiStruct(OnChange, [
                req(subrecord('POCA', empty('OnChange Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                subrecord('SCHR', bytes('Unused', 0)),
                subrecord('SCDA', bytes('Unused', 0)),
                subrecord('SCTX', bytes('Unused', 0)),
                subrecord('QNAM', bytes('Unused', 0)),
                subrecord('TNAM', bytes('Unused', 0)),
                def('PDTOs')
            ])
        ]
    })
};