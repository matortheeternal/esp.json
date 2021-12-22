let {
    def, flags, uint32, format, subrecord, 
    empty, string, memberStruct, unknown, conflictType, 
    memberArray, enumeration, uint16, int32, float, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SCEN', 'Scene', {
        members: [
            def('EDID'),
            def('VMADFragmentedSCEN'),
            subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Begin on Quest Start',
                1: 'Stop on Quest End',
                2: 'Unknown 3',
                3: 'Repeat Conditions While True',
                4: 'Interruptible'
            }))),
            memberArray('Phases', 
                memberStruct('Phase', [
                    subrecord('HNAM', empty('Marker Phase Start')),
                    subrecord('NAM0', string('Name')),
                    memberStruct('Start Conditions', [
                        def('CTDAs')
                    ]),
                    subrecord('NEXT', empty('Marker')),
                    memberStruct('Completion Conditions', [
                        def('CTDAs')
                    ]),
                    conflictType('Ignore', memberStruct('Unused', [
                        subrecord('SCHR', unknown()),
                        subrecord('SCDA', unknown()),
                        subrecord('SCTX', unknown()),
                        subrecord('QNAM', unknown()),
                        subrecord('SCRO', unknown())
                    ])),
                    subrecord('NEXT', empty('Marker')),
                    conflictType('Ignore', memberStruct('Unused', [
                        subrecord('SCHR', unknown()),
                        subrecord('SCDA', unknown()),
                        subrecord('SCTX', unknown()),
                        subrecord('QNAM', unknown()),
                        subrecord('SCRO', unknown())
                    ])),
                    subrecord('WNAM', uint32('Editor Width')),
                    subrecord('HNAM', empty('Marker Phase End'))
                ])
            ),
            memberArray('Actors', 
                memberStruct('Actor', [
                    subrecord('ALID', uint32('Actor ID')),
                    subrecord('LNAM', format(uint32('Flags'), flags({
                        0: 'No Player Activation',
                        1: 'Optional'
                    }))),
                    subrecord('DNAM', format(uint32('Behaviour Flags'), flags({
                        0: 'Death Pause (unsused)',
                        1: 'Death End',
                        2: 'Combat Pause',
                        3: 'Combat End',
                        4: 'Dialogue Pause',
                        5: 'Dialogue End',
                        6: 'OBS_COM Pause',
                        7: 'OBS_COM End'
                    })))
                ])
            ),
            memberArray('Actions', 
                memberStruct('Action', [
                    subrecord('ANAM', format(uint16('Type'), enumeration({
                        0: 'Dialogue',
                        1: 'Package',
                        2: 'Timer'
                    }))),
                    subrecord('NAM0', string('Name')),
                    subrecord('ALID', int32('Actor ID')),
                    subrecord('LNAM', unknown()),
                    subrecord('INAM', uint32('Index')),
                    subrecord('FNAM', format(uint32('Flags'), flags({
                        0: 'Unknown 1',
                        1: 'Unknown 2',
                        2: 'Unknown 3',
                        3: 'Unknown 4',
                        4: 'Unknown 5',
                        5: 'Unknown 6',
                        6: 'Unknown 7',
                        7: 'Unknown 8',
                        8: 'Unknown 9',
                        9: 'Unknown 10',
                        10: 'Unknown 11',
                        11: 'Unknown 12',
                        12: 'Unknown 13',
                        13: 'Unknown 14',
                        14: 'Unknown 15',
                        15: 'Face Target',
                        16: 'Looping',
                        17: 'Headtrack Player'
                    }))),
                    subrecord('SNAM', uint32('Start Phase')),
                    subrecord('ENAM', uint32('End Phase')),
                    subrecord('SNAM', float('Timer Seconds')),
                    memberArray('Packages', 
                        subrecord('PNAM', ckFormId('Package', ['PACK']))
                    ),
                    subrecord('DATA', ckFormId('Topic', ['DIAL', 'NULL'])),
                    subrecord('HTID', int32('Headtrack Actor ID')),
                    subrecord('DMAX', float('Looping - Max')),
                    subrecord('DMIN', float('Looping - Min')),
                    subrecord('DEMO', format(uint32('Emotion Type'), def('EmotionTypeEnum'))),
                    subrecord('DEVA', uint32('Emotion Value')),
                    conflictType('Ignore', memberStruct('Unused', [
                        subrecord('SCHR', unknown()),
                        subrecord('SCDA', unknown()),
                        subrecord('SCTX', unknown()),
                        subrecord('QNAM', unknown()),
                        subrecord('SCRO', unknown())
                    ])),
                    subrecord('ANAM', empty('End Marker'))
                ])
            ),
            conflictType('Ignore', memberStruct('Unused', [
                subrecord('SCHR', unknown()),
                subrecord('SCDA', unknown()),
                subrecord('SCTX', unknown()),
                subrecord('QNAM', unknown()),
                subrecord('SCRO', unknown())
            ])),
            subrecord('NEXT', empty('Marker')),
            conflictType('Ignore', memberStruct('Unused', [
                subrecord('SCHR', unknown()),
                subrecord('SCDA', unknown()),
                subrecord('SCTX', unknown()),
                subrecord('QNAM', unknown()),
                subrecord('SCRO', unknown())
            ])),
            subrecord('PNAM', ckFormId('Quest', ['QUST'])),
            subrecord('INAM', uint32('Last Action Index')),
            subrecord('VNAM', unknown()),
            def('CTDAs')
        ]
    })
};