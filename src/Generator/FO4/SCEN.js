let {
    def, flags, uint32, format, subrecord, 
    empty, string, memberStruct, uint16, int16, 
    struct, memberArray, int32, enumeration, float, 
    unknown, ckFormId, array, union, record
} = require('../helpers');

module.exports = () => {
    record('SCEN', 'Scene', {
        members: [
            def('EDID'),
            def('VMADFragmentedSCEN'),
            subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Begin on Quest Start',
                1: 'Stop on Quest End',
                2: 'Unknown 2',
                3: 'Repeat Conditions While True',
                4: 'Interruptible',
                5: 'Unknown 5',
                6: 'Prevent Player Exit Dialogue',
                7: 'Unknown 7',
                8: 'Unknown 8',
                9: 'Unknown 9',
                10: 'Unknown 10',
                11: 'Disable Dialogue Camera',
                12: 'No Follower Idle Chatter'
            }))),
            memberArray('Phases', 
                memberStruct('Phase', [
                    subrecord('HNAM', empty('Marker Phase Start')),
                    subrecord('NAM0', string('Name')),
                    memberStruct('Start Conditions', [
                        def('CTDAs')
                    ]),
                    subrecord('NEXT', empty('Marker Start Conditions')),
                    memberStruct('Completion Conditions', [
                        def('CTDAs')
                    ]),
                    subrecord('NEXT', empty('Marker Completion Conditions')),
                    subrecord('WNAM', uint32('Editor Width')),
                    subrecord('FNAM', format(uint16('Flags'), flags({
                        0: 'Start - WalkAway Phase',
                        1: 'Don\'t Run End Scripts on Scene Jump',
                        2: 'Start - Inherit In Templated Scenes'
                    }))),
                    subrecord('SCQS', struct('Set Parent Quest Stage', [
                        int16('On Start'),
                        int16('On Completion')
                    ])),
                    subrecord('HNAM', empty('Marker Phase End'))
                ])
            ),
            memberArray('Actors', 
                memberStruct('Actor', [
                    subrecord('ALID', int32('Alias ID')),
                    subrecord('LNAM', format(uint32('Flags'), flags({
                        0: 'No Player Activation',
                        1: 'Optional',
                        2: 'Run Only Scene Packages',
                        3: 'No Command State'
                    }))),
                    subrecord('DNAM', format(uint32('Behaviour Flags'), flags({
                        0: 'Death Pause',
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
                        2: 'Timer',
                        3: 'Player Dialogue',
                        4: 'Start Scene',
                        5: 'NPC Response Dialogue',
                        6: 'Radio'
                    }))),
                    subrecord('NAM0', string('Name')),
                    subrecord('ALID', int32('Alias ID')),
                    subrecord('INAM', uint32('Index')),
                    subrecord('FNAM', format(uint32('Flags'), flags({
                        0: 'Unknown 0',
                        1: 'Unknown 1',
                        2: 'Unknown 2',
                        3: 'Unknown 3',
                        4: 'Unknown 4',
                        5: 'Unknown 5',
                        6: 'Unknown 6',
                        7: 'Player Positive Use Dialogue Subtype / Hold Into Next Scene',
                        8: 'Player Negative Use Dialogue Subtype',
                        9: 'Player Neutral Use Dialogue Subtype',
                        10: 'Use Dialogue Subtype',
                        11: 'Player Question Use Dialogue Subtype',
                        12: 'Keep/Clear Target on Action End',
                        13: 'Unknown 13',
                        14: 'Unknown 14',
                        15: 'Face Target',
                        16: 'Looping',
                        17: 'Headtrack Player',
                        18: 'Unknown 18',
                        19: 'Ignore For Completion',
                        20: 'Unknown 20',
                        21: 'Camera Speaker Target',
                        22: 'Complete Face Target',
                        23: 'Unknown 23',
                        24: 'Unknown 24',
                        25: 'Unknown 25',
                        26: 'Unknown 26',
                        27: 'NPC Positive Use Dialogue Subtype',
                        28: 'NPC Negative Use Dialogue Subtype',
                        29: 'NPC Neutral Use Dialogue Subtype',
                        30: 'NPC Question Use Dialogue Subtype'
                    }))),
                    subrecord('SNAM', uint32('Start Phase')),
                    subrecord('ENAM', uint32('End Phase')),
                    subrecord('SNAM', float('Timer - Max Seconds')),
                    subrecord('SCQS', int16('Set Parent Quest Stage')),
                    subrecord('TNAM', float('Timer - Min Seconds')),
                    subrecord('STSC', unknown()),
                    memberArray('Start Scenes', 
                        memberStruct('Start Scene', [
                            subrecord('LCEP', ckFormId('Scene', ['SCEN'])),
                            subrecord('INTT', uint16('Phase Index')),
                            subrecord('SSPN', string('Start Phase for Scene')),
                            def('CITC'),
                            def('CTDAs')
                        ])
                    ),
                    subrecord('PTOP', ckFormId('Player Positive Response', ['DIAL'])),
                    subrecord('NTOP', ckFormId('Player Negative Response', ['DIAL'])),
                    subrecord('NETO', ckFormId('Player Neutral Response', ['DIAL'])),
                    subrecord('QTOP', ckFormId('Player Question Response', ['DIAL'])),
                    subrecord('VENC', ckFormId('Player Positive Dialogue Subtype', ['KYWD'])),
                    subrecord('PLVD', ckFormId('Player Negative Dialogue Subtype', ['KYWD'])),
                    subrecord('JOUT', ckFormId('Player Neutral Dialogue Subtype', ['KYWD'])),
                    subrecord('DALC', ckFormId('Player Question Dialogue Subtype', ['KYWD'])),
                    subrecord('DTID', array('NPC Headtracking', 
                        int32('Actor ID')
                    )),
                    subrecord('NPOT', ckFormId('NPC Positive Response', ['DIAL'])),
                    subrecord('NNGT', ckFormId('NPC Negative Response', ['DIAL'])),
                    subrecord('NNUT', ckFormId('NPC Neutral Response', ['DIAL'])),
                    subrecord('NQUT', ckFormId('NPC Question Response', ['DIAL'])),
                    subrecord('NPOS', ckFormId('NPC Positive Dialogue Subtype', ['KYWD'])),
                    subrecord('NNGS', ckFormId('NPC Negative Dialogue Subtype', ['KYWD'])),
                    subrecord('NNUS', ckFormId('NPC Neutral Dialogue Subtype', ['KYWD'])),
                    subrecord('NQUS', ckFormId('NPC Question Dialogue Subtype', ['KYWD'])),
                    subrecord('DTGT', int32('Dialogue Target Actor')),
                    memberArray('Packages', 
                        subrecord('PNAM', ckFormId('Package', ['PACK']))
                    ),
                    subrecord('DATA', ckFormId('Topic', ['DIAL', 'NULL'])),
                    subrecord('HTID', union('', 'SceneActionSoundDecider', [
                        empty('End Scene Say Greeting'),
                        ckFormId('Play Sound', ['SNDR', 'NULL'])
                    ])),
                    subrecord('DMAX', float('Looping - Max')),
                    subrecord('DMIN', float('Looping - Min')),
                    subrecord('CRIS', struct('Camera', [
                        float('FOV On Player Camera'),
                        float('Rate Of Camera Change')
                    ])),
                    subrecord('DEMO', format(uint32('Emotion Type'), def('EmotionTypeEnum'))),
                    subrecord('DEVA', uint32('Emotion Value')),
                    subrecord('HTID', array('Player Headtracking', 
                        int32('Actor ID')
                    )),
                    subrecord('VENC', ckFormId('Dialogue Subtype', ['KYWD'])),
                    subrecord('PNAM', ckFormId('AnimArchType', ['KYWD'])),
                    subrecord('ONAM', ckFormId('Audio Output Override', ['SOPM'])),
                    subrecord('ANAM', empty('End Marker'))
                ])
            ),
            subrecord('PNAM', ckFormId('Quest', ['QUST'])),
            subrecord('INAM', uint32('Last Action Index')),
            subrecord('VNAM', unknown()),
            subrecord('CNAM', float('Camera Distance Override')),
            subrecord('ACTV', float('Dialogue Distance Override')),
            subrecord('CRIS', float('FOV Override')),
            def('KSIZ'),
            def('KWDAs'),
            def('CTDAs'),
            subrecord('SCQS', struct('Set Parent Quest Stage', [
                int16('On Begin'),
                int16('On End')
            ])),
            subrecord('NNAM', string('Notes')),
            subrecord('TNAM', ckFormId('Template Scene', ['SCEN'])),
            subrecord('XNAM', uint32('Index'))
        ]
    })
};